'use client'

import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
    label: string
    price?: number | string
    onClick?: () => void
    variant?: 'primary' | 'secondary' | 'ghost'
    className?: string
}

const Button: React.FC<ButtonProps> = ({
    label,
    price,
    onClick,
    variant = 'primary',
    className = ''
}) => {
    const baseStyle =
        'w-full flex items-center gap-2 justify-center cursor-pointer rounded-md py-2.5 px-4 text-md font-semibold transition-colors duration-200'

    const variants: Record<typeof variant, string> = {
        primary: 'bg-[#d7e2da] text-black hover:bg-[#c9d8ce]',
        secondary: 'bg-black text-white hover:bg-neutral-800',
        ghost: 'bg-transparent text-black border border-black hover:bg-neutral-100',
    }

    return (
        <button
            onClick={onClick}
            className={classNames(baseStyle, variants[variant], className)}
        >
            {price && <span>{price}</span>}
            {price && <span>|</span>}
            <span>{label}</span>
        </button>
    )
}

export default Button
