'use client';

import React from "react";
import { FiInbox } from "react-icons/fi";

interface EmptyStateNoticeProps {
    message: string;
}

export const EmptyStateNotice: React.FC<EmptyStateNoticeProps> = ({ message }) => (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <div className="bg-white  rounded-lg  p-8 max-w-md w-full">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4">
                <FiInbox className="text-blue-600 text-3xl" />
            </div>
            <h2 className="text-lg font-semibold text-gray-500 mb-2">No products found</h2>
            <p className="text-sm text-gray-600">{message}</p>
        </div>
    </div>
);
