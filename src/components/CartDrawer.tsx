'use client';

import React from 'react';
import { FiX, FiPlus, FiMinus } from 'react-icons/fi';
import { CartDrawerProps } from '@/types/type';
import Button from './Button';
import OptimizedImage from './OptimizedImage';

const CartDrawer: React.FC<CartDrawerProps> = ({
    isOpen,
    onClose,
    cartItems,
    onIncrement,
    onDecrement,
    note,
    setNote,
    onCheckout,
}) => {
    const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
        <div
            className={`fixed top-0 right-0 h-full w-full sm:w-[24%] bg-white z-50 shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
                <h2 className="text-lg font-semibold text-secondary">Your Cart</h2>
                <button onClick={onClose} aria-label="Close cart">
                    <FiX className="text-xl cursor-pointer" />
                </button>
            </div>

            <div className="flex flex-col justify-between h-[calc(100%-64px)]">
                <div className="flex-1 overflow-y-auto p-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex gap-4 mb-4 items-start">
                            <OptimizedImage
                                src={item.product.image}
                                alt={item.product.title}
                                width={80}
                                height={80}
                            />
                            <div className="flex-1">
                                <h4 className="text-lg capitalize text-secondary line-clamp-2">{item.product.title}</h4>
                                <p className="text-sm text-secondary font-semibold mt-1">
                                    Color: <span className="text-secondary font-normal">{item.product.color}</span>
                                </p>
                                <p className="text-sm text-secondary font-semibold">
                                    Fixture: <span className="text-secondary font-normal">{item.product.fixture}</span>
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                    <div className="flex items-center border border-gray-300 px-2 py-1 gap-2 rounded">
                                        <button onClick={() => onDecrement(index)} disabled={item.quantity <= 1}>
                                            <FiMinus />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => onIncrement(index)}>
                                            <FiPlus />
                                        </button>
                                    </div>
                                    <p className="text-base text-secondary">${item.product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="mt-4">
                        <label htmlFor="note" className="block text-sm font-medium text-secondary mb-2">
                            Order Note
                        </label>
                        <textarea
                            id="note"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className="w-full border rounded-md p-2 text-sm"
                            rows={4}
                            placeholder="Add any special instructions..."
                        />
                    </div>
                </div>

                <div className="p-4 border-t border-gray-300 bg-white">
                    <div className="flex justify-between text-lg text-secondary mb-2">
                        <span className="uppercase">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-secondary text-center mb-4">
                        Shipping, taxes, and discount codes calculated at checkout.
                    </p>

                    <Button label="Checkout" onClick={onCheckout} />
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;