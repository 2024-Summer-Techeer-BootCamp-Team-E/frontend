import React from 'react'
import Glass from '../../assets/images/Glass.png'

interface SearchBarProps {
  searchQuery: string
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function SearchBar({ searchQuery, handleSearchChange }: SearchBarProps) {
  return (
    <div className="relative">
      <input className="h-8 pl-8 text-sm bg-white border rounded-lg outline-none w-44 text-black/40" placeholder="검색" value={searchQuery} onChange={handleSearchChange} />
      <img src={Glass} alt="돋보기" className="absolute w-5 h-5 left-2 top-1.5" />
    </div>
  )
}
