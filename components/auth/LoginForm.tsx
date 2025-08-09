
import React, { useState } from 'react';
import { Page } from '../../types.ts';
import { User } from '../../types.ts';
import { EyeIcon, EyeOffIcon } from '../icons.tsx';

interface LoginFormProps {
    onLogin: (user: User) => void;
    onNavigate: (page: Page) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onNavigate }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Mock member login check
        if (email.includes('@') && password) {
            // In a real app, you would fetch the user and verify the password.
            // For this demo, we'll create a mock user with a complete profile
            // to simulate a returning member.
            const memberUser: User = {
                id: `user_${Date.now()}`,
                name: 'Church Member',
                email: email,
                role: 'member',
                profile: {
                    phone: '08012345678',
                    gender: 'Male',
                    address: '123 Faith Avenue, Port Harcourt',
                    ministry: 'MCA',
                    birthday: '1990-01-01',
                    bio: 'A passionate member of the congregation.',
                    profilePictureUrl: 'https://picsum.photos/seed/member-avatar/200',
                },
                // These fields are populated by App.tsx's handleLogin with initial data,
                // so we can provide empty arrays here.
                bookmarkedSermons: [],
                eventSignups: [],
                donations: [],
                sermonHistory: {},
                prayerRequests: [],
                spiritualAchievements: [],
                inbox: [],
            };
            onLogin(memberUser);
            return;
        }

        setError('Invalid credentials. Please try again.');
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-serif text-church-dark font-bold mb-6 text-center">Welcome Back</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-sans font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                        aria-label="Email Address"
                        required
                    />
                </div>
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <label htmlFor="password" className="block text-sm font-sans font-medium text-slate-700">Password</label>
                        <a href="#" className="text-sm font-medium text-church-blue hover:underline cursor-pointer">
                            Forgot password?
                        </a>
                    </div>
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
                        className="w-full flex justify-center items-center bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-church-blue-light transition-colors duration-300 transform hover:scale-105"
                    >
                        Log In
                    </button>
                </div>
                <div className="text-center text-sm font-sans text-slate-600">
                    <p>
                        Don't have an account?{' '}
                        <a onClick={() => onNavigate('signup')} className="font-medium text-church-blue hover:underline cursor-pointer">
                            Sign up
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
