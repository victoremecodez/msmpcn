
import React, { useState, useEffect } from 'react';
import { Page } from '../../types.ts';
import { User } from '../../types.ts';
import { EyeIcon, EyeOffIcon } from '../icons.tsx';

interface SignupFormProps {
    onSignup: (user: User) => void;
    onNavigate: (page: Page) => void;
}

const PasswordStrengthMeter: React.FC<{ strength: number }> = ({ strength }) => {
    const strengthLevels = [
        { width: '0%', color: 'bg-gray-200', label: ''},
        { width: '25%', color: 'bg-accent-danger', label: 'Weak'},
        { width: '50%', color: 'bg-accent-warning', label: 'Medium'},
        { width: '75%', color: 'bg-lime-500', label: 'Strong'},
        { width: '100%', color: 'bg-accent-success', label: 'Very Strong'},
    ];
    
    const currentLevel = strengthLevels[strength] || strengthLevels[0];

    return (
        <div>
            <div className="w-full bg-neutral-200 rounded-full h-2 mt-2 overflow-hidden">
                <div 
                    className={`h-2 rounded-full transition-all duration-300 ${currentLevel.color}`}
                    style={{ width: currentLevel.width }}
                ></div>
            </div>
             {currentLevel.label && <p className="text-xs text-right mt-1 font-semibold" style={{ color: currentLevel.color.replace('bg-', '').replace('-500', '').replace('-400','').replace('-600','') }}>{currentLevel.label}</p>}
        </div>
    );
};

const PasswordCriteria: React.FC<{ criteria: { [key: string]: boolean } }> = ({ criteria }) => {
    const criteriaList = [
        { key: 'length', text: '8-16 characters' },
        { key: 'lowercase', text: 'A lowercase letter' },
        { key: 'uppercase', text: 'An uppercase letter' },
        { key: 'number', text: 'A number' },
        { key: 'symbol', text: 'A symbol (@$!%*?&)' },
    ];
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 text-xs font-sans mt-2 text-slate-600">
            {criteriaList.map(item => (
                <li key={item.key} className={`flex items-center transition-colors duration-300 ${criteria[item.key] ? 'text-accent-success' : 'text-slate-500'}`}>
                    <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        {criteria[item.key] ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        ) : (
                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        )}
                    </svg>
                    {item.text}
                </li>
            ))}
        </ul>
    );
};


const SignupForm: React.FC<SignupFormProps> = ({ onSignup, onNavigate }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    
    const [passwordCriteria, setPasswordCriteria] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        symbol: false,
    });
    const [passwordStrength, setPasswordStrength] = useState(0);

    useEffect(() => {
        const length = password.length >= 8 && password.length <= 16;
        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        const number = /[0-9]/.test(password);
        const symbol = /[@$!%*?&]/.test(password);
        
        const newCriteria = { length, uppercase, lowercase, number, symbol };
        setPasswordCriteria(newCriteria);
        
        let strength = 0;
        const metCount = Object.values(newCriteria).filter(Boolean).length;
        
        if (password.length > 0 && !length) {
            strength = 1; // Always weak if length is wrong but not empty
        } else if (length) {
            if (metCount >= 5) strength = 4; // Very Strong
            else if (metCount === 4) strength = 3; // Strong
            else if (metCount === 3) strength = 2; // Medium
            else if (metCount >= 1) strength = 1; // Weak
        }
        
        setPasswordStrength(strength);

    }, [password]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const allCriteriaMet = Object.values(passwordCriteria).every(v => v === true);

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (!allCriteriaMet) {
            setError('Password does not meet all criteria.');
            return;
        }

        const newUser: User = {
            id: `user_${Date.now()}`,
            name: name,
            email: email,
            role: 'member',
            profile: {},
            bookmarkedSermons: [],
            eventSignups: [],
            donations: [],
            sermonHistory: {},
            prayerRequests: [],
            spiritualAchievements: [],
            inbox: [],
        };
        
        onSignup(newUser);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-serif text-church-dark font-bold mb-6 text-center">Become a Member</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-sans font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                        required
                        aria-label="Full Name"
                    />
                </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-sans font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                        required
                        aria-label="Email Address"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-sans font-medium text-slate-700 mb-1">Password</label>
                     <div className="relative">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                            required
                            aria-label="Password"
                        />
                         <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)} className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-500 hover:text-church-blue" aria-label={isPasswordVisible ? "Hide password" : "Show password"}>
                            {isPasswordVisible ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                        </button>
                    </div>
                    <PasswordStrengthMeter strength={passwordStrength} />
                    <PasswordCriteria criteria={passwordCriteria} />
                </div>
                 <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-sans font-medium text-slate-700 mb-1">Confirm Password</label>
                     <div className="relative">
                        <input
                            type={isConfirmPasswordVisible ? "text" : "password"}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                            required
                            aria-label="Confirm Password"
                        />
                        <button type="button" onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-500 hover:text-church-blue" aria-label={isConfirmPasswordVisible ? "Hide password" : "Show password"}>
                            {isConfirmPasswordVisible ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
                {error && <p className="text-sm text-accent-danger text-center">{error}</p>}
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center items-center bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-church-blue-light transition-colors duration-300 mt-4"
                    >
                        Create Account
                    </button>
                </div>
                <div className="text-center text-sm font-sans text-slate-600">
                    <p>
                        Already have an account?{' '}
                        <a onClick={() => onNavigate('login')} className="font-medium text-church-blue hover:underline cursor-pointer">
                            Log In
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
