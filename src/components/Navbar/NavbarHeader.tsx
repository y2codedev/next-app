'use client'

import { FiMenu, FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'
import { SearchBar, OptimizedImage } from '@/components'
import { useRouter } from 'next/navigation'

interface NavbarHeaderProps {
    onMenuClick: () => void
    onCartClick: () => void
}

export default function NavbarHeader({ onMenuClick, onCartClick }: NavbarHeaderProps) {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const router = useRouter()

    return (
        <header className="fixed top-0 w-full z-50   bg-white">
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
                        <button onClick={() => router.push('/login')} className="text-2xl text-secondary hidden cursor-pointer sm:block" aria-label="Account">
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
