import { IoClose } from 'react-icons/io5'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import Link from 'next/link'
import { DrawerMenuProps } from '@/types/type'

export default function DrawerMenu({
    isOpen,
    onClose,
    navLinks,
    supportLinks,
    socialLinks,
    isSupportOpen,
    toggleSupport,
}: DrawerMenuProps) {
    return (
        <div  className={`
            fixed top-0 left-0 h-full z-50 bg-white border-r border-gray-200
            transition-transform duration-300 ease-in-out
            w-full sm:w-[24%]
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="flex justify-end p-4 sticky top-0  bg-white z-50">
                <button onClick={onClose} aria-label="Close menu" >
                    <IoClose size={28} className="text-gray-700 cursor-pointer" />
                </button>
            </div>

            <div className="overflow-y-auto h-[calc(100vh-64px)] p-4 flex flex-col justify-between">
                <nav className="flex flex-col gap-3">
                    {navLinks.map((item, index) => {
                        if (item.nested) {
                            return (
                                <div key={index}>
                                    <button
                                        onClick={toggleSupport}
                                        className="w-full border-b items-center  border-gray-200 py-3 text-lg font-bold text-left text-[#666] flex items-left gap-2"
                                    >
                                        {item.label}
                                        {isSupportOpen ? <FiChevronUp /> : <FiChevronDown />}
                                    </button>
                                    {isSupportOpen && (
                                        <div className="mt-2 flex flex-col gap-2 pl-4">
                                            {supportLinks.map((link, i) => (
                                                <Link key={i} href={link.href ?? '#'} onClick={onClose} className="text-lg text-left text-gray-500 hover:text-black">
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        }

                        return (
                            <Link key={index} href={item.href ?? '#'}>
                                <span
                                    onClick={onClose}
                                    className={`block border-b border-gray-200 py-3 text-lg font-bold text-left ${item.isActive ? 'text-black' : 'text-[#666]'}`}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        )
                    })}
                </nav>

                <div className="mt-8 flex flex-wrap">
                    {socialLinks.map(({ label, href, icon }) => (
                        <Link
                            className="px-[37px] py-8 border text-blue-500 border-gray-200"
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                        >
                            {icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
