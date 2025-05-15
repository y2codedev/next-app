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
            className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <div className="flex justify-between items-center p-4 border-b-[1px] border-b-gray-200">
                <h2 className="text-lg font-semibold text-secondary">Your Cart</h2>
                <button className='cursor-pointer' onClick={onClose} aria-label="Close cart">
                    <FiX className="text-xl" />
                </button>
            </div>

            <div className="p-4 flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-260px)]">
                {cartItems?.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                        <OptimizedImage
                            src={item.product.image}
                            alt={item.product.title}
                            width={80}
                            height={80}
                            className=""
                        />
                        <div className="flex-1">
                            <h4 className="text-lg capitalize text-blue-500 line-clamp-2 w-full">{item.product.title}</h4>

                            <p className="text-sm text-secondary font-semibold mt-1">
                                Color : <span className="text-gray-700 font-normal">{item.product.color}</span>
                            </p>
                            <p className="text-sm text-secondary font-semibold">
                                Fixture : <span className="text-gray-700 font-normal">{item.product.fixture}</span>
                            </p>
                            <div className="flex items-center gap-3 mt-2">
                                <div className="flex items-center border-[1px] border-gray-300 px-2 py-1 gap-2 rounded">
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

                <div className='p-4'>
                    <label className="block text-sm tracking-2 font-medium text-secondary mb-2" htmlFor="note">
                        Order Note
                    </label>
                    <textarea
                        id="note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="w-full border rounded-md p-2 text-sm mb-4"
                        rows={4}
                        placeholder="Add any special instructions..."
                    />
                </div>
            </div>

            <div className="p-4 border-t-[1px] border-t-gray-300 ">
                <div className="flex tracking-2 justify-between text-lg text-secondary  mb-2">
                    <span className='uppercase'>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-secondary text-center mb-4">
                    Shipping, taxes, and discount codes calculated at checkout.
                </p>

                <Button label="Checkout" onClick={onCheckout} />
            </div>
        </div>
    );
};

export default CartDrawer;