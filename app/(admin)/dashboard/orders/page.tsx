import React from 'react'
import { RecentOrdersTable } from '../components/dashboard/recent-orders-table'

export default function OrdersPage() {
  return (
    <div className="p-8">
      <RecentOrdersTable showViewAllButton={false} />
    </div>
  )
}

