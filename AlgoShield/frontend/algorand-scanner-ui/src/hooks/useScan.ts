import { useState, useCallback } from 'react'
import { api, ScanRequest, ScanResponse, withErrorHandling } from '@/lib/api'
import { toast } from 'react-hot-toast'

export function useScan() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const startScan = useCallback(async (request: ScanRequest) => {
    setIsScanning(true)
    setError(null)
    setScanResult(null)

    try {
      const response = await withErrorHandling(
        () => api.startScan(request),
        'Failed to start scan'
      )

      if (!response) {
        throw new Error('Failed to start scan')
      }

      // Poll for results
      const pollInterval = setInterval(async () => {
        try {
          const statusResponse = await api.getScanStatus(response.scanId)
          
          if (statusResponse.status === 'completed') {
            clearInterval(pollInterval)
            setScanResult(statusResponse.result)
            setIsScanning(false)
            toast.success('Scan completed successfully!')
          } else if (statusResponse.status === 'failed') {
            clearInterval(pollInterval)
            setError(statusResponse.error || 'Scan failed')
            setIsScanning(false)
            toast.error('Scan failed')
          }
        } catch (pollError) {
          clearInterval(pollInterval)
          setError('Failed to get scan status')
          setIsScanning(false)
          toast.error('Failed to get scan status')
        }
      }, 2000) // Poll every 2 seconds

      // Cleanup after 5 minutes
      setTimeout(() => {
        clearInterval(pollInterval)
        if (isScanning) {
          setError('Scan timeout')
          setIsScanning(false)
          toast.error('Scan timed out')
        }
      }, 300000) // 5 minutes

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      setIsScanning(false)
      toast.error(err instanceof Error ? err.message : 'Failed to start scan')
    }
  }, [isScanning])

  const resetScan = useCallback(() => {
    setIsScanning(false)
    setScanResult(null)
    setError(null)
  }, [])

  return {
    isScanning,
    scanResult,
    error,
    startScan,
    resetScan
  }
}