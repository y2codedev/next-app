import { NavItem, SocialLink, Options } from '@/types/type'
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


export const fixtureOptions: Options[] = [
    {
        src: 'https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp',
        alt: 'Handheld Chrome',
    },
    {
        src: 'https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp',
        alt: 'Wallmount Chrome',
    },
    {
        src: 'https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp',
        alt: 'Rain Chrome',
    },
]

export const colorOptions: Options[] = [
    {
        src: 'https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Chrome.svg',
        alt: 'Chrome',
    },
    {
        src: 'https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg',
        alt: 'Nickel',
    },
    {
        src: 'https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Champagne.svg',
        alt: 'Champagne',
    },
    {
        src: 'https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Black.svg',
        alt: 'Black',
    },
]

export const paymentMethod: Options[] = [
    {
        src: "https://cdn.keepconverting.ai/Blu/Icons/Paymentsaccepted/visa.png",
        alt: 'Visa',
    },
    {
        src: "https://cdn.keepconverting.ai/Blu/Icons/Paymentsaccepted/mc-logo-52.svg",
        alt: 'Mastercard',
    },
    {
        src: "https://cdn.keepconverting.ai/Blu/Icons/Paymentsaccepted/tabby.png",
        alt: "Tabby"
    },
]
