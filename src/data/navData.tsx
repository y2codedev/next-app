"use client";

import { BannerSlide, ProductData, ProductType } from "@/types/home";
import { NavItem, SocialLink, Options, searchDataProps } from "@/types/type";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";

export const navLinks: NavItem[] = [
  { label: "Ionic shower filter", href: "/", isActive: true },
  { label: "Products", href: "/products" },
  { label: "About", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Support", nested: true },
  { label: "NMC Filter Cartridge", href: "/" },
  { label: "Shower Filter Accessories & Spare Parts", href: "/" },
  { label: "Go to swissblu.com", href: "/" },
];

export const supportLinks: NavItem[] = [
  { label: "FAQs", href: "/support/faq" },
  { label: "Use & Care", href: "/support/use-care" },
  { label: "Product Manuals", href: "/support/product-manual" },
  { label: "warranty", href: "/support/warranty" },
  { label: "Trade-In Program", href: "/support/trade-in" },
  { label: "Contact", href: "/support/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <FiFacebook size={20} />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <FiInstagram size={20} />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: <FiTwitter size={20} />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: <FiYoutube size={20} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <FiLinkedin size={20} />,
  },
];

export const colorOptions: Options[] = [
  {
    id: 1,
    src: "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Chrome.svg",
    alt: "Chrome",
  },
  {
    id: 2,
    src: "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg",
    alt: "Nickel",
  },
  {
    id: 3,
    src: "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Champagne.svg",
    alt: "Champagne",
  },
  {
    id: 4,
    src: "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Black.svg",
    alt: "Black",
  },
];

export const paymentMethod: Options[] = [
  {
    id: 1,
    src: "https://cdn.keepconverting.ai/Blu/Icons/Paymentsaccepted/visa.png",
    alt: "Visa",
  },
  {
    id: 2,
    src: "https://cdn.keepconverting.ai/Blu/Icons/Paymentsaccepted/mc-logo-52.svg",
    alt: "Mastercard",
  },
  {
    id: 3,
    src: "https://cdn.keepconverting.ai/Blu/Icons/Paymentsaccepted/tabby.png",
    alt: "Tabby",
  },
];

export const slides: BannerSlide[] = [
  {
    id: 1,
    title: "Welcome to Swissblu",
    description: "Experience the power of clean water with our filters.",
    fixtures: {
      handheld: {
        defaultImage:
          "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
        colors: {
          chrome: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR1.png",
          black: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR2.png",
          roseGold: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR3.png",
        },
      },
      wallmount: {
        defaultImage:
          "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
        colors: {
          chrome: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR1.png",
          black: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR2.png",
          roseGold: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR3.png",
        },
      },
      rain: {
        defaultImage:
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
        colors: {
          chrome: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR1.png",
          black: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR2.png",
          roseGold: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR3.png",
        },
      },
    },
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
          roseGold: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR3.png",
        },
      },
      wallmount: {
        defaultImage:
          "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
        colors: {
          chrome: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR1.png",
          black: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR2.png",
          roseGold: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR3.png",
        },
      },
      rain: {
        defaultImage:
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
        colors: {
          chrome: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR1.png",
          black: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR2.png",
          roseGold: "https://cdn.keepconverting.ai/Blu/Images/TKP/MR3.png",
        },
      },
    },
  },
];

