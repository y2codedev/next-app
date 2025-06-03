'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12 text-center">
            <Image
                src="/images/not-found.jpg" 
                alt="404 Error"
                width={300}
                height={300}
                className="mb-6"
            />
            <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
            <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
            <p className="text-gray-500 mb-6">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                href="/"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-md transition-colors"
            >
                Go Back Home
            </Link>
        </div>
    );
}
