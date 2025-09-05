'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  BarChart3, 
  Settings, 
  LogOut 
} from 'lucide-react'
import Logo from '@/public/icons/logo'

interface MenuItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const menuItems: MenuItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    name: 'Manage Users',
    href: '/dashboard/users',
    icon: Users
  },
  {
    name: 'Manage Products',
    href: '/dashboard/products',
    icon: Package
  },
  {
    name: 'Reports & Analytics',
    href: '/dashboard/reports',
    icon: BarChart3
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings
  }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-72 h-screen bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className=" border-gray-200">
        <div className="flex items-center justify-center gap-2 py-4 h-[78px]">
          <Logo color="#DE3525" />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 px-4 ">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const IconComponent = item.icon
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-red-50 text-red-600 border-l-4 border-red-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <IconComponent className={`w-5 h-5 ${isActive ? 'text-red-600' : 'text-gray-600'}`} />
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Logout Section */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-all duration-200">
          <LogOut className="w-5 h-5 text-gray-600" />
          <span className="font-medium">Log out</span>
        </button>
      </div>
    </div>
  )
}
