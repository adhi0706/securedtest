'use client'

import { useState, useCallback } from 'react'
import { Upload, X, FileText, AlertCircle, CheckCircle, Github, Link } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { LoadingSpinner } from './LoadingSpinner'

interface UploadedFile {
  file: File
  content: string
  isAlgorandContract: boolean
  contractType: string
}

interface FileUploadProps {
  onScanStart: () => void
  onScanComplete: (result: any) => void
  onScanError: () => void
  isScanning: boolean
}

export function FileUpload({ onScanStart, onScanComplete, onScanError, isScanning }: FileUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [selectedAnalyzers, setSelectedAnalyzers] = useState<string[]>(['builtin'])
  const [severityThreshold, setSeverityThreshold] = useState('LOW')
  const [contractAddress, setContractAddress] = useState('')
  const [githubUrl, setGithubUrl] = useState('')
  const [uploadMethod, setUploadMethod] = useState<'file' | 'address' | 'github'>('file')

  const analyzeFileContent = (content: string, filename: string) => {
    const extension = filename.split('.').pop()?.toLowerCase()
    
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
    ]

    const isAlgorandContract = algorandPatterns.some(pattern => pattern.test(content))
    
    let contractType = 'Unknown'
    if (extension === 'py' && isAlgorandContract) {
      contractType = 'PyTeal Contract'
    } else if (extension === 'teal') {
      contractType = 'TEAL Contract'
    } else if ((extension === 'ts' || extension === 'tsx') && isAlgorandContract) {
      contractType = 'TypeScript Algorand App'
    } else if ((extension === 'js' || extension === 'jsx') && isAlgorandContract) {
      contractType = 'JavaScript Algorand App'
    }

    return { isAlgorandContract, contractType }
  }

  const handleFileInputChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    if (files.length === 0) return

    // Show loading toast for large files
    const loadingToast = files.length > 3 ? toast.loading('Processing files...') : null

    try {
      const newFiles: UploadedFile[] = []

      // Process files in smaller batches to avoid blocking
      for (let i = 0; i < files.length; i += 2) {
        const batch = files.slice(i, i + 2)
        
        await Promise.all(batch.map(async (file) => {
          try {
            const content = await file.text()
            const { isAlgorandContract, contractType } = analyzeFileContent(content, file.name)
            
            newFiles.push({
              file,
              content,
              isAlgorandContract,
              contractType
            })
          } catch (error) {
            console.error(`Failed to read file: ${file.name}`, error)
            toast.error(`Failed to read file: ${file.name}`)
          }
        }))

        // Small delay to prevent blocking
        if (i + 2 < files.length) {
          await new Promise(resolve => setTimeout(resolve, 10))
        }
      }

      setUploadedFiles(prev => [...prev, ...newFiles])
      
      const algorandFiles = newFiles.filter(f => f.isAlgorandContract)
      
      if (loadingToast) {
        toast.dismiss(loadingToast)
      }
      
      if (algorandFiles.length > 0) {
        toast.success(`Found ${algorandFiles.length} Algorand contract(s)`)
      } else {
        toast.success(`Uploaded ${newFiles.length} file(s)`)
      }
    } catch (error) {
      if (loadingToast) {
        toast.dismiss(loadingToast)
      }
      toast.error('Failed to process files')
    }

    // Reset the input
    event.target.value = ''
  }, [])

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleScan = useCallback(async () => {
    // Validate input based on upload method
    if (uploadMethod === 'file' && uploadedFiles.length === 0) {
      toast.error('Please upload at least one file')
      return
    }
    if (uploadMethod === 'address' && !contractAddress.trim()) {
      toast.error('Please enter a contract address')
      return
    }
    if (uploadMethod === 'github' && !githubUrl.trim()) {
      toast.error('Please enter a GitHub repository URL')
      return
    }

    onScanStart()

    // Show appropriate loading message based on method
    let loadingMessage = 'Scanning files...'
    if (uploadMethod === 'address') {
      loadingMessage = 'Fetching and analyzing contract...'
    } else if (uploadMethod === 'github') {
      loadingMessage = 'Cloning repository and scanning...'
    }
    
    const loadingToast = toast.loading(loadingMessage)

    try {
      const formData = new FormData()
      
      if (uploadMethod === 'file') {
        uploadedFiles.forEach((uploadedFile) => {
          formData.append('files', uploadedFile.file)
        })
      } else if (uploadMethod === 'address') {
        formData.append('contract_address', contractAddress)
      } else if (uploadMethod === 'github') {
        formData.append('github_url', githubUrl)
      }
      
      formData.append('upload_method', uploadMethod)
      formData.append('analyzers', JSON.stringify(selectedAnalyzers))
      formData.append('severity_threshold', severityThreshold)

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 60000) // 60 second timeout

      const response = await fetch('/api/scan', {
        method: 'POST',
        body: formData,
        signal: controller.signal
      })

      clearTimeout(timeoutId)
      toast.dismiss(loadingToast)

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
      }

      const result = await response.json()
      onScanComplete(result)
      toast.success('Scan completed successfully!')
    } catch (error) {
      toast.dismiss(loadingToast)
      console.error('Scan failed:', error)
      onScanError()
      
      if (error instanceof Error && error.name === 'AbortError') {
        toast.error('Scan timed out. Please try again with smaller files.')
      } else {
        toast.error('Scan failed. Please try again.')
      }
    }
  }, [uploadMethod, uploadedFiles, contractAddress, githubUrl, selectedAnalyzers, severityThreshold, onScanStart, onScanComplete, onScanError])

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover-lift animate-scaleIn">
      <h2 className="text-xl font-bold mb-4 animate-fadeIn">Analyze Smart Contracts</h2>
      
      {/* Upload Method Selection */}
      <div className="mb-6 animate-slideInUp animation-delay-100">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setUploadMethod('file')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover-scale ${
              uploadMethod === 'file'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Upload Files
          </button>
          <button
            onClick={() => setUploadMethod('address')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover-scale ${
              uploadMethod === 'address'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Link className="w-4 h-4 inline mr-2" />
            Contract Address
          </button>
          <button
            onClick={() => setUploadMethod('github')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover-scale ${
              uploadMethod === 'github'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Github className="w-4 h-4 inline mr-2" />
            GitHub Repository
          </button>
        </div>
      </div>

      {/* File Upload Method */}
      {uploadMethod === 'file' && (
        <div className="space-y-4">
          <div className="text-center">
            <label className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition-colors">
              <Upload className="w-5 h-5 mr-2" />
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
              placeholder="Enter Algorand contract address (e.g., AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
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
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Analyzer Selection */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Analyzer Configuration</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Analyzers
            </label>
            <div className="space-y-2">
              {['builtin', 'tealer'].map((analyzer) => (
                <label key={analyzer} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedAnalyzers.includes(analyzer)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedAnalyzers(prev => [...prev, analyzer])
                      } else {
                        setSelectedAnalyzers(prev => prev.filter(a => a !== analyzer))
                      }
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700 capitalize">{analyzer}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Severity Threshold
            </label>
            <select
              value={severityThreshold}
              onChange={(e) => setSeverityThreshold(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="LOW">Low and above</option>
              <option value="MEDIUM">Medium and above</option>
              <option value="HIGH">High and above</option>
              <option value="CRITICAL">Critical only</option>
            </select>
          </div>
        </div>
      </div>

      {/* Scan Button */}
      <div className="mt-6">
        <button
          onClick={handleScan}
          disabled={isScanning || (uploadMethod === 'file' && uploadedFiles.length === 0)}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 hover-scale animate-bounceIn animation-delay-300 ${
            isScanning || (uploadMethod === 'file' && uploadedFiles.length === 0)
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'
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
  )
}