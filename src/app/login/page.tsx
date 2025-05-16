'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';

const Login = () => {
    const [email, setEmail] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Logging in with: ${email}`);
    };

    return (
        <div className="min-h-screen flex  items-center justify-between px-0 py-6 sm:px-6 lg:px-8">
            <div className="w-full max-w-md mx-auto mt-8 bg-white p-6 rounded-lg ">
                <h1 className="text-xl font-semibold  text-[#0054a6] mb-2 ">Log in</h1>
                <p className="text-sm text-[#000000a8]  mb-6">
                    Enter your email and we'll send you a login code
                </p>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md  focus:ring-black focus:border-black sm:text-sm"
                            placeholder="Email"
                        />
                    </div>
                    <Button
                        label="Continue"
                        type="submit"
                        variant="custom"
                        className="w-full py-3 px-4 cursor-pointer bg-[#0054a6] text-white font-semibold rounded-md hover:bg-[#003d7c] transition duration-300"
                    />
                </form>
                <p className="text-sm text-[#0054a6] cursor-pointer mt-6">
                    Privacy Policy
                </p>
            </div>
        </div>
    );
};

export default Login;
