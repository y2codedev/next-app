import { BannerSlide, ProductType } from '@/types/home'
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


export const colorOptions: Options[] = [
    {
        id: 1,
        src: 'https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Chrome.svg',
        alt: 'Chrome',
    },
    {
        id: 2,
        src: 'https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg',
        alt: 'Nickel',
    },
    {
        id: 3,
        src: 'https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Champagne.svg',
        alt: 'Champagne',
    },
    {
        id: 4,
        src: 'https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Black.svg',
        alt: 'Black',
    },
]

export const paymentMethod: Options[] = [
    {
        id: 1,
        src: "https://cdn.keepconverting.ai/Blu/Icons/Paymentsaccepted/visa.png",
        alt: 'Visa',
    },
    {
        id: 2,
        src: "https://cdn.keepconverting.ai/Blu/Icons/Paymentsaccepted/mc-logo-52.svg",
        alt: 'Mastercard',
    },
    {
        id: 3,
        src: "https://cdn.keepconverting.ai/Blu/Icons/Paymentsaccepted/tabby.png",
        alt: "Tabby"
    },
]

export const slides: BannerSlide[] = [
    {
        id: 1,
        title: "Welcome to Swissblu",
        description: "Experience the power of clean water with our filters.",
        fixtures: {
            handheld: {
                defaultImage: "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
                colors: {
                    chrome: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR1.png",
                    black: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR2.png",
                    roseGold: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR3.png"
                }
            },
            wallmount: {
                defaultImage: "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
                colors: {
                    chrome: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR1.png",
                    black: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR2.png",
                    roseGold: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR3.png"
                }
            },
            rain: {
                defaultImage: "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                colors: {
                    chrome: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR1.png",
                    black: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR2.png",
                    roseGold: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR3.png"
                }
            }
        }
    },

    {
        id: 2,
        title: "Welcome to Swissblu",
        description: "Experience the power of clean water with our filters.",
        fixtures: {
            handheld: {
                defaultImage: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR1.png",
                colors: {
                    chrome: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR1.png",
                    black: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR2.png",
                    roseGold: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR3.png"
                }
            },
            wallmount: {
                defaultImage: "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
                colors: {
                    chrome: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR1.png",
                    black: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR2.png",
                    roseGold: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR3.png"
                }
            },
            rain: {
                defaultImage: "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                colors: {
                    chrome: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR1.png",
                    black: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR2.png",
                    roseGold: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR3.png"
                }
            }
        }
    },

];

export const MockJsonData: ProductType[] = [
    {
        id: 1,
        thumbnail: "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
        title: "Swissblu - Handheld",
        description: "Experience the power of clean water with our handheld filters.",
        photos: [
            "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
            "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
            "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp"
        ],
        item_variants: [
            {
                id: 1,
                thumbnail: "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
                color: ["https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Chrome.svg"],
                photos: [
                    "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp"
                ],
            },
            {
                id: 2,
                color: ["https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg"],
                photos: [
                    "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp"
                ],
            },
            {
                id: 3,
                thumbnail: "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
                color: ["https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Champagne.svg", "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg"],
                photos: [
                    "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp"
                ],
            }
        ]
    },
    {
        id: 2,
        thumbnail: "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
        title: "Swissblu - Wallmount",
        description: "Experience the power of clean water with our wall-mounted filters.",
        photos: [
            "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
            "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
            "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp"
        ],
        item_variants: [
            {
                id: 1,
                thumbnail: "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
                color: ["https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Champagne.svg", "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg"],

                photos: [
                    "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp"
                ],
            },
            {
                id: 2,
                thumbnail: "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
                color: ["https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg"],

                photos: [
                    "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp"
                ],
            },
            {
                id: 3,
                thumbnail: "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
                color: ["https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Champagne.svg", "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg"],
                photos: [
                    "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp"
                ],
            }
        ]
    },
    {
        id: 3,
        thumbnail: "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
        title: "Swissblu - Rain",
        description: "Experience the power of clean water with our rain shower filters.",
        photos: [
            "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
            "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
            "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp"
        ],
        item_variants: [
            {
                id: 1,
                thumbnail: "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                color: ["https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Black.svg", "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg"],
                photos: [
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp"
                ],
            },
            {
                id: 2,
                thumbnail: "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                color: ["https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Black.svg", "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Black.svg"],

                photos: [
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp"
                ],
            },
            {
                id: 3,
                thumbnail: "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                color: ["https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Champagne.svg", "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg"],
                photos: [
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
                    "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp"
                ],
            }
        ]
    },

];
