"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Filter = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      navigateToSearch()
    }
  }

  const navigateToSearch = () => {
    router.push(`/search/${searchQuery}`)
  }

  return (
    <div className="search_filter_container px-5">
      <div className="search_filter w-full max-w-5xl flex gap-5 flex-wrap justify-between mx-auto mt-10">
        <div className="search w-fit">
          <input
            type="text"
            placeholder="Search"
            className="search w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            required
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={handleEnterPress}
          />
        </div>

        <div className="filter w-fit">
          <select
            className="filter w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            onChange={(e) => {
              router.push(`/per_page/${e.target.value}`)
            }}
          >
            <option value="20">20 Photos</option>
            <option value="40">40 Photos</option>
            <option value="60">60 Photos</option>
            <option value="80">80 Photos</option>
            <option value="100">100 Photos</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filter
