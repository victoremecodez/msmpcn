
import React, { useState } from 'react';
import { Page } from '../../types.ts';
import { User } from '../../types.ts';
import { EyeIcon, EyeOffIcon } from '../icons.tsx';

interface AdminLoginFormProps {
    onLogin: (user: User) => void;
    onNavigate: (page: Page) => void;
}

const AdminLoginForm: React.FC<AdminLoginFormProps> = ({ onLogin, onNavigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Special admin credentials check
        if (username === '$admin' && password === '%.%__5690abcZ') {
            const adminUser: User = {
                id: 'admin01',
                name: 'Admin User',
                email: '$admin',
                role: 'admin',
                profile: {},
                bookmarkedSermons: [],
                eventSignups: [],
                donations: [],
                sermonHistory: {},
                prayerRequests: [],
                spiritualAchievements: [],
                inbox: [],
            };
            onLogin(adminUser);
            return;
        }

        setError('Invalid admin username or password.');
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-serif text-church-dark font-bold mb-6 text-center">Admin Access</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                    <label htmlFor="username" className="block text-sm font-sans font-medium text-slate-700 mb-1">Admin Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                        aria-label="Admin Username"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-sans font-medium text-slate-700 mb-1">Password</label>
                    <div className="relative">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                            aria-label="Password"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-500 hover:text-church-blue"
                            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                        >
                            {isPasswordVisible ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
                {error && (
                    <p className="text-sm text-accent-danger text-center">{error}</p>
                )}
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center items-center bg-church-dark text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-neutral-800 transition-colors duration-300 transform hover:scale-105"
                    >
                        Enter Admin Panel
                    </button>
                </div>
                 <div className="text-center text-sm font-sans text-slate-600">
                    <p>
                        Not an admin?{' '}
                        <a onClick={() => onNavigate('login')} className="font-medium text-church-blue hover:underline cursor-pointer">
                            Go to Member Login
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default AdminLoginForm;
