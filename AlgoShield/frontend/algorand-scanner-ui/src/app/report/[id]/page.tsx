'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { ScanResult } from '@/app/page'
import { Download, ArrowLeft, Shield, AlertTriangle, CheckCircle, Info } from 'lucide-react'
import { generateAlgorandPDF, AlgorandReportData } from '@/lib/pdfGenerator'

export default function ReportPage() {
  const params = useParams()
  const [scanData, setScanData] = useState<ScanResult | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id && typeof window !== 'undefined') {
      const reportData = sessionStorage.getItem(`scan-report-${params.id}`)
      if (reportData) {
        try {
          const parsedData = JSON.parse(reportData)
          setScanData(parsedData)
        } catch (error) {
          console.error('Failed to parse report data:', error)
        }
      }
      setLoading(false)
    }
  }, [params.id])

  const handleDownloadPDF = async () => {
    if (!scanData) return

    try {
      const reportData: AlgorandReportData = {
        id: scanData.id || `ALGO-${Date.now()}`,
        contracts: scanData.summary.files_scanned,
        lines: 500,
        assembly_lines: 50,
        ercs: ['ARC-3', 'ARC-19'],
        date: scanData.timestamp || new Date().toISOString(),
        findings: {
          critical_issues: scanData.summary.critical,
          high_issues: scanData.summary.high,
          medium_issues: scanData.summary.medium,
          low_issues: scanData.summary.low,
          informational_issues: 0,
          optimization_issues: 0
        },
        vulnerabilities: scanData.vulnerabilities.map(vuln => ({
          title: vuln.rule_id,
          severity: vuln.severity,
          description: vuln.message,
          file: vuln.file,
          line: vuln.line,
          code: vuln.code_snippet || '',
          recommendation: vuln.fix_suggestion || 'Review and fix this vulnerability'
        }))
      }

      await generateAlgorandPDF(reportData)
    } catch (error) {
      console.error('Failed to generate PDF:', error)
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-600 bg-red-50 border-red-200'
      case 'HIGH': return 'text-orange-600 bg-orange-50 border-orange-200'
      case 'MEDIUM': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'LOW': return 'text-blue-600 bg-blue-50 border-blue-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return <AlertTriangle className="w-5 h-5 text-red-600" />
      case 'HIGH': return <AlertTriangle className="w-5 h-5 text-orange-600" />
      case 'MEDIUM': return <Info className="w-5 h-5 text-yellow-600" />
      case 'LOW': return <CheckCircle className="w-5 h-5 text-blue-600" />
      default: return <Info className="w-5 h-5 text-gray-600" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading report...</p>
        </div>
      </div>
    )
  }

  if (!scanData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Report Not Found</h1>
          <p className="text-gray-600 mb-4">The requested scan report could not be found.</p>
          <button
            onClick={() => window.close()}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Close Window
          </button>
        </div>
      </div>
    )
  }

  const formatDateTime = (timestamp?: string) => {
    if (!timestamp) return 'N/A'
    const date = new Date(timestamp)
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.close()}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Close
              </button>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-600" />
                <h1 className="text-xl font-bold text-gray-900">Security Report</h1>
              </div>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Report Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Report Information</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Report ID:</span>
                  <span className="font-medium">{scanData.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date & Time:</span>
                  <span className="font-medium">{formatDateTime(scanData.timestamp)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Files Scanned:</span>
                  <span className="font-medium">{scanData.summary.files_scanned}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Scan Duration:</span>
                  <span className="font-medium">{scanData.summary.scan_duration}s</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Vulnerability Summary</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-2xl font-bold text-red-600">{scanData.summary.critical}</div>
                  <div className="text-sm text-red-700">Critical</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600">{scanData.summary.high}</div>
                  <div className="text-sm text-orange-700">High</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-2xl font-bold text-yellow-600">{scanData.summary.medium}</div>
                  <div className="text-sm text-yellow-700">Medium</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">{scanData.summary.low}</div>
                  <div className="text-sm text-blue-700">Low</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vulnerabilities List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Detailed Vulnerabilities</h2>
          
          {scanData.vulnerabilities.length === 0 ? (
            <div className="text-center py-8">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Vulnerabilities Found</h3>
              <p className="text-gray-600">Great! Your smart contracts appear to be secure.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {scanData.vulnerabilities.map((vuln, index) => (
                <div key={index} className={`border rounded-lg p-6 ${getSeverityColor(vuln.severity)}`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getSeverityIcon(vuln.severity)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{vuln.rule_id}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(vuln.severity)}`}>
                          {vuln.severity}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{vuln.message}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm font-medium text-gray-600">File:</span>
                          <p className="text-sm text-gray-900">{vuln.file}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-600">Line:</span>
                          <p className="text-sm text-gray-900">{vuln.line}</p>
                        </div>
                      </div>

                      {vuln.code_snippet && (
                        <div className="mb-4">
                          <span className="text-sm font-medium text-gray-600">Code Snippet:</span>
                          <pre className="mt-1 p-3 bg-gray-100 rounded text-sm overflow-x-auto">
                            <code>{vuln.code_snippet}</code>
                          </pre>
                        </div>
                      )}

                      {vuln.fix_suggestion && (
                        <div>
                          <span className="text-sm font-medium text-gray-600">Recommendation:</span>
                          <p className="mt-1 text-sm text-gray-700">{vuln.fix_suggestion}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}