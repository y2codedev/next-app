import { create } from "zustand";
import { product } from "@/components"; 
import { CartItem } from "@/types/cartStore";

interface CartState {
  cartOpen: boolean;
  note: string;
  cartItems: CartItem[];

  setCartOpen: (open: boolean) => void;
  toggleCart: () => void;
  setNote: (note: string) => void;
  setCartItems: (items: CartItem[]) => void;
  handleIncrement: (index: number) => void;
  handleDecrement: (index: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartOpen: false,
  note: "",

  cartItems:
    product?.map((p) => ({
      product: {
        ...p,
        images: [p.image], 
      },
      quantity: p.quantity,
    })) || [],

  setCartOpen: (open) => set({ cartOpen: open }),
  toggleCart: () => set((state) => ({ cartOpen: !state.cartOpen })),
  setNote: (note) => set({ note }),
  setCartItems: (items) => set({ cartItems: items }),

  handleIncrement: (index) =>
    set((state) => ({
      cartItems: state.cartItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  handleDecrement: (index) =>
    set((state) => ({
      cartItems: state.cartItems.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ),
    })),
}));
