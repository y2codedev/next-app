'use client';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const useAlert = () => {
    const showSuccess = (title: string, text: string, confirmText = 'OK') =>
        MySwal.fire({
            title,
            text,
            icon: 'success',
            confirmButtonText: confirmText,
        });

    const showError = (title: string, text: string, confirmText = 'OK') =>
        MySwal.fire({
            title,
            text,
            icon: 'error',
            confirmButtonText: confirmText,
        });

    const showConfirm = async (
        title: string,
        text: string,
        confirmText = 'Yes',
        cancelText = 'Cancel'
    ) =>
        MySwal.fire({
            title,
            text,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
        });

    return {
        showSuccess,
        showError,
        showConfirm,
    };
};

export default useAlert;