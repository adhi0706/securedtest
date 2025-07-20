import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { setScanNowModal } from '../../redux/commonSlice';

const ScanNowModal = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const scanNowModal = useSelector((state) => state.common.scanNowModal);

  // State for upload method
  const [uploadMethod, setUploadMethod] = useState('file');
  
  // State for file upload
  const [uploadedFiles, setUploadedFiles] = useState([]);
  
  // State for contract address
  const [contractAddress, setContractAddress] = useState('');
  
  // State for GitHub repository
  const [githubUrl, setGithubUrl] = useState('');
  
  // State for scan configuration
  const [severityThreshold, setSeverityThreshold] = useState('LOW');
  
  // State for scanning
  const [isScanning, setIsScanning] = useState(false);

  const analyzeFileContent = (content, filename) => {
    const extension = filename.split('.').pop()?.toLowerCase();
    
    // Check for Algorand-specific patterns
    const algorandPatterns = [
      /from pyteal import/i,
      /import pyteal/i,
      /Global\./,
      /Txn\./,
      /App\./,
      /Bytes\(/,
      /Int\(/,
      /Approve\(\)/,
      /Reject\(\)/,
      /#pragma version/i,
      /algosdk/i,
      /algorand/i
    ];

    const isAlgorandContract = algorandPatterns.some(pattern => pattern.test(content));
    
    let contractType = 'Unknown';
    if (extension === 'py' && isAlgorandContract) {
      contractType = 'PyTeal Contract';
    } else if (extension === 'teal') {
      contractType = 'TEAL Contract';
    } else if ((extension === 'ts' || extension === 'tsx') && isAlgorandContract) {
      contractType = 'TypeScript Algorand App';
    } else if ((extension === 'js' || extension === 'jsx') && isAlgorandContract) {
      contractType = 'JavaScript Algorand App';
    }

    return { isAlgorandContract, contractType };
  };

  const handleFileInputChange = useCallback(async (event) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    try {
      const newFiles = [];

      for (const file of files) {
        try {
          const content = await file.text();
          const { isAlgorandContract, contractType } = analyzeFileContent(content, file.name);
          
          newFiles.push({
            file,
            content,
            isAlgorandContract,
            contractType
          });
        } catch (error) {
          console.error(`Failed to read file: ${file.name}`, error);
          toast.error(`Failed to read file: ${file.name}`);
        }
      }

      setUploadedFiles(prev => [...prev, ...newFiles]);
      
      const algorandFiles = newFiles.filter(f => f.isAlgorandContract);
      
      if (algorandFiles.length > 0) {
        toast.success(`Found ${algorandFiles.length} Algorand contract(s)`);
      } else {
        toast.success(`Uploaded ${newFiles.length} file(s)`);
      }
    } catch (error) {
      toast.error('Failed to process files');
    }

    // Reset the input
    event.target.value = '';
  }, []);

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const closeModal = () => {
    dispatch(setScanNowModal(false));
    setUploadedFiles([]);
    setContractAddress('');
    setGithubUrl('');
    setSeverityThreshold('LOW');
    setUploadMethod('file');
  };

  const handleScan = useCallback(async () => {
    // Validate input based on upload method
    if (uploadMethod === 'file' && uploadedFiles.length === 0) {
      toast.error('Please upload at least one file');
      return;
    }
    if (uploadMethod === 'address' && !contractAddress.trim()) {
      toast.error('Please enter a contract address');
      return;
    }
    if (uploadMethod === 'github' && !githubUrl.trim()) {
      toast.error('Please enter a GitHub repository URL');
      return;
    }

    setIsScanning(true);

    // Show appropriate loading message based on method
    let loadingMessage = 'Scanning files...';
    if (uploadMethod === 'address') {
      loadingMessage = 'Fetching and analyzing contract...';
    } else if (uploadMethod === 'github') {
      loadingMessage = 'Cloning repository and scanning...';
    }
    
    toast.info(loadingMessage);

    try {
      let scanResults;
      
      if (uploadMethod === 'file') {
        // Upload files and scan
        const formData = new FormData();
        uploadedFiles.forEach((uploadedFile) => {
          formData.append('file', uploadedFile.file);
        });
        formData.append('analyzers', 'builtin,tealer');
        formData.append('severity', severityThreshold);
        formData.append('format', 'json');
        
        const response = await fetch('/api/algoshield/upload', {
          method: 'POST',
          body: formData,
        });
        
        if (!response.ok) {
          throw new Error('Upload failed');
        }
        
        const result = await response.json();
        scanResults = result.results;
        
      } else if (uploadMethod === 'address') {
        // Scan by contract address
        const response = await fetch('/api/algoshield/scan-contract', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contractAddress: contractAddress,
            analyzers: ['builtin', 'tealer'],
            severity: severityThreshold,
            format: 'json'
          }),
        });
        
        if (!response.ok) {
          throw new Error('Contract address scan failed');
        }
        
        const result = await response.json();
        scanResults = result.results;
        
      } else if (uploadMethod === 'github') {
        // Clone git repo and scan
        const response = await fetch('/api/algoshield/scan-git', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            gitUrl: githubUrl,
            analyzers: ['builtin', 'tealer'],
            severity: severityThreshold,
            format: 'json'
          }),
        });
        
        if (!response.ok) {
          throw new Error('Git repository scan failed');
        }
        
        const result = await response.json();
        scanResults = result.results;
      }
      
      if (scanResults) {
        // Store results in localStorage
        const scanId = Date.now().toString();
        localStorage.setItem(`algoshield_scan_${scanId}`, JSON.stringify({
          id: scanId,
          scanResults: scanResults,
          timestamp: new Date().toISOString(),
          fileName: uploadMethod === 'file' ? `${uploadedFiles.length} file(s)` : 
                   uploadMethod === 'address' ? `Contract: ${contractAddress}` :
                   `Repository: ${githubUrl}`,
          uploadMethod: uploadMethod
        }));
        
        toast.success('Scan completed successfully!');
        closeModal();
        navigate.push(`/algoshield/report/${scanId}`);
      }
      
    } catch (error) {
      console.error('Scan failed:', error);
      toast.error('Scan failed. Please try again.');
    } finally {
      setIsScanning(false);
    }
  }, [uploadMethod, uploadedFiles, contractAddress, githubUrl, severityThreshold, navigate]);

  if (!scanNowModal) return null;

  return (
    <div className="scan-now-modal-container">
      <div className="scan-now-modal">
        <div className="scan-now-modal-header">
          <div className="scan-now-modal-header-title">Scan Now</div>
          <div className="scan-now-modal-close-container">
            <i
              onClick={!isScanning && closeModal}
              className="fa-solid fa-xmark fa-xl cursor-pointer"
            />
          </div>
        </div>
        
        <div className="scan-now-modal-body">
          {/* Upload Method Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Scan Method</label>
            <div className="flex space-x-4">
              <button
                onClick={() => setUploadMethod('file')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  uploadMethod === 'file'
                    ? 'bg-tertiary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="fa-solid fa-file-upload mr-2"></i>
                Upload Files
              </button>
              <button
                onClick={() => setUploadMethod('address')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  uploadMethod === 'address'
                    ? 'bg-tertiary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="fa-solid fa-link mr-2"></i>
                Contract Address
              </button>
              <button
                onClick={() => setUploadMethod('github')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  uploadMethod === 'github'
                    ? 'bg-tertiary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="fab fa-github mr-2"></i>
                GitHub Repository
              </button>
            </div>
          </div>

          {/* File Upload Method */}
          {uploadMethod === 'file' && (
            <div className="space-y-4">
              <div className="text-center">
                <label className="inline-flex items-center px-6 py-3 bg-tertiary text-white rounded-lg cursor-pointer hover:bg-opacity-90 transition-colors">
                  <i className="fa-solid fa-upload mr-2"></i>
                  Choose Files
                  <input
                    type="file"
                    multiple
                    accept=".py,.teal,.ts,.tsx,.js,.jsx"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                </label>
                <p className="text-sm text-gray-500 mt-2">
                  Supports .py, .teal, .ts, .tsx, .js, .jsx files
                </p>
              </div>
            </div>
          )}

          {/* Contract Address Method */}
          {uploadMethod === 'address' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Algorand Contract Address
                </label>
                <input
                  type="text"
                  value={contractAddress}
                  onChange={(e) => setContractAddress(e.target.value)}
                  placeholder="Enter Algorand contract address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter a valid Algorand application ID or contract address
                </p>
              </div>
            </div>
          )}

          {/* GitHub Repository Method */}
          {uploadMethod === 'github' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GitHub Repository URL
                </label>
                <input
                  type="text"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/username/repository"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter a GitHub repository URL containing Algorand smart contracts
                </p>
              </div>
            </div>
          )}

          {/* Uploaded Files Display */}
          {uploadMethod === 'file' && uploadedFiles.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Uploaded Files</h3>
              <div className="space-y-2">
                {uploadedFiles.map((uploadedFile, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg border ${
                      uploadedFile.isAlgorandContract
                        ? 'border-green-200 bg-green-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {uploadedFile.isAlgorandContract ? (
                        <i className="fa-solid fa-check-circle text-green-600"></i>
                      ) : (
                        <i className="fa-solid fa-exclamation-triangle text-yellow-600"></i>
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{uploadedFile.file.name}</p>
                        <p className="text-sm text-gray-600">{uploadedFile.contractType}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <i className="fa-solid fa-times"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scan Configuration */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Scan Configuration</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Severity Threshold
                </label>
                <select
                  value={severityThreshold}
                  onChange={(e) => setSeverityThreshold(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
                >
                  <option value="LOW">Low and above</option>
                  <option value="MEDIUM">Medium and above</option>
                  <option value="HIGH">High and above</option>
                  <option value="CRITICAL">Critical only</option>
                </select>
              </div>

            </div>
          </div>
        </div>

        <div className="scan-now-modal-fotter">
          <div className="scan-now-modal-footer-button">
            <button
              onClick={!isScanning && closeModal}
              className="w-[120px] py-3 px-2 rounded-xl border border-tertiary active:bg-tertiary"
            >
              Cancel
            </button>
          </div>
          <div className="scan-now-modal-footer-button">
            <button
              onClick={!isScanning && handleScan}
              disabled={isScanning || (uploadMethod === 'file' && uploadedFiles.length === 0)}
              className={`w-[120px] border border-tertiary py-3 px-2 rounded-xl ${
                isScanning || (uploadMethod === 'file' && uploadedFiles.length === 0)
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-tertiary text-white active:bg-white active:text-tertiary'
              }`}
            >
              {isScanning ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Scanning...
                </div>
              ) : uploadMethod === 'file' ? (
                `Scan ${uploadedFiles.length} File${uploadedFiles.length !== 1 ? 's' : ''}`
              ) : uploadMethod === 'address' ? (
                'Analyze Contract'
              ) : (
                'Scan Repository'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanNowModal; 