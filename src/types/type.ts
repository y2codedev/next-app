
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
    id: number
    src: string
    alt: string
}

interface Product {
    title: string;
    image: string;
    price: number;
    color: string;
    fixture: string;
}

interface CartItem {
    product: Product;
    quantity: number;
}

export interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onIncrement: (index: number) => void;
    onDecrement: (index: number) => void;
    note: string;
    setNote: (note: string) => void;
    onCheckout: () => void;
}

export interface searchDataProps {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    color: string[];
    slug: string;
    quantity: number;
}
