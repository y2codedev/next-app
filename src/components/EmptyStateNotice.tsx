'use client';

import React from "react";

interface EmptyStateNoticeProps {
    message: string;
}

export const EmptyStateNotice: React.FC<EmptyStateNoticeProps> = ({ message }) => (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <div className="flex">
            <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">No content available</h3>
                <p className="mt-2 text-sm text-blue-700">{message}</p>
            </div>
        </div>
    </div>
);
