
import React from 'react';
import { Page } from '../types.ts';
import AuthHeader from '../components/auth/AuthHeader.tsx';
import { MailIcon } from '../components/icons.tsx';

interface VerificationPageProps {
    userEmail: string;
    onVerify: () => void;
    onNavigate: (page: Page) => void;
}

const VerificationPage: React.FC<VerificationPageProps> = ({ userEmail, onVerify, onNavigate }) => {
    return (
        <div className="bg-neutral-200 flex flex-col min-h-screen">
            <div className="flex-grow">
                <AuthHeader title="Verify Your Email" subtitle="One last step to complete your registration." />
                <main className="py-12">
                    <div className="container mx-auto px-6 max-w-lg">
                         <div className="bg-white p-8 rounded-xl shadow-xl text-center">
                            <div className="mx-auto bg-church-light-gold text-church-blue h-16 w-16 flex items-center justify-center rounded-full mb-6">
                                <MailIcon className="h-8 w-8" />
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-church-dark mb-4">Check Your Inbox!</h2>
                            <p className="text-slate-700 font-sans leading-relaxed mb-2">
                                We've sent a verification link to:
                            </p>
                            <p className="text-church-blue font-semibold font-sans mb-6 break-all">
                                {userEmail}
                            </p>
                            <p className="text-slate-700 font-sans leading-relaxed mb-8">
                                Please click the link in that email to activate your account. If you don't see it, be sure to check your spam folder.
                            </p>
                             <button
                                onClick={onVerify}
                                className="w-full flex justify-center items-center bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-church-blue-light transition-colors duration-300 transform hover:scale-105"
                            >
                                Continue (Simulate Verification)
                            </button>
                             <div className="mt-6 text-sm">
                                 <a onClick={() => onNavigate('login')} className="font-medium text-slate-600 hover:text-church-blue underline cursor-pointer">
                                    Back to Login
                                </a>
                            </div>
                         </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default VerificationPage;
