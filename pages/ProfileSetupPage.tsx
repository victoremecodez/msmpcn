import React, { useState } from 'react';
import { User, UserProfile } from '../types.ts';
import { UploadIcon } from '../components/icons.tsx';

interface ProfileSetupPageProps {
    currentUser: User;
    onSetupComplete: (profileData: UserProfile) => void;
}

const ProfileSetupPage: React.FC<ProfileSetupPageProps> = ({ currentUser, onSetupComplete }) => {
    const [profileData, setProfileData] = useState<UserProfile>({
        phone: '',
        gender: 'Prefer not to say',
        address: '',
        ministry: 'None',
        birthday: '',
        bio: '',
        profilePictureUrl: 'https://picsum.photos/seed/default-avatar/200' // Default
    });
    const [fileName, setFileName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFileName(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileData(prev => ({ ...prev, profilePictureUrl: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSetupComplete(profileData);
    };

    return (
        <div className="bg-church-gray min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-2xl">
                <div className="bg-white p-8 rounded-xl shadow-2xl">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-serif text-church-blue font-bold">Complete Your Profile</h1>
                        <p className="text-slate-600 font-sans mt-2">Welcome, {currentUser.name.split(' ')[0]}! Let's set up your account.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col items-center space-y-4">
                            <img src={profileData.profilePictureUrl} alt="Profile preview" className="h-32 w-32 rounded-full object-cover shadow-lg" />
                            <input type="file" id="profilePicture" className="hidden" onChange={handleFileChange} accept="image/*"/>
                            <label htmlFor="profilePicture" className="cursor-pointer bg-gray-100 text-church-dark font-sans font-semibold py-2 px-5 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center">
                                <UploadIcon className="h-5 w-5 mr-2" />
                                {fileName || 'Upload Picture'}
                            </label>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-sans font-medium text-slate-700 mb-1">Phone Number</label>
                                <input type="tel" name="phone" id="phone" value={profileData.phone} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold" required />
                            </div>
                            <div>
                                <label htmlFor="birthday" className="block text-sm font-sans font-medium text-slate-700 mb-1">Birthday</label>
                                <input type="date" name="birthday" id="birthday" value={profileData.birthday} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold" required />
                            </div>
                             <div>
                                <label htmlFor="gender" className="block text-sm font-sans font-medium text-slate-700 mb-1">Gender</label>
                                <select name="gender" id="gender" value={profileData.gender} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold bg-white">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                    <option>Prefer not to say</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="ministry" className="block text-sm font-sans font-medium text-slate-700 mb-1">Primary Ministry</label>
                                <select name="ministry" id="ministry" value={profileData.ministry} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold bg-white">
                                    <option>None</option>
                                    <option>MCA</option>
                                    <option>WG</option>
                                    <option>PYPAN</option>
                                    <option>CGIT</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-sans font-medium text-slate-700 mb-1">Address</label>
                            <input type="text" name="address" id="address" value={profileData.address} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold" />
                        </div>

                        <div>
                            <label htmlFor="bio" className="block text-sm font-sans font-medium text-slate-700 mb-1">Short Bio / Testimony (Optional)</label>
                            <textarea name="bio" id="bio" rows={4} value={profileData.bio} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold" placeholder="Tell us a little about yourself..."></textarea>
                        </div>
                        
                        <div className="pt-4">
                            <button type="submit" className="w-full bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-church-blue-light transition-colors duration-300 transform hover:scale-105">
                                Save and Go to Dashboard
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileSetupPage;
