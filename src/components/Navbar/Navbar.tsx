"use client";

import { useState } from "react";
import {
  NavbarHeader,
  DrawerMenu,
  CartDrawer,
  navLinks,
  socialLinks,
  supportLinks,
} from "@/components";

import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSupportOpen, setIsSupportOpen] = useState<boolean>(false);
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    handleIncrement,
    handleDecrement,
    note,
    setNote,
  } = useCartStore();

  return (
    <div>
      <NavbarHeader
        onMenuClick={() => setIsDrawerOpen(true)}
        onCartClick={() => setCartOpen(true)}
      />
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
      />
    </div>
  );
}