export const MockJsonData: ProductType[] = [
  {
    id: 1,
    thumbnail:
      "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
    title: "Swissblu - Handheld",
    description:
      "Experience the power of clean water with our handheld filters.",
    photos: [
      "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
      "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
      "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
    ],
    item_variants: [
      {
        id: 1,
        thumbnail:
          "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
        color: [
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Chrome.svg",
        ],
        photos: [
          "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
        ],
        title: "Handheld - Chrome Finish",
        description: "Elegant chrome finish handheld filter.",
        price: 79.99,
      },
      {
        id: 2,
        color: [
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg",
        ],
        photos: [
          "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
        ],
        title: "Handheld - Nickel",
        description: "Stylish nickel variant of our handheld filter.",
        price: 89.99,
      },
      {
        id: 3,
        thumbnail:
          "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
        color: [
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Champagne.svg",
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg",
        ],
        photos: [
          "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
        ],
        title: "Handheld - Champagne",
        description: "Luxurious champagne finish.",
        price: 99.99,
      },
    ],
  },
  {
    id: 2,
    thumbnail:
      "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
    title: "Swissblu - Wallmount",
    description:
      "Experience the power of clean water with our wall-mounted filters.",
    photos: [
      "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
      "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
      "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
    ],
    item_variants: [
      {
        id: 1,
        thumbnail:
          "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
        color: [
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Champagne.svg",
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg",
        ],

        photos: [
          "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
        ],
        title: "Wallmount - Champagne",
        description: "Stylish champagne wallmount filter.",
        price: 109.99,
      },
      {
        id: 2,
        thumbnail:
          "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
        color: [
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg",
        ],

        photos: [
          "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
        ],
        title: "Rain - Black Nickel",
        description: "Matte black and nickel combination.",
        price: 119.99,
      },
      {
        id: 3,
        thumbnail:
          "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
        color: [
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Champagne.svg",
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg",
        ],
        photos: [
          "https://cdn.keepconverting.ai/Blu/Images/Handheld/Original%20Chrome%20ionic-shower-filter-office-393.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Wallmount/wallmount%20orginial%20chrome%20ionic-shower-filter-camera-accessory-lens-274.webp",
        ],
        title: " Red Nickel",
        description: "Matte black and nickel .",
        price: 299.0,
      },
    ],
  },
  {
    id: 3,
    thumbnail:
      "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
    title: "Swissblu - Rain",
    description:
      "Experience the power of clean water with our rain shower filters.",
    photos: [
      "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
      "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
      "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
    ],
    item_variants: [
      {
        id: 1,
        thumbnail:
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
        color: [
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Black.svg",
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg",
        ],
        photos: [
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
        ],
        title: "Black Nickel",
        description: "Matte black and nickel .",
        price: 1919.99,
      },
      {
        id: 2,
        thumbnail:
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
        color: [
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Black.svg",
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Black.svg",
        ],

        photos: [
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
        ],
        title: " Black Nickel",
        description: "Matte black and nickel .",
        price: 1019.99,
      },
      {
        id: 3,
        thumbnail:
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
        color: [
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Champagne.svg",
          "https://cdn.keepconverting.ai/Blu/Icons/Other/Colors/Nickel.svg",
        ],
        photos: [
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
          "https://cdn.keepconverting.ai/Blu/Images/Rain/rain%20original%20chrome%20ionic-shower-filter-lighting-tire-audio-242.webp",
        ],
        title: " Gray Nickel ",
        description: "Matte black and nickel .",
        price: 299.99,
      },
    ],
  },
];

export const product = [
  {
    title:
      "Swissblu - Handheld This is a test product  Swissblu - Handheld This is a test product description",
    image:
      "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/thumbnail.webp",
    price: 69.99,
    color: "Black",
    fixture: "Handheld",
    quantity: 1,
  },
  {
    title: "Blue - Handheld",
    image:
      "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/thumbnail.webp",
    price: 99.99,
    color: "Blue",
    fixture: "Handheld",
    quantity: 1,
  },
  {
    title: "Swissblu - Handheld",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
    price: 69.99,
    color: "Black",
    fixture: "Handheld",
    quantity: 1,
  },
  {
    title: "Blue - Handheld",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
    price: 99.99,
    color: "Blue",
    fixture: "Handheld",
    quantity: 1,
  },
];

