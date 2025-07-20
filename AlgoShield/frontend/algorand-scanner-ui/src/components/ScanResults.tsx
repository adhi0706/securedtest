'use client'

import { useState } from 'react'
import { Download, AlertTriangle, CheckCircle, FileText, Eye, EyeOff } from 'lucide-react'
import { ScanResult } from '@/app/page'
import { generateAlgorandPDF, AlgorandReportData } from '@/lib/pdfGenerator'

interface ScanResultsProps {
  result: ScanResult | null
  isScanning: boolean
}

export function ScanResults({ result, isScanning }: ScanResultsProps) {
  const [expandedVulns, setExpandedVulns] = useState<Set<number>>(new Set())

  const toggleVulnExpansion = (index: number) => {
    const newExpanded = new Set(expandedVulns)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedVulns(newExpanded)
  }

  const handleDownloadReport = async () => {
    if (!result) {
      console.log('No scan result available')
      return
    }

    console.log('Download button clicked, scan result:', result)

    try {
      const reportData: AlgorandReportData = {
        id: `ALGO-${Date.now()}`,
        contracts: result.summary.files_scanned,
        lines: 500,
        assembly_lines: 50,
        ercs: ['ARC-3', 'ARC-19'],
        date: new Date().toISOString(),
        findings: {
          critical_issues: result.summary.critical,
          high_issues: result.summary.high,
          medium_issues: result.summary.medium,
          low_issues: result.summary.low,
          informational_issues: 0,
          optimization_issues: 0
        },
        vulnerabilities: result.vulnerabilities.map(vuln => ({
          title: vuln.rule_id,
          severity: vuln.severity,
          description: vuln.message,
          file: vuln.file,
          line: vuln.line,
          code: vuln.code_snippet || '',
          recommendation: vuln.fix_suggestion || 'Review and fix this vulnerability'
        }))
      }

      console.log('Calling generateAlgorandPDF with data:', reportData)
      await generateAlgorandPDF(reportData)
      console.log('PDF generation completed')
    } catch (error) {
      console.error('Failed to generate PDF:', error)
      alert('Failed to generate PDF. Please check the console for details.')
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

  if (isScanning) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 animate-scaleIn">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold mb-2 animate-fadeIn">Scanning Files...</h3>
          <p className="text-gray-600 animate-fadeIn animation-delay-200">Analyzing your smart contracts for vulnerabilities</p>
        </div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 animate-fadeIn hover-lift">
        <div className="text-center text-gray-500">
          <AlertTriangle className="mx-auto h-12 w-12 mb-4 animate-bounceIn" />
          <h3 className="text-lg font-semibold mb-2 animate-slideInUp animation-delay-200">No Scan Results</h3>
          <p className="animate-slideInUp animation-delay-300">Upload and scan files to see vulnerability results here</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-scaleIn">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Scan Results</h3>
        <button
          onClick={handleDownloadReport}
          className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>PDF Report</span>
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-3 bg-red-50 rounded-lg border border-red-200">
          <div className="text-2xl font-bold text-red-600">{result.summary.critical}</div>
          <div className="text-sm text-red-700">Critical</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
          <div className="text-2xl font-bold text-orange-600">{result.summary.high}</div>
          <div className="text-sm text-orange-700">High</div>
        </div>
        <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="text-2xl font-bold text-yellow-600">{result.summary.medium}</div>
          <div className="text-sm text-yellow-700">Medium</div>
        </div>
        <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-2xl font-bold text-blue-600">{result.summary.low}</div>
          <div className="text-sm text-blue-700">Low</div>
        </div>
      </div>

      {/* Vulnerabilities List */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">Vulnerabilities Found ({result.vulnerabilities.length})</h4>
        
        {result.vulnerabilities.length === 0 ? (
          <div className="text-center py-8">
            <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Vulnerabilities Found</h3>
            <p className="text-gray-600">Great! Your smart contracts appear to be secure.</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {result.vulnerabilities.map((vuln, index) => (
              <div key={index} className={`border rounded-lg p-4 ${getSeverityColor(vuln.severity)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(vuln.severity)}`}>
                        {vuln.severity}
                      </span>
                      <span className="font-medium text-gray-900">{vuln.rule_id}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{vuln.message}</p>
                    <p className="text-xs text-gray-500">{vuln.file}:{vuln.line}</p>
                    
                    {expandedVulns.has(index) && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        {vuln.code_snippet && (
                          <div className="mb-3">
                            <span className="text-xs font-medium text-gray-600">Code Snippet:</span>
                            <pre className="mt-1 p-2 bg-gray-100 rounded text-xs overflow-x-auto">
                              <code>{vuln.code_snippet}</code>
                            </pre>
                          </div>
                        )}
                        {vuln.fix_suggestion && (
                          <div>
                            <span className="text-xs font-medium text-gray-600">Recommendation:</span>
                            <p className="mt-1 text-xs text-gray-700">{vuln.fix_suggestion}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => toggleVulnExpansion(index)}
                    className="ml-2 text-gray-400 hover:text-gray-600"
                  >
                    {expandedVulns.has(index) ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scan Info */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Files scanned: {result.summary.files_scanned}</span>
          <span>Scan duration: {result.summary.scan_duration}s</span>
        </div>
      </div>
    </div>
  )
}