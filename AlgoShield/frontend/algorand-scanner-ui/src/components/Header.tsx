import { Shield, Github, ExternalLink } from 'lucide-react'

interface HeaderProps {
  showSideBar?: boolean
  setSideBar?: (show: boolean) => void
  onScanStart?: () => void
}

export function Header({ showSideBar, setSideBar, onScanStart }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <h1 className="text-lg font-medium text-gray-800">
              Algorand Shield to protect the heart of your Web3 project
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={onScanStart}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 hover-scale font-medium"
            >
              Scan Now
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}