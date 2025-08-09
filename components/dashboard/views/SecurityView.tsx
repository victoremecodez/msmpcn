import React, { useState } from 'react';
import { loginHistoryData } from '../../../data/dashboard.ts';
import { EyeIcon, EyeOffIcon } from '../../icons.tsx';

const SecurityView: React.FC = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isCurrentVisible, setIsCurrentVisible] = useState(false);
    const [isNewVisible, setIsNewVisible] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);
    const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        if (newPassword !== confirmPassword) {
            setMessage({ type: 'error', text: 'New passwords do not match.' });
            return;
        }
        if (newPassword.length < 8) {
             setMessage({ type: 'error', text: 'New password must be at least 8 characters long.' });
            return;
        }
        // Simulate API call
        console.log("Changing password...");
        setMessage({ type: 'success', text: 'Password changed successfully!' });
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    const PasswordInput: React.FC<{label: string, id: string, value: string, onChange: (e) => void, isVisible: boolean, onToggle: () => void}> = ({ label, id, value, onChange, isVisible, onToggle }) => (
        <div>
            <label htmlFor={id} className="block text-sm font-sans font-medium text-slate-700 mb-1">{label}</label>
            <div className="relative">
                <input
                    type={isVisible ? "text" : "password"}
                    id={id}
                    value={value}
                    onChange={onChange}
                    className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                    required
                />
                <button
                    type="button"
                    onClick={onToggle}
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-500 hover:text-church-blue"
                >
                    {isVisible ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
            </div>
        </div>
    );

    return (
        <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-serif text-church-blue font-bold mb-6">Change Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <PasswordInput label="Current Password" id="currentPassword" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} isVisible={isCurrentVisible} onToggle={() => setIsCurrentVisible(!isCurrentVisible)} />
                    <PasswordInput label="New Password" id="newPassword" value={newPassword} onChange={e => setNewPassword(e.target.value)} isVisible={isNewVisible} onToggle={() => setIsNewVisible(!isNewVisible)} />
                    <PasswordInput label="Confirm New Password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} isVisible={isConfirmVisible} onToggle={() => setIsConfirmVisible(!isConfirmVisible)} />
                    {message && (
                        <p className={`text-sm text-center font-semibold ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{message.text}</p>
                    )}
                    <div className="pt-2">
                        <button type="submit" className="w-full bg-church-blue text-white font-sans font-semibold py-3 px-6 rounded-full hover:bg-church-blue-light transition-colors">
                            Update Password
                        </button>
                    </div>
                </form>
            </div>

            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-serif font-bold text-church-dark mb-4">Recent Login Activity</h3>
                <ul className="space-y-3">
                    {loginHistoryData.map(log => (
                        <li key={log.id} className="font-sans text-sm text-slate-700">
                            <p className="font-semibold">{log.device}</p>
                            <p className="text-xs text-slate-500">{new Date(log.date).toLocaleString()} &bull; IP: {log.ip}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SecurityView;
