'use client'

import { FiMenu, FiSearch, FiShoppingBag, FiUser, FiX } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'
import OptimizedImage from '../OptimizedImage'
import SearchBar from '../SearchBar'

interface NavbarHeaderProps {
    onMenuClick: () => void
    onCartClick: () => void
}

export default function NavbarHeader({ onMenuClick, onCartClick }: NavbarHeaderProps) {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <header className="fixed top-0 w-full z-50">
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-4">
                        <button onClick={onMenuClick} className="text-2xl cursor-pointer text-secondary" aria-label="Toggle menu">
                            <FiMenu />
                        </button>
                        <button className="text-xl">EN</button>
                    </div>

                    <Link href="/" className="flex items-center justify-center">
                        <OptimizedImage
                            src="https://shopv.swissblu.com/img/blu-logo.png"
                            alt="blu"
                        />
                    </Link>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-2xl text-secondary cursor-pointer"
                            aria-label="Search"
                        >
                            <FiSearch />
                        </button>
                        <button className="text-2xl text-secondary hidden sm:block" aria-label="Account">
                            <FiUser />
                        </button>
                        <button onClick={onCartClick} className="text-2xl text-secondary cursor-pointer" aria-label="Cart">
                            <FiShoppingBag />
                        </button>
                    </div>
                </div>
            </div>
            <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </header>
    )
}
