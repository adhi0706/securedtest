'use client'

import { Dashboard } from '@/components/Dashboard'

export interface ScanResult {
  id?: string
  timestamp?: string
  summary: {
    files_scanned: number
    total_vulnerabilities: number
    critical: number
    high: number
    medium: number
    low: number
    scan_duration: number
    tools_used: string[]
  }
  vulnerabilities: Array<{
    file: string
    line: number
    column?: number
    severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO'
    tool: string
    rule_id: string
    message: string
    description?: string
    cwe_id?: string
    confidence?: string
    code_snippet?: string
    fix_suggestion?: string
  }>
  errors: string[]
}

export default function Home() {
  // Directly render the dashboard instead of landing page
  return <Dashboard initialView="overview" />
}