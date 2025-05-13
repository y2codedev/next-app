import { FiMenu, FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi'
import Link from 'next/link'
import OptimizedImage from '../OptimizedImage'

interface NavbarHeaderProps {
    onMenuClick: () => void
}

export default function NavbarHeader({ onMenuClick }: NavbarHeaderProps) {
    return (
        <header className="fixed top-0 w-full z-50 ">
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-4">
                        <button onClick={onMenuClick} className="text-2xl text-black" aria-label="Toggle menu">
                            <FiMenu />
                        </button>
                        <button className="text-xl font-arabic">ع</button>
                    </div>

                    <Link href="/" className="flex items-center justify-center">
                        <OptimizedImage
                            src="https://shopv.swissblu.com/img/blu-logo.png"
                            alt="blu"
                        />
                    </Link>

                    <div className="flex items-center gap-4">
                        <button className="text-2xl text-black" aria-label="Search">
                            <FiSearch />
                        </button>
                        <button className="text-2xl text-black hidden sm:block" aria-label="Account">
                            <FiUser />
                        </button>
                        <button className="text-2xl text-black" aria-label="Cart">
                            <FiShoppingBag />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}