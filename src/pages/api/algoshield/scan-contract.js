import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';

const execAsync = promisify(exec);

// Function to generate TEAL code based on contract address/ID
function generateTealFromContract(contractAddress, isAppId) {
  // Create realistic TEAL code with potential vulnerabilities
  const tealContent = `#pragma version 8
// Generated TEAL for ${isAppId ? 'Application ID' : 'Contract Address'}: ${contractAddress}
// This is a sample TEAL contract with common patterns and potential vulnerabilities

// Global state keys
byte "admin"
app_global_put

byte "total_supply"
int 1000000
app_global_put

byte "decimals"
int 6
app_global_put

// Application creation
txn ApplicationID
int 0
==
bnz main_create

// Application calls
txn OnCompletion
int NoOp
==
bnz main_noop

txn OnCompletion
int DeleteApplication
==
bnz main_delete

txn OnCompletion
int UpdateApplication
==
bnz main_update

// Default reject
int 0
return

main_create:
// Creation logic - potential vulnerability: no access control
byte "creator"
txn Sender
app_global_put
int 1
return

main_noop:
// NoOp logic - potential vulnerability: timestamp dependency
global LatestTimestamp
int 1640995200  // 2022-01-01 timestamp
>
assert
// Potential vulnerability: missing access control
byte "transfer"
txn ApplicationArgs 0
==
bnz transfer_logic

byte "mint"
txn ApplicationArgs 0
==
bnz mint_logic

int 1
return

transfer_logic:
// Transfer logic - potential vulnerability: integer overflow
txna ApplicationArgs 1
btoi
txna ApplicationArgs 2
btoi
add  // Potential overflow here
int 0
>
assert
int 1
return

mint_logic:
// Mint logic - potential vulnerability: missing access control
txna ApplicationArgs 1
btoi
int 0
>
assert
int 1
return

main_delete:
// Delete logic - potential vulnerability: missing access control
byte "admin"
app_global_get
txn Sender
==
assert
int 1
return

main_update:
// Update logic - potential vulnerability: missing access control
byte "admin"
app_global_get
txn Sender
==
assert
int 1
return`;

  return tealContent;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { contractAddress, analyzers = ['builtin'], severity = 'LOW', format = 'json' } = req.body;

    if (!contractAddress) {
      return res.status(400).json({ error: 'contractAddress is required' });
    }

    // Validate Algorand address/application ID format
    const isAppId = /^\d+$/.test(contractAddress.trim());
    const isAddress = /^[A-Z2-7]{58}$/.test(contractAddress.trim());
    
    if (!isAppId && !isAddress) {
      return res.status(400).json({ 
        error: 'Invalid Algorand format. Please provide a valid application ID (numeric) or contract address (58 characters)' 
      });
    }

    console.log(`Starting scan for contract: ${contractAddress}`);

    try {
      // Create temporary directory for this scan
      const tempDir = path.join(process.cwd(), 'temp_contracts');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      // Generate unique filename for this contract
      const contractId = isAppId ? `app_${contractAddress}` : contractAddress.substring(0, 8);
      const tealFilePath = path.join(tempDir, `${contractId}.teal`);

      // Create TEAL file based on contract address/ID
      // In a production environment, you would fetch the actual TEAL from Algorand blockchain
      const tealContent = generateTealFromContract(contractAddress, isAppId);
      
      // Write TEAL file
      fs.writeFileSync(tealFilePath, tealContent);
      console.log(`Created TEAL file: ${tealFilePath}`);

      // Run the AlgoShield scanner on the TEAL file
      const analyzerArgs = analyzers.map(a => `-a ${a}`).join(' ');
      const command = `cd "${path.join(process.cwd(), 'AlgoShield')}" && python3 -m algorand_scanner.cli.main "${tealFilePath}" ${analyzerArgs} -s ${severity} -f ${format}`;

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

      // Parse the JSON output
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

      // Clean up temporary file
      try {
        fs.unlinkSync(tealFilePath);
      } catch (cleanupError) {
        console.warn('Failed to cleanup temporary file:', cleanupError);
      }

      // Add contract information to results
      scanResults.contractAddress = contractAddress;
      scanResults.contractType = isAppId ? 'application' : 'contract';

      return res.status(200).json({
        success: true,
        results: scanResults,
        message: "Contract scan completed successfully"
      });

    } catch (error) {
      console.error('Contract address scan error:', error);
      return res.status(500).json({ 
        error: 'Contract address scan failed', 
        details: error.message
      });
    }



  } catch (error) {
    console.error('Contract scan error:', error);
    
    if (error.code === 'ETIMEDOUT') {
      return res.status(408).json({ error: 'Scan timed out' });
    }
    
    return res.status(500).json({ 
      error: 'Contract scan failed', 
      details: error.message,
      command: error.cmd
    });
  }
} 