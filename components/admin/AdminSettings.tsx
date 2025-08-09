import React, { useState } from 'react';

const AdminSettings: React.FC = () => {
    const [settings, setSettings] = useState({
        churchName: 'Mary Slessor Memorial Presbyterian Cathedral',
        contactEmail: 'contact@msmpc.org',
        phone: '+234 123 456 7890',
        address: '123 Faith Avenue, Port Harcourt, Nigeria'
    });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSettings({...settings, [e.target.name]: e.target.value});
    };

    const handleSaveChanges = () => {
        alert("Settings saved (simulation)!");
    };

    return (
        <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-serif text-church-blue font-bold mb-4">Site Settings</h2>
                <p className="text-slate-600 font-sans mb-6">
                    Change global settings for the website. Changes are for demonstration only.
                </p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-sans font-medium text-slate-700 mb-1">Church Name</label>
                        <input type="text" name="churchName" value={settings.churchName} onChange={handleInputChange} className="w-full font-sans p-2 border rounded" />
                    </div>
                     <div>
                        <label className="block text-sm font-sans font-medium text-slate-700 mb-1">Contact Email</label>
                        <input type="email" name="contactEmail" value={settings.contactEmail} onChange={handleInputChange} className="w-full font-sans p-2 border rounded" />
                    </div>
                     <div>
                        <label className="block text-sm font-sans font-medium text-slate-700 mb-1">Phone Number</label>
                        <input type="tel" name="phone" value={settings.phone} onChange={handleInputChange} className="w-full font-sans p-2 border rounded" />
                    </div>
                     <div>
                        <label className="block text-sm font-sans font-medium text-slate-700 mb-1">Address</label>
                        <input type="text" name="address" value={settings.address} onChange={handleInputChange} className="w-full font-sans p-2 border rounded" />
                    </div>
                    <div className="pt-2">
                        <button type="button" onClick={handleSaveChanges} className="bg-accent-success text-white font-sans font-semibold py-2 px-5 rounded-full hover:bg-green-600">
                            Save All Settings
                        </button>
                    </div>
                </form>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-serif text-church-blue font-bold mb-4">Manage Admins</h2>
                 <p className="text-slate-600 font-sans mb-6">
                    Add or remove users with administrative privileges.
                </p>
                {/* Placeholder */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
                    Admin User Management Coming Soon
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;