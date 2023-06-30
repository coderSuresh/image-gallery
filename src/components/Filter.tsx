"use client"

import React from 'react'

const Filter = () => {

  const [isDropDownVisible, setIsDropDownVisible] = React.useState(false)
  const [filter, setFilter] = React.useState('All')

  const handleDropDown = () => {
    setIsDropDownVisible((oldDropDownState) => !oldDropDownState)
  }

  const handleFilter = (e: React.MouseEvent<HTMLLIElement>) => {
    setFilter(e.currentTarget.textContent!)
  }

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      window.location.href = `/search/${e.currentTarget.value}`
    }
  }

  return (
    <div className="search_filter_container px-5">
      <div className="search_filter w-full max-w-5xl flex gap-5 flex-wrap justify-between mx-auto mt-10">
        <div className="search w-fit">
          <input onKeyUp={handleEnterPress} type="text" placeholder="Search" className="search w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent" required />
        </div>
        <div className="filter flex relative">
          <button onClick={handleDropDown} className='px-4 py-2 border min-w-[125px] border-gray-300 hover:bg-gray-100'>{filter}</button>
          <ul onClick={() => handleFilter} className={`absolute ${isDropDownVisible ? 'block' : 'hidden'} top-10 left-0`}>
            <li className="px-4 py-2 border border-gray-300 min-w-[125px] bg-white cursor-pointer hover:bg-gray-100">All</li>
            <li className="px-4 py-2 border border-gray-300 min-w-[125px] bg-white cursor-pointer hover:bg-gray-100">Landscape</li>
            <li className="px-4 py-2 border border-gray-300 min-w-[125px] bg-white cursor-pointer hover:bg-gray-100">Portrait</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Filter