import React from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

interface SearchProps {
    onClose: () => void
    isOpen: boolean
}

const SearchBar = ({ isOpen, onClose }: SearchProps) => {
    return (
        <div
        className={`
          fixed inset-0 z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative top-16 mx-auto w-full max-w-4xl px-4">
          <div className="rounded-4xl bg-white border-b border-gray-300 shadow-sm">
            <div className="flex items-center justify-between py-2 px-3 sm:py-3 sm:px-4">
              <div className="flex items-center gap-1 sm:gap-2 flex-1">
                <FiSearch size={20} color="#888" className="pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full flex-grow outline-none px-2 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base text-gray-800"
                />
              </div>
              <button
                onClick={onClose}
                className="text-xl sm:text-2xl text-secondary px-2 sm:px-4 cursor-pointer"
                aria-label="Close search"
              >
                <FiX color="#888" className="pointer-events-none" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SearchBar