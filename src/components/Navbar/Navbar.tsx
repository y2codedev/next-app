'use client'

import { useState } from 'react'
import { NavbarHeader, DrawerMenu, CartDrawer, navLinks, product, socialLinks, supportLinks } from '@/components'

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isSupportOpen, setIsSupportOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false);
    const [note, setNote] = useState('');

    const [cartItems, setCartItems] = useState(
        product?.map((p) => ({
            product: p,
            quantity: p.quantity,
        }))
    );

    const handleIncrement = (index: number) => {
        setCartItems((items) =>
            items.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (index: number) => {
        setCartItems((items) =>
            items.map((item, i) =>
                i === index
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item
            )
        );
    };

    return (
        <div >
            <NavbarHeader onMenuClick={() => setIsDrawerOpen(true)} onCartClick={() => setCartOpen(true)} />
            <DrawerMenu
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                navLinks={navLinks}
                socialLinks={socialLinks}
                supportLinks={supportLinks}
                isSupportOpen={isSupportOpen}
                toggleSupport={() => setIsSupportOpen(!isSupportOpen)}
            />

            <CartDrawer
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
                cartItems={cartItems}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                note={note}
                setNote={setNote}
                onCheckout={() => alert('Proceed to checkout')}
            />
        </div>
    )
}