export const searchData: searchDataProps[] = [
  {
    id: 1,
    title: "Aquaguard Marvel NXT",
    slug: "aquaguard-marvel-nxt",
    description: "Advanced purifier with UV technology.",
    price: 12999,
    image:
      "https://cdn.pixabay.com/photo/2021/08/03/06/47/clock-6518632_1280.jpg",
    color: ["#ffffff"],
    quantity: 20,
  },
  {
    id: 2,
    title: "Urban Company Native M2",
    slug: "urban-company-native-m2",
    description: "Compact purifier with modern design.",
    price: 8999,
    image:
      "https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_1280.jpg",
    color: ["#000000"],
    quantity: 15,
  },
  {
    id: 3,
    title: "Livpure Glo Star",
    slug: "livpure-glo-star",
    description: "RO + UV filtration for pure water.",
    price: 9999,
    image:
      "https://cdn.pixabay.com/photo/2021/08/03/06/43/bottles-6518626_640.jpg",
    color: ["#1E90FF"],
    quantity: 25,
  },
  {
    id: 4,
    title: "HUL Pureit Revito",
    slug: "hul-pureit-revito",
    description: "Powerful RO system with advanced filter.",
    price: 11499,
    image:
      "https://cdn.pixabay.com/photo/2017/07/20/09/25/businessman-2521703_640.jpg",
    color: ["#808080"],
    quantity: 10,
  },
  {
    id: 5,
    title: "AQUA D PURE Bio Alkaline",
    slug: "aqua-d-pure-bio-alkaline",
    description: "Alkaline water purifier for healthy living.",
    price: 13999,
    image:
      "https://cdn.pixabay.com/photo/2021/09/18/20/50/truffles-6636081_640.jpg",
    color: ["#964B00"],
    quantity: 8,
  },
  {
    id: 6,
    title: "Aquaguard Glory",
    slug: "aquaguard-glory",
    description: "Premium purifier with copper technology.",
    price: 15999,
    image:
      "https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_640.jpg",
    color: ["#b87333"],
    quantity: 5,
  },
  {
    id: 7,
    title: "KENT Elegant Copper",
    slug: "kent-elegant-copper",
    description: "Elegant purifier with copper infusion.",
    price: 14499,
    image:
      "https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330847_640.jpg",
    color: ["#b87333"],
    quantity: 12,
  },
  {
    id: 8,
    title: "Livpure Glo Star",
    slug: "livpure-glo-star-2",
    description: "Compact and efficient water purification.",
    price: 9999,
    image:
      "https://cdn.pixabay.com/photo/2023/03/20/15/37/postcards-7865294_640.jpg",
    color: ["#ffffff", "#1E90FF"],
    quantity: 18,
  },
  {
    id: 9,
    title: "Aquaguard Sure Delight NXT",
    slug: "aquaguard-sure-delight-nxt",
    description: "Smart purifier with LED indicators.",
    price: 10999,
    image:
      "https://cdn.pixabay.com/photo/2017/01/03/20/06/balls-1950487_640.jpg",
    color: ["#000000", "#808080"],
    quantity: 9,
  },
  {
    id: 10,
    title: "KENT Supreme",
    slug: "kent-supreme",
    description: "RO + UV + UF purifier with TDS control.",
    price: 14999,
    image:
      "https://cdn.pixabay.com/photo/2020/04/16/18/22/woman-5051835_640.jpg",
    color: ["#ffffff", "#b87333"],
    quantity: 7,
  },
];

