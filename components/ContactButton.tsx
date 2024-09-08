import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactButton: React.FC = () => {
    const email = "contact@yashpurani.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                toast.success('Email address copied to clipboard!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    style: { backgroundColor: '#4caf50', color: '#fff' } // Green background, white text
                });
            })
            .catch((err) => {
                toast.error('Failed to copy email address.', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    style: { backgroundColor: '#f44336', color: '#fff' } // Red background, white text
                });
                console.error('Failed to copy email address: ', err);
            });
    };

    return (
        <div className="flex flex-col items-center">
            <a href={`mailto:${email}`}>
                <button className="w-40 h-10 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wide rounded-md hover:bg-hoverColor duration-300">
                    Say Hello!
                </button>
            </a>
            <button 
                onClick={copyToClipboard} 
                className="w-40 h-10 border border-textGreen mt-4 font-titleFont text-sm text-textGreen tracking-wide rounded-md hover:bg-hoverColor duration-300"
            >
                Copy Email
            </button>
            <ToastContainer />
        </div>
    );
}

export default ContactButton;
