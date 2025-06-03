'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { CloseButton, useAlert, Button, showToast } from '@/components'

interface OtpVerifyProps {
    email: string;
    isOpen: boolean;
    onClose: () => void;
}

const OtpVerify: React.FC<OtpVerifyProps> = ({ email, isOpen, onClose }) => {
    const { showSuccess, showError } = useAlert();
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const [otp, setOtp] = useState(['', '', '', '']);

    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.showModal();
            setTimeout(() => {
                const firstInput = document.getElementById('otp-0') as HTMLInputElement;
                firstInput?.focus();
            }, 100);
        } else if (!isOpen && modalRef.current?.open) {
            modalRef.current.close();
        }
    }, [isOpen]);

    const handleChange = (index: number, value: string) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 3) {
                const next = document.getElementById(`otp-${index + 1}`);
                (next as HTMLInputElement)?.focus();
            }
        }
    };

    const handleVerify = async () => {
        const code = otp.join('');
        if (code.length !== 4) {
            showToast.error('Please enter a valid 4-digit OTP');
            return;
        }

        if (code === '1234') {
            showSuccess('Success!', 'OTP verified successfully.');
            onClose();
            setOtp(['', '', '', '']);
        } else {
            showError('Invalid OTP', 'The OTP you entered is incorrect.');
            onClose();
        }
    };


    return (
        <dialog ref={modalRef} className="modal" id="otp_modal">
            <div className="modal-box max-w-md rounded-lg p-6 text-center relative">
                <CloseButton onClick={onClose} />
                <div className="flex justify-center mb-4">
                    <FaUserCircle className="text-gray-400" size={64} />
                </div>

                <h3 className="font-semibold text-xl mb-1">Login</h3>
                <p className="text-sm text-gray-600 mb-1">
                    A verification code is required to complete the process
                </p>
                <p className="text-sm text-gray-600 mb-4">
                    We've sent a verification code to your email
                </p>
                <p className="text-sm font-semibold text-black mb-4">{email}</p>

                <div className="flex justify-center gap-2 mb-6">
                    {otp.map((digit, index) => (
                        <input
                            aria-label={`otp-${index}`}
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            className="w-12 h-12 text-center text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    ))}
                </div>

                <Button
                    onClick={handleVerify}
                    label="Verify"
                    type="submit"
                    variant="custom"
                    className="w-full py-3 px-4 cursor-pointer bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
                />

                <p
                    onClick={() => setOtp(['', '', '', ''])}
                    className="text-indigo-600 mt-1 text-sm text-center cursor-pointer hover:underline"
                >
                    Resend
                </p>
            </div>
        </dialog>
    );
};

export default OtpVerify;