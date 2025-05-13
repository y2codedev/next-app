
import { ReactNode } from 'react'

export interface NavItem {
    label: string
    href?: string
    isActive?: boolean
    nested?: boolean
}

export interface SocialLink {
    label: string
    href: string
    icon: ReactNode
}

export interface DrawerMenuProps {
    isOpen: boolean
    onClose: () => void
    navLinks: NavItem[]
    supportLinks: NavItem[]
    socialLinks: SocialLink[]
    isSupportOpen: boolean
    toggleSupport: () => void
}

export interface Options {
    src: string
    alt: string
}
