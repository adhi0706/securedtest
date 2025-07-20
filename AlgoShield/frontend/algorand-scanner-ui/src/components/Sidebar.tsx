'use client'

import { 
  BarChart3, 
  History, 
  CreditCard, 
  User,
  LogOut,
  Menu,
  Shield
} from 'lucide-react'
import Image from 'next/image'

interface SidebarProps {
  currentView: string
  onViewChange: (view: 'overview' | 'history' | 'billing' | 'profile') => void
  showSideBar: boolean
  setSideBar: (show: boolean) => void
}

const sidebarItems = [
  {
    id: 'overview',
    name: 'Overview',
    icon: BarChart3,
    to: 'overview'
  },
  {
    id: 'history',
    name: 'History',
    icon: History,
    to: 'history'
  },
  {
    id: 'billing',
    name: 'Billing',
    icon: CreditCard,
    to: 'billing'
  },
  {
    id: 'profile',
    name: 'Profile',
    icon: User,
    to: 'profile'
  },
]

export function Sidebar({ currentView, onViewChange, showSideBar, setSideBar }: SidebarProps) {
  if (!showSideBar) return null;

  return (
    <div className="sss-sidebar-container">
      <div className="sss-sidebar">
        <div className="sss-sidebar-upper">
          <div className="sss-sidebar-header">
            <div className="sss-sidebar-header-logo flex items-center">
              <Image 
                src="/securedapp-logo-light.svg" 
                alt="SecureDApp Logo" 
                width={120}
                height={32}
                className="h-8 w-auto"
                onError={() => {
                  // Fallback handled by Next.js Image component
                  console.log('Logo failed to load, using fallback');
                }}
              />
            </div>
            <Menu
              onClick={() => setSideBar(false)}
              className="cursor-pointer w-6 h-6 text-gray-600"
            />
          </div>
          <div className="w-full pt-5 border-t border-gray-200" />
          <div className="sss-body">
            <div className="sss-body-header">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">MAIN MENUS</div>
            </div>
            <div className="sss-body-navigation">
              {sidebarItems.map((item, index) => {
                const Icon = item.icon
                const isSelected = currentView === item.id
                
                return (
                  <div
                    key={item.id}
                    onClick={() => onViewChange(item.id as any)}
                    className={`sss-sidebar-item-container ${
                      isSelected ? 'selected-sss-sidebar-item' : ''
                    }`}
                  >
                    <div className="sss-sidebar-item">
                      <div className="sss-sidebar-item-logo">
                        <Icon
                          className="w-5 h-5"
                          color={isSelected ? "#12D576" : "#B2ABAB"}
                        />
                      </div>
                      <div className="sss-sidebar-item-text">{item.name}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div style={{ width: "calc(100% - 30px)", margin: "15px" }}>
              <button
                className="w-full border border-gray-300 text-black bg-[#12D576] py-2 rounded-xl hover:bg-green-400 transition-colors"
              >
                Request Manual Audit
              </button>
            </div>
          </div>
        </div>
        <div className="sss-sidebar-lower">
          <div className="sss-sidebar-credits-card">
            <div className="text-sm font-medium">Remaining Credits</div>
            <div className="sss-sidebar-credits-container">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-[#12D576] h-2.5 rounded-full" style={{width: '75%'}}></div>
              </div>
              <div className="sss-sidebar-credits-text">15/20</div>
            </div>
            <button
              className="w-full border border-gray-300 text-black bg-[#12D576] py-2 rounded-xl hover:bg-green-400 transition-colors mt-2"
            >
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}