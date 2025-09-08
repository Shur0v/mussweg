"use client"

import { useState } from "react"
import { X, Plus, ChevronDown, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"

interface BoostItem {
  id: number
  productName: string
  sellerName: string
  quantity: number
  price: number
  boostType: "Standard" | "Premium"
  boostPrice: number
  duration: string
  image: string
  status: "pending" | "active"
}

export default function BoostManagement() {
  const [activeTab, setActiveTab] = useState<"request" | "total">("request")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 7

  const [boostData, setBoostData] = useState<BoostItem[]>([
    {
      id: 1,
      productName: "Man Exclusive T-shirt",
      sellerName: "Jenny Wilson",
      quantity: 1,
      price: 20.0,
      boostType: "Standard",
      boostPrice: 20.0,
      duration: "3 Days",
      image: "/images/p1.png",
      status: "pending",
    },
    {
      id: 2,
      productName: "Baby Dress",
      sellerName: "Savannah Nguyen",
      quantity: 2,
      price: 40.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "2 Days",
      image: "/images/p2.png",
      status: "pending",
    },
    {
      id: 3,
      productName: "Home Accessories",
      sellerName: "Darlene Robertson",
      quantity: 1,
      price: 20.0,
      boostType: "Standard",
      boostPrice: 20.0,
      duration: "3 Days",
      image: "/images/p3.png",
      status: "pending",
    },
    {
      id: 5,
      productName: "Double Seat Sofa",
      sellerName: "Eleanor Pena",
      quantity: 1,
      price: 20.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "3 Days",
      image: "/images/p4.png",
      status: "pending",
    },
    {
      id: 6,
      productName: "Double Seat Sofa",
      sellerName: "Eleanor Pena",
      quantity: 1,
      price: 20.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "3 Days",
      image: "/images/p5.png",
      status: "pending",
    },
    {
      id: 7,
      productName: "Double Seat Sofa",
      sellerName: "Eleanor Pena",
      quantity: 1,
      price: 20.0,
      boostType: "Standard",
      boostPrice: 20.0,
      duration: "3 Days",
      image: "/images/p7.png",
      status: "pending",
    },
    {
      id: 8,
      productName: "Wireless Headphones",
      sellerName: "Robert Johnson",
      quantity: 1,
      price: 85.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "5 Days",
      image: "/images/p8.png",
      status: "active",
    },
    {
      id: 9,
      productName: "Smart Watch",
      sellerName: "Maria Garcia",
      quantity: 1,
      price: 199.0,
      boostType: "Standard",
      boostPrice: 20.0,
      duration: "7 Days",
      image: "/images/p1.png",
      status: "active",
    },
    {
      id: 10,
      productName: "Gaming Keyboard",
      sellerName: "David Lee",
      quantity: 2,
      price: 120.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "4 Days",
      image: "/images/p2.png",
      status: "active",
    },
    {
      id: 11,
      productName: "Office Chair",
      sellerName: "Sarah Wilson",
      quantity: 1,
      price: 250.0,
      boostType: "Standard",
      boostPrice: 20.0,
      duration: "6 Days",
      image: "/images/p3.png",
      status: "active",
    },
    {
      id: 12,
      productName: "Laptop Stand",
      sellerName: "Michael Brown",
      quantity: 3,
      price: 45.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "3 Days",
      image: "/images/p4.png",
      status: "active",
    },
    {
      id: 13,
      productName: "Bluetooth Speaker",
      sellerName: "Olivia Taylor",
      quantity: 1,
      price: 60.0,
      boostType: "Standard",
      boostPrice: 20.0,
      duration: "2 Days",
      image: "/images/p5.png",
      status: "pending",
    },
    {
      id: 14,
      productName: "Noise Cancelling Earbuds",
      sellerName: "Liam Martinez",
      quantity: 2,
      price: 110.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "4 Days",
      image: "/images/p6.png",
      status: "pending",
    },
    {
      id: 15,
      productName: "Travel Backpack",
      sellerName: "Emma Johnson",
      quantity: 1,
      price: 75.0,
      boostType: "Standard",
      boostPrice: 20.0,
      duration: "5 Days",
      image: "/images/p7.png",
      status: "pending",
    },
    {
      id: 16,
      productName: "Stainless Steel Bottle",
      sellerName: "Noah Davis",
      quantity: 4,
      price: 25.0,
      boostType: "Standard",
      boostPrice: 20.0,
      duration: "3 Days",
      image: "/images/p8.png",
      status: "pending",
    },
    {
      id: 17,
      productName: "Wireless Mouse",
      sellerName: "Ava Wilson",
      quantity: 3,
      price: 35.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "6 Days",
      image: "/images/p1.png",
      status: "pending",
    },
    {
      id: 18,
      productName: "LED Desk Lamp",
      sellerName: "William Anderson",
      quantity: 1,
      price: 45.0,
      boostType: "Standard",
      boostPrice: 20.0,
      duration: "2 Days",
      image: "/images/p2.png",
      status: "pending",
    },
    {
      id: 19,
      productName: "Portable SSD",
      sellerName: "Sophia Thomas",
      quantity: 2,
      price: 130.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "7 Days",
      image: "/images/p3.png",
      status: "pending",
    },
    {
      id: 20,
      productName: "Smart Home Hub",
      sellerName: "James Rodriguez",
      quantity: 1,
      price: 150.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "5 Days",
      image: "/images/p4.png",
      status: "active",
    },
    {
      id: 21,
      productName: "4K Action Camera",
      sellerName: "Mia Garcia",
      quantity: 1,
      price: 210.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "4 Days",
      image: "/images/p5.png",
      status: "active",
    },
    {
      id: 22,
      productName: "Ergonomic Keyboard",
      sellerName: "Benjamin Lee",
      quantity: 2,
      price: 95.0,
      boostType: "Standard",
      boostPrice: 20.0,
      duration: "3 Days",
      image: "/images/p6.png",
      status: "active",
    },
    {
      id: 23,
      productName: "Fitness Tracker",
      sellerName: "Charlotte Perez",
      quantity: 1,
      price: 80.0,
      boostType: "Standard",
      boostPrice: 20.0,
      duration: "6 Days",
      image: "/images/p7.png",
      status: "active",
    },
    {
      id: 24,
      productName: "USB-C Hub",
      sellerName: "Lucas Martinez",
      quantity: 3,
      price: 55.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "2 Days",
      image: "/images/p8.png",
      status: "active",
    },
    {
      id: 25,
      productName: "Mechanical Keyboard",
      sellerName: "Amelia Clark",
      quantity: 2,
      price: 140.0,
      boostType: "Premium",
      boostPrice: 40.0,
      duration: "5 Days",
      image: "/images/p1.png",
      status: "active",
    },
    {
      id: 26,
      productName: "Wireless Charger",
      sellerName: "Henry Walker",
      quantity: 2,
      price: 35.0,
      boostType: "Standard",
      boostPrice: 20.0,
      duration: "4 Days",
      image: "/images/p2.png",
      status: "active",
    },
  ])

  const pendingBoosts = boostData.filter((item) => item.status === "pending")
  const activeBoosts = boostData.filter((item) => item.status === "active")

  const activeList = activeTab === "request" ? pendingBoosts : activeBoosts
  const totalPages = Math.max(1, Math.ceil(activeList.length / pageSize))
  const safeCurrentPage = Math.min(currentPage, totalPages)
  const startIndex = (safeCurrentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedList = activeList.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    const bounded = Math.min(Math.max(1, page), totalPages)
    setCurrentPage(bounded)
  }

  const getPageButtons = () => {
    const pages: (number | "ellipsis")[] = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
      return pages
    }
    pages.push(1)
    const left = Math.max(2, safeCurrentPage - 1)
    const right = Math.min(totalPages - 1, safeCurrentPage + 1)
    if (left > 2) pages.push("ellipsis")
    for (let i = left; i <= right; i++) pages.push(i)
    if (right < totalPages - 1) pages.push("ellipsis")
    pages.push(totalPages)
    return pages
  }

  const handleAccept = (id: number) => {
    setBoostData((prev) => prev.map((item) => (item.id === id ? { ...item, status: "active" as const } : item)))
  }

  const handleReject = (id: number) => {
    setBoostData((prev) => prev.filter((item) => item.id !== id))
  }

  const CreateBoostModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="px-6 py-6 bg-white rounded-3xl flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="text-neutral-600 text-lg font-semibold font-['Roboto']">Create Boost</div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="w-8 h-8 p-1.5 bg-zinc-300/40 rounded-2xl flex justify-center items-center"
          >
            <X className="w-5 h-5 text-neutral-600" />
          </button>
        </div>

        <div className="w-[662px] px-5 py-6 rounded-xl border border-gray-200 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-neutral-600 text-sm font-medium font-['Roboto']">Boost Type</label>
              <input
                type="text"
                placeholder="Set boost Name"
                className="h-12 p-3 bg-neutral-100 rounded-lg border border-gray-200/75 text-sm font-['Roboto'] placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-neutral-600 text-sm font-medium font-['Roboto']">Boost Durations</label>
              <input
                type="text"
                placeholder="Set boost Duration"
                className="h-12 p-3 bg-neutral-100 rounded-lg border border-gray-200/75 text-sm font-['Roboto'] placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-neutral-600 text-sm font-medium font-['Roboto']">Boost price</label>
              <input
                type="text"
                placeholder="Set boost price"
                className="h-12 p-3 bg-neutral-100 rounded-lg border border-gray-200/75 text-sm font-['Roboto'] placeholder:text-zinc-500"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-40 px-4 py-3 bg-slate-950/5 rounded-[10px] text-neutral-600 text-sm font-medium font-['Roboto']"
            >
              Cancel
            </button>
            <button className="px-4 py-3 bg-red-600 rounded-[10px] text-white text-sm font-medium font-['Roboto']">
              Save & Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen ">
      <div className="w-full">
        <div className="p-4 bg-white rounded-xl shadow-[0px_4px_33px_8px_rgba(0,0,0,0.04)] border border-gray-200 flex flex-col gap-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="text-neutral-600 text-lg font-semibold font-['Roboto']">Recent Boost</div>
            <div className="flex justify-end items-center gap-3">
              <div className="w-28 h-10 p-3 bg-white rounded-lg border border-gray-200 flex justify-center items-center gap-2">
                <div className="text-gray-600 text-sm font-medium font-['Roboto']">Monthly</div>
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setActiveTab("request")
                  setCurrentPage(1)
                }}
                className={`h-9 px-2 py-1 rounded flex justify-center items-center gap-1 ${
                  activeTab === "request" ? "bg-red-600 text-white" : "border border-zinc-500 text-neutral-600"
                }`}
              >
                <div className="text-sm font-normal font-['Roboto']">Boost Request</div>
              </button>
              <button
                onClick={() => {
                  setActiveTab("total")
                  setCurrentPage(1)
                }}
                className={`h-9 px-2 py-1 rounded flex justify-center items-center gap-1 ${
                  activeTab === "total" ? "bg-red-600 text-white" : "border border-zinc-500 text-neutral-600"
                }`}
              >
                <div className="text-sm font-normal font-['Roboto']">Total Boost product</div>
              </button>
            </div>

            {activeTab === "request" && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="h-9 px-2 py-1 rounded border border-red-600 flex justify-center items-center gap-1"
              >
                <Plus className="w-5 h-5 text-red-600" />
                <div className="text-red-600 text-sm font-normal font-['Roboto']">Create Boost</div>
              </button>
            )}
          </div>

          {/* Table */}
          <div className="rounded border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="h-14 px-3.5 py-5 text-left text-gray-600 text-sm font-medium font-['Inter'] border-b border-gray-200">
                    No
                  </th>
                  <th className="h-14 px-3.5 py-5 text-left text-gray-600 text-sm font-medium font-['Inter'] border-b border-gray-200">
                    Product Name
                  </th>
                  <th className="h-14 px-3.5 py-5 text-left text-gray-600 text-sm font-medium font-['Inter'] border-b border-gray-200">
                    Seller Name
                  </th>
                  <th className="h-14 px-3.5 py-5 text-left text-gray-600 text-sm font-medium font-['Inter'] border-b border-gray-200">
                    Qnty
                  </th>
                  <th className="h-14 px-3.5 py-5 text-left text-gray-600 text-sm font-medium font-['Inter'] border-b border-gray-200">
                    Price
                  </th>
                  <th className="h-14 px-3.5 py-5 text-left text-gray-600 text-sm font-medium font-['Inter'] border-b border-gray-200">
                    Boost Type
                  </th>
                  <th className="h-14 px-3.5 py-5 text-left text-gray-600 text-sm font-medium font-['Inter'] border-b border-gray-200">
                    Boost price
                  </th>
                  <th className="h-14 px-3.5 py-5 text-left text-gray-600 text-sm font-medium font-['Inter'] border-b border-gray-200">
                    Duration
                  </th>
                  <th className="h-14 px-3.5 py-5 text-left text-gray-600 text-sm font-medium font-['Inter'] border-b border-gray-200">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedList.map((item, index) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="h-16 px-3.5 py-5 text-gray-800 text-sm font-normal font-['Inter']">
                      {String(startIndex + index + 1).padStart(2, "0")}
                    </td>
                    <td className="h-16 px-3.5 py-5">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded"
                          src={item.image || "/placeholder.svg"}
                          alt={item.productName}
                        />
                        <div className="text-gray-800 text-sm font-normal font-['Roboto']">{item.productName}</div>
                      </div>
                    </td>
                    <td className="h-16 px-3.5 py-5 text-gray-800 text-sm font-normal font-['Roboto']">
                      {item.sellerName}
                    </td>
                    <td className="h-16 px-3.5 py-5 text-gray-800 text-sm font-normal font-['Roboto']">
                      {String(item.quantity).padStart(2, "0")}
                    </td>
                    <td className="h-16 px-3.5 py-5 text-gray-800 text-sm font-normal font-['Roboto']">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="h-16 px-3.5 py-5 text-gray-800 text-sm font-normal font-['Roboto']">
                      {item.boostType}
                    </td>
                    <td className="h-16 px-3.5 py-5 text-gray-800 text-sm font-normal font-['Roboto']">
                      ${item.boostPrice.toFixed(2)}
                    </td>
                    <td className="h-16 px-3.5 py-5 text-gray-800 text-sm font-normal font-['Roboto']">
                      {item.duration}
                    </td>
                    <td className="h-16 px-3.5 py-5">
                      {activeTab === "request" ? (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleReject(item.id)}
                            className="w-14 px-2 py-1 rounded border border-red-600 flex justify-center items-center"
                          >
                            <div className="text-red-600 text-xs font-normal font-['Roboto']">Reject</div>
                          </button>
                          <button
                            onClick={() => handleAccept(item.id)}
                            className="px-2 py-1 bg-red-600 rounded flex justify-center items-center"
                          >
                            <div className="text-white text-xs font-normal font-['Roboto']">Accept</div>
                          </button>
                        </div>
                      ) : (
                        <button className="w-5 h-5 flex justify-center items-center">
                          <MoreHorizontal className="w-5 h-5 text-gray-600" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex gap-3">
            <button
              onClick={() => goToPage(safeCurrentPage - 1)}
              disabled={safeCurrentPage === 1}
              className={`w-8 h-8 p-3 rounded-lg border flex justify-center items-center ${
                safeCurrentPage === 1 ? "border-gray-200 opacity-50 cursor-not-allowed" : "border-gray-200"
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-gray-500" />
            </button>

            {getPageButtons().map((p, i) =>
              p === "ellipsis" ? (
                <button key={`e-${i}`} className="w-8 h-8 p-3 rounded-lg border border-gray-200 flex justify-center items-center" disabled>
                  <div className="text-gray-500 text-lg font-semibold">...</div>
                </button>
              ) : (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`w-8 h-8 p-3 rounded-lg flex justify-center items-center ${
                    p === safeCurrentPage
                      ? "bg-gray-50 border border-red-600"
                      : "border border-gray-200"
                  }`}
                >
                  <div
                    className={`text-sm font-normal font-['Roboto'] ${
                      p === safeCurrentPage ? "text-red-600" : "text-gray-500"
                    }`}
                  >
                    {p}
                  </div>
                </button>
              )
            )}

            <button
              onClick={() => goToPage(safeCurrentPage + 1)}
              disabled={safeCurrentPage === totalPages}
              className={`w-8 h-8 p-3 rounded-lg border flex justify-center items-center ${
                safeCurrentPage === totalPages ? "border-gray-200 opacity-50 cursor-not-allowed" : "border-gray-200"
              }`}
            >
              <ChevronRight className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && <CreateBoostModal />}
    </div>
  )
}
