import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export interface ScanRequest {
  files: File[]
  scanType: 'quick' | 'standard' | 'deep'
  includeTests: boolean
}

export interface ScanResponse {
  scanId: string
  status: 'pending' | 'running' | 'completed' | 'failed'
  result?: any
  error?: string
}

export const api = {
  // Upload files and start scan
  async startScan(request: ScanRequest): Promise<ScanResponse> {
    const formData = new FormData()
    
    request.files.forEach((file, index) => {
      formData.append(`file_${index}`, file)
    })
    
    formData.append('scan_type', request.scanType)
    formData.append('include_tests', request.includeTests.toString())
    
    const response = await axios.post(`${API_BASE_URL}/api/scan`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    
    return response.data
  },

  // Get scan status and results
  async getScanStatus(scanId: string): Promise<ScanResponse> {
    const response = await axios.get(`${API_BASE_URL}/api/scan/${scanId}`)
    return response.data
  },

  // Get scan history
  async getScanHistory(): Promise<ScanResponse[]> {
    const response = await axios.get(`${API_BASE_URL}/api/scans`)
    return response.data
  },

  // Download scan report
  async downloadReport(scanId: string, format: 'json' | 'pdf' = 'json'): Promise<Blob> {
    const response = await axios.get(`${API_BASE_URL}/api/scan/${scanId}/report`, {
      params: { format },
      responseType: 'blob'
    })
    return response.data
  },

  // Health check
  async healthCheck(): Promise<{ status: string; version: string }> {
    const response = await axios.get(`${API_BASE_URL}/api/health`)
    return response.data
  }
}

// Error handling wrapper
export const withErrorHandling = async <T>(
  apiCall: () => Promise<T>,
  errorMessage = 'An error occurred'
): Promise<T | null> => {
  try {
    return await apiCall()
  } catch (error) {
    console.error(errorMessage, error)
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message)
    }
    throw new Error(errorMessage)
  }
}