
import React from 'react';
import { Page } from '../types.ts';
import AuthHeader from '../components/auth/AuthHeader.tsx';
import LoginForm from '../components/auth/LoginForm.tsx';
import { User } from '../types.ts';

interface LoginPageProps {
    onLogin: (user: User) => void;
    onNavigate: (page: Page) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigate }) => {
    return (
        <div className="bg-neutral-200 flex flex-col min-h-screen">
            <div className="flex-grow">
                <AuthHeader title="Member Login" subtitle="Enter your credentials to access your member portal." />
                <main className="py-12">
                    <div className="container mx-auto px-6">
                        <LoginForm onLogin={onLogin} onNavigate={onNavigate} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LoginPage;
