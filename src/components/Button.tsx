'use client';

import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    label: string;
    price?: number | string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'ghost' | 'custom';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    label,
    price,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button' || 'submit' || 'reset',
}) => {
    const baseStyle =
        'flex items-center gap-2 justify-center cursor-pointer rounded-md text-md font-semibold transition-colors duration-200';

    const variants: Record<string, string> = {
        primary: 'bg-[#d7e2da] text-black hover:bg-[#c9d8ce] py-2.5 px-4 w-full',
        secondary: 'bg-black text-white hover:bg-neutral-800 py-2.5 px-4 w-full',
        ghost: 'bg-transparent text-black border border-black hover:bg-neutral-100 py-2.5 px-4 w-full',
        custom: '',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames(baseStyle, variants[variant], className)}
        >
            {price && <span>{price}</span>}
            {price && <span>|</span>}
            <span>{label}</span>
        </button>
    );
};

export default Button;
