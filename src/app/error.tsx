'use client';

import { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Global Error:', error);
    }, [error]);

    return (
       <div className='flex items-center justify-center min-h-screen'>
         <div className="w-full max-w-md bg-white p-6 text-center animate-fade-in">
            <p className="text-sm text-gray-500 mt-2">{error?.message}</p>
            <div className="mb-4">
                <h1 className="text-4xl font-extrabold text-indigo-600 mb-2">Oops!</h1>
                <p className="text-lg text-gray-700">Something went wrong.</p>
            </div>
            <p className="text-sm text-gray-500 mb-6">
                Please try again or contact support if the issue persists.
            </p>
            <button
                onClick={reset}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                Try Again
            </button>
        </div>
       </div>
    );
}
