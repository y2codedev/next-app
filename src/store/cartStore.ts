
import { create } from "zustand";
import { product } from "@/components";
import { CartDrawerProps } from "@/types/type";

export const useCartStore = create<CartDrawerProps>((set) => ({
  cartOpen: false,
  note: "",

  cartItems: product?.map((p) => ({
    product: p,
    quantity: p.quantity,
  })) || [],

  setCartOpen: (open) => set({ cartOpen: open }),
  toggleCart: () => set((state) => ({ cartOpen: !state.cartOpen })),
  setNote: (note) => set({ note }),
  setCartItems: (items) => set({ cartItems: items }),

  handleIncrement: (index: number) =>
    set((state) => ({
      cartItems: state?.cartItems?.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  handleDecrement: (index: number) =>
    set((state) => ({
      cartItems: state.cartItems?.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ),
    })),
}));
