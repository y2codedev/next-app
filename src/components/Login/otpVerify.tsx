'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import Button from '../Button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import showToast from '@/lib/toast';
interface OtpVerifyProps {
    email: string;
    isOpen: boolean;
    onClose: () => void;
}

const OtpVerify: React.FC<OtpVerifyProps> = ({ email, isOpen, onClose }) => {
    const MySwal = withReactContent(Swal)
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const [otp, setOtp] = useState(['', '', '', '']);

    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.showModal();
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
            MySwal.fire({
                title: 'Success!',
                text: 'OTP verified successfully.',
                icon: 'success',
                confirmButtonText: 'Continue'
            })
            onClose();
            setOtp(['', '', '', '']);
        } else {
            MySwal.fire({
                title: 'error!',
                text: 'Invalid OTP. Please try again.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
             onClose();
        }
    };


    return (
        <dialog ref={modalRef} className="modal" id="otp_modal">
            <div className="modal-box max-w-md rounded-lg p-6 text-center relative">
                <div
                    onClick={onClose}
                    className="absolute h-6 w-6 flex items-center justify-center rounded-full top-2 right-2 cursor-pointer z-10 text-white hover:bg-gray-200"
                    aria-label="Close"
                >
                    <FiX size={18} color="#000" />
                </div>

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
