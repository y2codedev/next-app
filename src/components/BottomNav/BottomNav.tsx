'use client'

import React, { useState } from 'react'
import FixturePicker from '@/components/BottomNav/FixturePicker'
import ColorPicker from '@/components/BottomNav/ColorPicker'
import AddToCart from '@/components/BottomNav/AddToCart'
import PaymentMethods from '@/components/BottomNav/PaymentMethods'

const BottomNav: React.FC = () => {
    const [selectedFixture, setSelectedFixture] = useState(0)
    const [selectedColor, setSelectedColor] = useState(0)

    return (
        <div className="fixed bottom-0 sm:hidden left-0 w-full z-[3] bg-[rgba(55,57,55,0.2)] overflow-hidden px-2 py-4">
            <div className="flex gap-3 justify-center items-center">
                <FixturePicker selected={selectedFixture} onSelect={setSelectedFixture} />
                <ColorPicker selected={selectedColor} onSelect={setSelectedColor} />
            </div>

            <div className="mt-4">
                <AddToCart />
                <PaymentMethods />
            </div>
        </div>
    )
}

export default BottomNav