export const productData: ProductData = {
  variants: [
    {
      colors: {
        all_colors: ["#D3A196", "#FFD700", "#4682B4", "#90EE90"],
        color_id: "306",
        variant_id: "43062",
      },
      items: {
        "#D3A196": {
          id: 1,
          price: 10,
          title: "Luxury Timepieces - Blush Watch Edition",
          description:
            "A refined collection of elegant watches with a soft pink aesthetic, ideal for classy occasions.",
          images: [
            "https://cdn.pixabay.com/photo/2016/04/13/16/21/watch-1327169_1280.jpg",
            "https://cdn.pixabay.com/photo/2016/04/30/02/53/rolex-watches-1362341_640.jpg",
            "https://cdn.pixabay.com/photo/2018/02/24/20/39/clock-3179167_1280.jpg",
            "https://cdn.pixabay.com/photo/2018/02/16/02/03/pocket-watch-3156771_640.jpg",
          ],
          thumbnail:
            "https://cdn.pixabay.com/photo/2016/04/30/02/53/rolex-watches-1362341_640.jpg",
          discountPercentage: 15,
          stock: 50,
          rating: 4.5,
          warrantyInformation: "1-year manufacturer warranty",
          shippingInformation: "Free shipping on orders over $50",
          returnPolicy: "30-day money-back guarantee",
          minimumOrderQuantity: 20,
        },
        "#FFD700": {
          id: 2,
          price: 21,
          title: "Gold Glamour - Luxe Makeup Collection",
          description:
            "Golden-themed cosmetics for a radiant and luxurious look, perfect for special events and bold styles.",
          images: [
            "https://cdn.pixabay.com/photo/2022/03/17/04/57/cosmetic-products-7073743_1280.jpg",
            "https://cdn.pixabay.com/photo/2022/04/11/18/17/makeup-7126383_1280.png",
            "https://cdn.pixabay.com/photo/2020/05/17/06/31/collection-5180255_640.jpg",
            "https://cdn.pixabay.com/photo/2020/01/02/17/37/eyeshadow-4736412_640.jpg",
          ],
          thumbnail:
            "https://cdn.pixabay.com/photo/2022/04/11/18/17/makeup-7126383_1280.png",
          discountPercentage: 10,
          stock: 5,
          rating: 3.5,
          warrantyInformation: "2-year manufacturer warranty",
          shippingInformation: "Free shipping on orders over $50",
          returnPolicy: "30-day money-back guarantee",
          minimumOrderQuantity: 4,
        },
        "#4682B4": {
          id: 3,
          price: 11,
          title: "Coastal Comforts - Ocean Blue Interiors",
          description:
            "A serene selection of stylish hotel and living room spaces inspired by ocean blue tranquility.",
          images: [
            "https://cdn.pixabay.com/photo/2016/04/15/11/43/hotel-1330834_1280.jpg",
            "https://cdn.pixabay.com/photo/2016/04/15/11/46/hotel-1330845_640.jpg",
            "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_640.jpg",
            "https://cdn.pixabay.com/photo/2020/02/01/06/12/living-room-4809587_640.jpg",
          ],
          thumbnail:
            "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_640.jpg",
          discountPercentage: 10,
          stock: 5,
          rating: 3.5,
          warrantyInformation: "2-year manufacturer warranty",
          shippingInformation: "Free shipping on orders over $50",
          returnPolicy: "30-day money-back guarantee",
          minimumOrderQuantity: 3,
        },
        "#90EE90": {
          id: 4,
          price: 299,
          title: "Fresh Steps - Mint Green Running Shoes",
          description:
            "Energetic and stylish mint green sneakers designed for comfort, speed, and everyday athletic wear.",
          images: [
            "https://cdn.pixabay.com/photo/2014/06/18/18/42/running-shoe-371625_1280.jpg",
            "https://cdn.pixabay.com/photo/2014/06/18/18/41/running-shoe-371624_1280.jpg",
            "https://cdn.pixabay.com/photo/2014/04/10/18/39/running-shoe-321199_640.jpg",
            "https://cdn.pixabay.com/photo/2017/07/13/02/53/shoe-2498994_640.jpg",
          ],
          thumbnail:
            "https://cdn.pixabay.com/photo/2014/04/10/18/39/running-shoe-321199_640.jpg",
          discountPercentage: 10,
          stock: 15,
          rating: 3.5,
          warrantyInformation: "2-year manufacturer warranty",
          shippingInformation: "Free shipping on orders over $50",
          returnPolicy: "30-day money-back guarantee",
          minimumOrderQuantity: 10,
        },
      },
    },
  ],
};
