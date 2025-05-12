import { NavItem, SocialLink } from '@/types/type'
import {
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiYoutube,
    FiLinkedin,
} from 'react-icons/fi'

export const navLinks: NavItem[] = [
    { label: 'Ionic shower filter', href: '/', isActive: true },
    { label: 'NMC Filter Cartridge', href: '/' },
    { label: 'Shower Filter Accessories & Spare Parts', href: '/' },
    { label: 'About', href: '/' },
    { label: 'Blog', href: '/' },
    { label: 'Support', nested: true },
    { label: 'Go to swissblu.com', href: '/' },
]

export const supportLinks: NavItem[] = [
    { label: 'FAQs', href: '/support/faq' },
    { label: 'Use & Care', href: '/support/use-care' },
    { label: 'Product Manuals', href: '/support/product-manual' },
    { label: 'warranty', href: '/support/warranty' },
    { label: 'Trade-In Program', href: '/support/trade-in' },
    { label: 'Contact', href: '/support/contact' },
]

export const socialLinks: SocialLink[] = [
    {
        label: 'Facebook',
        href: 'https://facebook.com',
        icon: <FiFacebook size={20} />,
    },
    {
        label: 'Instagram',
        href: 'https://instagram.com',
        icon: <FiInstagram size={20} />,
    },
    {
        label: 'Twitter',
        href: 'https://twitter.com',
        icon: <FiTwitter size={20} />,
    },
    {
        label: 'YouTube',
        href: 'https://youtube.com',
        icon: <FiYoutube size={20} />,
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: <FiLinkedin size={20} />,
    },
]
