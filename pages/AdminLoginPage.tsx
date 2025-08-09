
import React from 'react';
import { Page } from '../types.ts';
import AuthHeader from '../components/auth/AuthHeader.tsx';
import AdminLoginForm from '../components/auth/AdminLoginForm.tsx';
import { User } from '../types.ts';

interface AdminLoginPageProps {
    onLogin: (user: User) => void;
    onNavigate: (page: Page) => void;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLogin, onNavigate }) => {
    return (
        <div className="bg-neutral-200 flex flex-col min-h-screen">
            <div className="flex-grow">
                <AuthHeader title="Administrator Login" subtitle="Please enter your administrator credentials to access the management panel." />
                <main className="py-12">
                    <div className="container mx-auto px-6">
                        <AdminLoginForm onLogin={onLogin} onNavigate={onNavigate} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLoginPage;
