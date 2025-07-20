'use client'

import { useState, useEffect } from 'react'
import { FileUpload } from './FileUpload'
import { ScanResults } from './ScanResults'
import { ScanHistory } from './ScanHistory'
import { Overview } from './Overview'
import { Settings } from './Settings'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Toaster } from 'react-hot-toast'
import { ScanResult } from '@/app/page'
import '../styles/sidebar.css'

interface DashboardProps {
  initialView?: 'overview' | 'history' | 'billing' | 'profile' | 'scan'
}

export function Dashboard({ initialView = 'overview' }: DashboardProps) {
  const [currentView, setCurrentView] = useState(initialView)
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [scanHistory, setScanHistory] = useState<ScanResult[]>([])
  const [showSideBar, setShowSideBar] = useState(true)

  // Load scan history from sessionStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedHistory = sessionStorage.getItem('scan-history')
      if (storedHistory) {
        try {
          const parsedHistory = JSON.parse(storedHistory)
          setScanHistory(parsedHistory)
        } catch (error) {
          console.error('Failed to parse stored scan history:', error)
        }
      }
    }
  }, [])

  const handleScanComplete = (result: ScanResult) => {
    setScanResult(result)
    setIsScanning(false)
    // Add to history with additional metadata
    const scanWithMetadata = {
      ...result,
      id: `RPT-${Date.now()}`,
      timestamp: new Date().toISOString(),
    }
    setScanHistory(prev => [scanWithMetadata, ...prev])
    
    // Store in sessionStorage for persistence
    if (typeof window !== 'undefined') {
      const existingHistory = JSON.parse(sessionStorage.getItem('scan-history') || '[]')
      const updatedHistory = [scanWithMetadata, ...existingHistory]
      sessionStorage.setItem('scan-history', JSON.stringify(updatedHistory))
      sessionStorage.setItem(`scan-report-${scanWithMetadata.id}`, JSON.stringify(scanWithMetadata))
    }
    
    // Navigate to history after scan completion
    setCurrentView('history')
  }

  const handleScanStart = () => {
    setIsScanning(true)
    setScanResult(null)
  }

  const handleNavigateToScan = () => {
    setCurrentView('scan')
    setIsScanning(false)
    setScanResult(null)
  }

  const handleScanError = () => {
    setIsScanning(false)
  }

  const renderContent = () => {
    switch (currentView) {
      case 'overview':
        return (
          <div className="animate-slideInUp">
            <Overview 
              scanHistory={scanHistory}
              onScanStart={handleNavigateToScan}
              onScanComplete={handleScanComplete}
              onScanError={handleScanError}
              isScanning={isScanning}
              scanResult={scanResult}
            />
          </div>
        )
      case 'scan':
        return (
          <div className="space-y-6 animate-slideInUp">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="animate-slideInLeft">
                  <FileUpload
                    onScanStart={handleScanStart}
                    onScanComplete={handleScanComplete}
                    onScanError={handleScanError}
                    isScanning={isScanning}
                  />
                </div>
              </div>

              {/* Results Section */}
              <div className="animate-slideInRight">
                <ScanResults 
                  result={scanResult} 
                  isScanning={isScanning}
                />
              </div>
            </div>
          </div>
        )
      case 'history':
        return (
          <div className="animate-slideInUp">
            <ScanHistory history={scanHistory} />
          </div>
        )
      case 'billing':
        return (
          <div className="animate-slideInUp">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Billing</h2>
              <p className="text-gray-600">Billing management coming soon...</p>
            </div>
          </div>
        )
      case 'profile':
        return (
          <div className="animate-slideInUp">
            <Settings />
          </div>
        )
      default:
        return (
          <div className="animate-slideInUp">
            <Overview 
              scanHistory={scanHistory}
              onScanStart={handleNavigateToScan}
              onScanComplete={handleScanComplete}
              onScanError={handleScanError}
              isScanning={isScanning}
              scanResult={scanResult}
            />
          </div>
        )
    }
  }

  return (
    <div className="sss-product">
      <Toaster position="top-right" />
      
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView}
        showSideBar={showSideBar}
        setSideBar={setShowSideBar}
      />
      
      <div className="sss-product-with-header">
        <Header showSideBar={showSideBar} setSideBar={setShowSideBar} onScanStart={handleNavigateToScan} />
        
        <main className="p-8 animate-fadeIn">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}