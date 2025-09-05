import React from 'react'
import Image from 'next/image'
import { Bell, ChevronDown } from 'lucide-react'

export default function Topbar() {
  return (
    <div className="w-full h-[70px] px-8 bg-gray-50 border-b border-gray-200 flex justify-end items-center">
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="w-9 h-9 p-1.5 bg-white rounded-full shadow-xs hover:shadow-md transition-shadow">
          <Bell className="w-6 h-6 text-gray-600" />
        </button>
        
        {/* User Profile */}
        <div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-xs hover:shadow-md transition-shadow">
          <Image 
            className="w-8 h-8 rounded-full" 
            src="/images/avatar.png" 
            alt="Courtney Henry"
            width={32}
            height={32}
          />
          <span className="text-sm font-medium text-gray-900">Courtney Henry</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </div>
  )
}
