import React, { useState } from 'react';
import { User, UserProfile } from '../../../types.ts';
import { UploadIcon } from '../../icons.tsx';

interface ProfileViewProps {
    user: User;
    onUpdateUser: (updatedUserData: Partial<User>) => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user, onUpdateUser }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState<UserProfile>(user.profile);
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

    const handleSave = () => {
        onUpdateUser({ profile: profileData });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setProfileData(user.profile); // Reset changes
        setIsEditing(false);
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif text-church-blue font-bold">My Profile</h2>
                {!isEditing && (
                    <button onClick={() => setIsEditing(true)} className="bg-church-blue text-white font-sans font-semibold py-2 px-5 rounded-full hover:bg-church-blue-light transition-colors duration-300">
                        Edit Profile
                    </button>
                )}
            </div>

            {isEditing ? (
                // EDITING VIEW
                <form className="space-y-6">
                    <div className="flex items-center space-x-6">
                        <img src={profileData.profilePictureUrl} alt="Profile" className="h-24 w-24 rounded-full object-cover shadow-md" />
                        <div>
                           <input type="file" id="profilePicture" className="hidden" onChange={handleFileChange} accept="image/*"/>
                            <label htmlFor="profilePicture" className="cursor-pointer bg-gray-100 text-church-dark font-sans font-semibold py-2 px-5 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center">
                                <UploadIcon className="h-5 w-5 mr-2" />
                                {fileName || 'Change Picture'}
                            </label>
                            <p className="text-xs text-slate-500 mt-2">Recommended: Square image (200x200px)</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-sans font-medium text-slate-700 mb-1">Full Name</label>
                            <input type="text" value={user.name} className="w-full font-sans px-4 py-3 rounded-md border bg-gray-100 border-gray-300" disabled />
                        </div>
                         <div>
                            <label className="block text-sm font-sans font-medium text-slate-700 mb-1">Email Address</label>
                            <input type="email" value={user.email} className="w-full font-sans px-4 py-3 rounded-md border bg-gray-100 border-gray-300" disabled />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-sans font-medium text-slate-700 mb-1">Phone Number</label>
                            <input type="tel" name="phone" id="phone" value={profileData.phone} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold" />
                        </div>
                        <div>
                            <label htmlFor="birthday" className="block text-sm font-sans font-medium text-slate-700 mb-1">Birthday</label>
                            <input type="date" name="birthday" id="birthday" value={profileData.birthday} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold" />
                        </div>
                         <div>
                            <label htmlFor="gender" className="block text-sm font-sans font-medium text-slate-700 mb-1">Gender</label>
                            <select name="gender" id="gender" value={profileData.gender} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold bg-white">
                                <option>Male</option><option>Female</option><option>Other</option><option>Prefer not to say</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="ministry" className="block text-sm font-sans font-medium text-slate-700 mb-1">Primary Ministry</label>
                            <select name="ministry" id="ministry" value={profileData.ministry} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold bg-white">
                                <option>None</option><option>MCA</option><option>WG</option><option>PYPAN</option><option>CGIT</option>
                            </select>
                        </div>
                    </div>
                     <div>
                        <label htmlFor="address" className="block text-sm font-sans font-medium text-slate-700 mb-1">Address</label>
                        <input type="text" name="address" id="address" value={profileData.address} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold" />
                    </div>
                    <div>
                        <label htmlFor="bio" className="block text-sm font-sans font-medium text-slate-700 mb-1">Bio / Testimony</label>
                        <textarea name="bio" id="bio" rows={4} value={profileData.bio} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold" />
                    </div>
                    <div className="flex justify-end items-center space-x-4 pt-4">
                        <button type="button" onClick={handleCancel} className="bg-gray-200 text-slate-700 font-sans font-semibold py-2 px-5 rounded-full hover:bg-gray-300 transition-colors duration-300">Cancel</button>
                        <button type="button" onClick={handleSave} className="bg-accent-success text-white font-sans font-semibold py-2 px-5 rounded-full hover:bg-green-600 transition-colors duration-300">Save Changes</button>
                    </div>
                </form>
            ) : (
                // DISPLAY VIEW
                <div className="space-y-4">
                    <div className="flex items-center space-x-6">
                        <img src={user.profile.profilePictureUrl} alt="Profile" className="h-24 w-24 rounded-full object-cover shadow-md" />
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-church-dark">{user.name}</h3>
                            <p className="text-slate-600 font-sans">{user.email}</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 pt-4 font-sans">
                        <div className="bg-gray-50 p-3 rounded-lg"><strong className="font-semibold text-slate-500">Phone:</strong> {user.profile.phone || 'N/A'}</div>
                        <div className="bg-gray-50 p-3 rounded-lg"><strong className="font-semibold text-slate-500">Birthday:</strong> {user.profile.birthday ? new Date(user.profile.birthday).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}</div>
                        <div className="bg-gray-50 p-3 rounded-lg"><strong className="font-semibold text-slate-500">Gender:</strong> {user.profile.gender || 'N/A'}</div>
                        <div className="bg-gray-50 p-3 rounded-lg"><strong className="font-semibold text-slate-500">Ministry:</strong> {user.profile.ministry || 'N/A'}</div>
                        <div className="bg-gray-50 p-3 rounded-lg md:col-span-2"><strong className="font-semibold text-slate-500">Address:</strong> {user.profile.address || 'N/A'}</div>
                    </div>
                    <div>
                        <h4 className="font-serif font-semibold text-church-dark text-lg mt-4">Bio / Testimony</h4>
                        <p className="text-slate-700 font-sans mt-2 leading-relaxed bg-gray-50 p-4 rounded-lg">{user.profile.bio || 'No bio provided.'}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileView;
