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
    const { gitUrl, severity = 'LOW', format = 'json' } = req.body;

    if (!gitUrl) {
      return res.status(400).json({ error: 'gitUrl is required' });
    }

    // Validate git URL format
    const gitUrlPattern = /^(https?:\/\/|git@)([^\/]+)\/([^\/]+\/[^\/]+)(?:\.git)?$/;
    if (!gitUrlPattern.test(gitUrl)) {
      return res.status(400).json({ error: 'Invalid Git repository URL format' });
    }

    // Create temporary directory for cloning
    const tempDir = path.join(process.cwd(), 'temp_repos');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    // Generate unique directory name
    const repoName = `repo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const repoPath = path.join(tempDir, repoName);

    console.log('Cloning repository:', gitUrl, 'to:', repoPath);

    // Clone the repository
    try {
      await execAsync(`git clone "${gitUrl}" "${repoPath}"`, {
        timeout: 60000, // 1 minute timeout for cloning
        cwd: tempDir
      });
    } catch (cloneError) {
      console.error('Failed to clone repository:', cloneError);
      return res.status(500).json({ 
        error: 'Failed to clone repository',
        details: cloneError.message
      });
    }

    // Check if repository was cloned successfully
    if (!fs.existsSync(repoPath)) {
      return res.status(500).json({ error: 'Repository cloning failed' });
    }

    const analyzers = ['builtin', 'tealer'];
    const analyzerArgs = analyzers.map(a => `-a ${a}`).join(' ');
    
    const command = `cd "${path.join(process.cwd(), 'AlgoShield')}" && python3 -m algorand_scanner.cli.main "${repoPath}" ${analyzerArgs} -s ${severity} -f ${format}`;

    console.log('Executing git repository scan command:', command);

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

    // Clean up cloned repository
    try {
      await execAsync(`rm -rf "${repoPath}"`, {
        timeout: 30000, // 30 seconds timeout for cleanup
        cwd: tempDir
      });
    } catch (cleanupError) {
      console.warn('Failed to cleanup cloned repository:', cleanupError);
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

    // Add git repository info to results
    scanResults.gitRepository = gitUrl;

    // Return the scan results
    return res.status(200).json({
      success: true,
      results: scanResults,
      command: command
    });

  } catch (error) {
    console.error('Git repository scan error:', error);
    
    if (error.code === 'ETIMEDOUT') {
      return res.status(408).json({ error: 'Scan timed out' });
    }
    
    return res.status(500).json({ 
      error: 'Git repository scan failed', 
      details: error.message,
      command: error.cmd
    });
  }
} 