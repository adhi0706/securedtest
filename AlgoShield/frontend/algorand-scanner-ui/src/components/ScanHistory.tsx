'use client'

import { useState } from 'react'
import { Download, Eye, FileText, MoreVertical, ExternalLink } from 'lucide-react'
import { ScanResult } from '@/app/page'
import { generateAlgorandPDF, AlgorandReportData } from '@/lib/pdfGenerator'

interface ScanHistoryProps {
  history: ScanResult[]
}

export function ScanHistory({ history }: ScanHistoryProps) {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const handleDownloadReport = async (scan: ScanResult) => {
    try {
      const reportData: AlgorandReportData = {
        id: scan.id || `ALGO-${Date.now()}`,
        contracts: scan.summary.files_scanned,
        lines: 500,
        assembly_lines: 50,
        ercs: ['ARC-3', 'ARC-19'],
        date: scan.timestamp || new Date().toISOString(),
        findings: {
          critical_issues: scan.summary.critical,
          high_issues: scan.summary.high,
          medium_issues: scan.summary.medium,
          low_issues: scan.summary.low,
          informational_issues: 0,
          optimization_issues: 0
        },
        vulnerabilities: scan.vulnerabilities.map(vuln => ({
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

  const handleViewReport = (scan: ScanResult) => {
    // Store scan data in sessionStorage for report viewing
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(`scan-report-${scan.id}`, JSON.stringify(scan))
      window.open(`/report/${scan.id}`, '_blank')
    }
  }

  const formatDateTime = (timestamp?: string) => {
    if (!timestamp) return 'N/A'
    const date = new Date(timestamp)
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (history.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Scan History</h3>
          <p className="text-gray-600">Your scan history will appear here once you start scanning files.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Scan History</h2>
        <div className="text-sm text-gray-600">
          {history.length} scan{history.length !== 1 ? 's' : ''} total
        </div>
      </div>

      {/* Table View */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vulnerabilities
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Link
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {history.map((scan, index) => (
                <tr key={scan.id || index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {scan.id || `RPT-${index + 1}`}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatDateTime(scan.timestamp)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      {scan.summary.critical > 0 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          {scan.summary.critical} Critical
                        </span>
                      )}
                      {scan.summary.high > 0 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          {scan.summary.high} High
                        </span>
                      )}
                      {scan.summary.medium > 0 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          {scan.summary.medium} Medium
                        </span>
                      )}
                      {scan.summary.low > 0 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {scan.summary.low} Low
                        </span>
                      )}
                      {scan.summary.total_vulnerabilities === 0 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          No Issues
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleViewReport(scan)}
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-900"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Report
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="relative">
                      <button
                        onClick={() => setDropdownOpen(dropdownOpen === scan.id ? null : scan.id || `${index}`)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>
                      
                      {dropdownOpen === (scan.id || `${index}`) && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                          <div className="py-1">
                            <button
                              onClick={() => {
                                handleViewReport(scan)
                                setDropdownOpen(null)
                              }}
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Report
                            </button>
                            <button
                              onClick={() => {
                                handleDownloadReport(scan)
                                setDropdownOpen(null)
                              }}
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Download PDF
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}