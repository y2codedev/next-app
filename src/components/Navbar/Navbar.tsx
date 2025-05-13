'use client'

import { useState } from 'react'
import NavbarHeader from './NavbarHeader'
import DrawerMenu from './DrawerMenu'
import { navLinks, socialLinks, supportLinks } from '@/data/navData'

export default function NavbarMain() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isSupportOpen, setIsSupportOpen] = useState(false)

    return (
        <>
            <NavbarHeader onMenuClick={() => setIsDrawerOpen(true)} />
            <DrawerMenu
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                navLinks={navLinks}
                socialLinks={socialLinks}
                supportLinks={supportLinks}
                isSupportOpen={isSupportOpen}
                toggleSupport={() => setIsSupportOpen(!isSupportOpen)}
            />
        </>
    )
}
