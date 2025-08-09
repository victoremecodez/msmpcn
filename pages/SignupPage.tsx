
import React from 'react';
import { Page } from '../types.ts';
import AuthHeader from '../components/auth/AuthHeader.tsx';
import SignupForm from '../components/auth/SignupForm.tsx';
import { User } from '../types.ts';

interface SignupPageProps {
    onSignup: (user: User) => void;
    onNavigate: (page: Page) => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onSignup, onNavigate }) => {
    return (
        <div className="bg-neutral-200 flex flex-col min-h-screen">
            <div className="flex-grow">
                <AuthHeader title="Create Your Account" subtitle="Join our church family and stay connected with our community." />
                <main className="py-12">
                    <div className="container mx-auto px-6">
                        <SignupForm onSignup={onSignup} onNavigate={onNavigate} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SignupPage;
