import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';

const execAsync = promisify(exec);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { targetPath, analyzers = ['builtin'], severity = 'LOW', format = 'json' } = req.body;

    if (!targetPath) {
      return res.status(400).json({ error: 'targetPath is required' });
    }

    // Validate target path exists
    const fullPath = path.resolve(targetPath);
    if (!fs.existsSync(fullPath)) {
      return res.status(400).json({ error: 'Target path does not exist' });
    }

    // Construct the command to run the Python scanner
    const scannerPath = path.join(process.cwd(), 'Algo_Shield', 'algorand_scanner', 'cli', 'main.py');
    const analyzerArgs = analyzers.map(a => `-a ${a}`).join(' ');
    
    const command = `cd "${path.join(process.cwd(), 'AlgoShield')}" && python3 -m algorand_scanner.cli.main "${fullPath}" ${analyzerArgs} -s ${severity} -f ${format}`;

    console.log('Executing command:', command);

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
      // The scanner exits with code 3 when vulnerabilities are found, which is expected
      if (error.code === 3 && error.stdout) {
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

    // Return the scan results
    return res.status(200).json({
      success: true,
      results: scanResults,
      command: command
    });

  } catch (error) {
    console.error('Scan error:', error);
    
    if (error.code === 'ETIMEDOUT') {
      return res.status(408).json({ error: 'Scan timed out' });
    }
    
    return res.status(500).json({ 
      error: 'Scan failed', 
      details: error.message,
      command: error.cmd
    });
  }
} 