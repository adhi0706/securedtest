'use client'

import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { FileUpload } from './FileUpload'
import { ScanResults } from './ScanResults'
import { ScanResult } from '@/app/page'
import 'react-circular-progressbar/dist/styles.css'

interface OverviewProps {
  scanHistory: ScanResult[]
  onScanStart: () => void
  onScanComplete: (result: ScanResult) => void
  onScanError: () => void
  isScanning: boolean
  scanResult: ScanResult | null
}

export function Overview({ 
  scanHistory, 
  onScanStart, 
  onScanComplete, 
  onScanError, 
  isScanning, 
  scanResult 
}: OverviewProps) {
  const [auditScore, setAuditScore] = useState(9.3)
  const [criticalIssues, setCriticalIssues] = useState(0)
  const [mediumIssues, setMediumIssues] = useState(2)
  const [lowIssues, setLowIssues] = useState(0)
  const [optimizationIssues, setOptimizationIssues] = useState(0)
  const [informationalIssues, setInformationalIssues] = useState(21)

  useEffect(() => {
    if (scanResult) {
      setCriticalIssues(scanResult.summary.critical)
      setMediumIssues(scanResult.summary.medium)
      setLowIssues(scanResult.summary.low)
      setInformationalIssues(scanResult.vulnerabilities.length)
      
      // Calculate audit score based on issues
      const totalIssues = scanResult.summary.total_vulnerabilities
      const score = Math.max(1, 10 - (totalIssues * 0.1))
      setAuditScore(Math.round(score * 10) / 10)
    }
  }, [scanResult])

  // Mock data for the issues chart
  const issuesData = [
    { name: 'High Issues', value: criticalIssues },
    { name: 'Medium Issues', value: mediumIssues },
    { name: 'Low Issues', value: lowIssues },
    { name: 'Optimization Issues', value: optimizationIssues },
    { name: 'Informational Issues', value: informationalIssues },
  ]

  return (
    <div className="space-y-6">
      {/* Scan Summary Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-slideInUp">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Audit Score Gauge */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 mb-4">
              <CircularProgressbar
                value={(auditScore / 10) * 100}
                text={`${auditScore}`}
                styles={buildStyles({
                  textSize: '24px',
                  pathColor: auditScore >= 8 ? '#10b981' : auditScore >= 6 ? '#f59e0b' : '#ef4444',
                  textColor: '#1f2937',
                  trailColor: '#f3f4f6',
                  pathTransitionDuration: 1.5,
                })}
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">Audit Score</h3>
              <p className="text-sm text-gray-600">{auditScore} / 10</p>
            </div>
          </div>

          {/* Issue Count Boxes */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-red-200 rounded-lg p-4 text-center bg-red-50">
              <div className="text-2xl font-bold text-red-600">{criticalIssues}</div>
              <div className="text-sm text-red-700">Critical Issues</div>
            </div>
            <div className="border-2 border-orange-200 rounded-lg p-4 text-center bg-orange-50">
              <div className="text-2xl font-bold text-orange-600">{mediumIssues}</div>
              <div className="text-sm text-orange-700">Medium Issues</div>
            </div>
            <div className="border-2 border-yellow-200 rounded-lg p-4 text-center bg-yellow-50">
              <div className="text-2xl font-bold text-yellow-600">{lowIssues}</div>
              <div className="text-sm text-yellow-700">Low Issues</div>
            </div>
            <div className="border-2 border-purple-200 rounded-lg p-4 text-center bg-purple-50">
              <div className="text-2xl font-bold text-purple-600">{optimizationIssues}</div>
              <div className="text-sm text-purple-700">Optimization Issues</div>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4 text-center bg-gray-50 col-span-2">
              <div className="text-2xl font-bold text-gray-600">{informationalIssues}</div>
              <div className="text-sm text-gray-700">Informational Issues</div>
            </div>
          </div>

          {/* Summary Text */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <p className="text-gray-700">
                Scanned <span className="font-semibold">5 contracts</span>, 
                <span className="font-semibold"> 257 lines of code</span> and found 
                <span className="font-semibold"> {criticalIssues + mediumIssues + lowIssues + optimizationIssues + informationalIssues} vulnerabilities</span>
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 hover-scale font-medium w-full">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Issues Graph Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-slideInUp animation-delay-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Issues</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={issuesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <YAxis 
                domain={[0, 24]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#10b981" 
                fill="url(#colorGradient)"
                strokeWidth={2}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  )
}