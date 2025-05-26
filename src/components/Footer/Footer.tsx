"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Shop", href: "/shop" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { name: "FAQ", href: "/faq" },
      { name: "Returns", href: "/returns" },
      { name: "Shipping", href: "/shipping" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <div className="bg-gray-100  w-full">
      <footer className="container text-secondary pt-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-2">ShopEase</h2>
            <p className="text-sm text-gray-600">
              Your go-to online shop for everything you love. Quality products,
              best prices, and fast delivery.
            </p>
          </div>

          {footerSections?.map((section, index) => (
            <div key={index}>
              <h3 className="text-md font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="hover:text-blue-600 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-md font-semibold mb-3">Stay Updated</h3>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white text-sm font-medium py-2 rounded hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4 mt-5 text-gray-600">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:text-blue-600 text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-10 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
