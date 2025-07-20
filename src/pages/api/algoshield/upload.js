import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Disable the default body parser to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse the form data
    const form = formidable({
      uploadDir: path.join(process.cwd(), 'uploads'),
      keepExtensions: true,
      maxFileSize: 50 * 1024 * 1024, // 50MB limit
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Get the uploaded file
    const uploadedFile = files.file;
    if (!uploadedFile) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    console.log('Uploaded file:', JSON.stringify(uploadedFile, null, 2));
    console.log('Files object keys:', Object.keys(files));
    console.log('File object keys:', Object.keys(uploadedFile));

    const analyzers = ['builtin', 'tealer'];
    const severity = fields.severity || 'LOW';
    const format = fields.format || 'json';

    // Create a temporary directory for this scan
    const scanId = Date.now().toString();
    const scanDir = path.join(uploadsDir, scanId);
    fs.mkdirSync(scanDir, { recursive: true });

    // Find the uploaded file in the uploads directory
    const uploadedFiles = fs.readdirSync(uploadsDir).filter(f => f.endsWith('.ts') || f.endsWith('.py') || f.endsWith('.teal') || f.endsWith('.js'));
    
    if (uploadedFiles.length === 0) {
      return res.status(400).json({ error: 'No valid files found in uploads directory' });
    }
    
    // Use the most recent uploaded file
    const latestFile = uploadedFiles[uploadedFiles.length - 1];
    const filePath = path.join(uploadsDir, latestFile);
    const fileName = latestFile;

    // Construct the command to run the Python scanner
    const analyzerArgs = analyzers.map(a => `-a ${a}`).join(' ');
    const command = `cd "${path.join(process.cwd(), 'AlgoShield')}" && python3 -m algorand_scanner.cli.main "${filePath}" ${analyzerArgs} -s ${severity} -f ${format}`;

    console.log('Executing scan command:', command);

    // Execute the scanner
    let stdout, stderr;
    try {
      const result = await execAsync(command, {
        timeout: 300000, // 5 minutes timeout
        cwd: path.join(process.cwd(), 'AlgoShield')
      });
      stdout = result.stdout;
      stderr = result.stderr;
    } catch (error) {
      // The scanner exits with different codes when vulnerabilities are found
      // Code 2: Vulnerabilities found (some tools)
      // Code 3: Vulnerabilities found (other tools)
      if ((error.code === 2 || error.code === 3) && error.stdout) {
        stdout = error.stdout;
        stderr = error.stderr;
      } else {
        throw error;
      }
    }

    if (stderr) {
      console.error('Scanner stderr:', stderr);
    }

    // Parse the JSON output - extract JSON from stdout (handle extra lines)
    let scanResults;
    try {
      // Find the JSON object in the output (it starts with {)
      const jsonStart = stdout.indexOf('{');
      if (jsonStart === -1) {
        throw new Error('No JSON found in output');
      }
      const jsonString = stdout.substring(jsonStart);
      scanResults = JSON.parse(jsonString);
    } catch (parseError) {
      console.error('Failed to parse scanner output:', parseError);
      console.error('Raw output:', stdout);
      return res.status(500).json({ 
        error: 'Failed to parse scanner results',
        rawOutput: stdout,
        stderr: stderr
      });
    }

    // Clean up the temporary files
    try {
      fs.rmSync(scanDir, { recursive: true, force: true });
    } catch (cleanupError) {
      console.error('Failed to cleanup temporary files:', cleanupError);
    }

    // Return the scan results
    return res.status(200).json({
      success: true,
      scanId: scanId,
      fileName: fileName,
      results: scanResults,
      command: command
    });

  } catch (error) {
    console.error('Upload/scan error:', error);
    
    if (error.code === 'ETIMEDOUT') {
      return res.status(408).json({ error: 'Scan timed out' });
    }
    
    return res.status(500).json({ 
      error: 'Upload/scan failed', 
      details: error.message
    });
  }
} 