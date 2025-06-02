import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Cart, CartId } from '../types/cartStoreType';
import showToast from '@/lib/toast';

interface CartState {
    cart: Cart | null;
    loading: boolean;
    error: string | null;
    addCart: (userId: number, quantity: number) => Promise<void>;
    updateCart: (cartId: number, products: CartId, merge?: boolean) => Promise<void>;
    deleteCart: (cartId: number) => Promise<void>;
    clearCart: () => void;
    incrementProduct: (productId: number) => Promise<void>;
    decrementProduct: (productId: number) => Promise<void>;
}

export const useCartStoreApi = create<CartState>()(
    persist(
        (set, get) => ({
            cart: null,
            loading: false,
            error: null,

            addCart: async (userId: number, quantity: number) => {
                set({ loading: true, error: null });
                try {
                    const res = await fetch('https://dummyjson.com/carts/add', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            userId,
                            products: [{ id: userId, quantity }],
                        }),
                        cache: 'no-store',
                    });

                    const data: Cart = await res.json();

                    if (res.ok) {
                        showToast?.success('Added to cart successfully 🎉');
                        set({ cart: data, loading: false });
                    } else {
                        showToast?.error('Failed to add to cart');
                        set({ error: 'Failed to add to cart', loading: false });
                    }
                } catch (err) {
                    set({ error: (err as Error).message, loading: false });
                }
            },

            updateCart: async (cartId, products, merge = true) => {
                set({ loading: true, error: null });
                try {
                    const response = await fetch(`https://dummyjson.com/carts/${cartId}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ merge, products }),
                    });
                    const data: Cart = await response.json();
                    set({ cart: data, loading: false });
                } catch (err) {
                    set({ error: (err as Error).message, loading: false });
                }
            },

            deleteCart: async (cartId) => {
                set({ loading: true, error: null });
                try {
                    const response = await fetch(`https://dummyjson.com/carts/${cartId}`, {
                        method: 'DELETE',
                    });
                    const data: Cart = await response.json();
                    showToast?.success('Cart deleted');
                    set({ cart: null, loading: false });
                } catch (err) {
                    set({ error: (err as Error).message, loading: false });
                }
            },

            clearCart: () => {
                set({ cart: null });
                showToast?.info('Cart cleared');
            },

            incrementProduct: async (productId: number) => {
                const { cart, updateCart } = get();
                if (!cart) return;

                const existingProduct = cart.products.find((p: any) => p.id === productId);
                if (!existingProduct) return;

                const updatedQuantity = existingProduct.quantity + 1;

                await updateCart(cart.id, [{ id: productId, quantity: updatedQuantity }], true);
            },

            decrementProduct: async (productId: number) => {
                const { cart, updateCart } = get();
                if (!cart) return;

                const existingProduct = cart.products.find((p) => p.id === productId);
                if (!existingProduct) return;

                if (existingProduct.quantity <= 1) {
                    showToast?.warning('Minimum quantity is 1');
                    return;
                }

                const updatedQuantity = existingProduct.quantity - 1;

                await updateCart(cart.id, [{ id: productId, quantity: updatedQuantity }], true);
            },
        }),
        {
            name: 'cart-storage',
        }
    )
);
