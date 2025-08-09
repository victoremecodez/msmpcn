import React, { useState } from 'react';

const ManageContent: React.FC = () => {
    const [heroTitle, setHeroTitle] = useState("Welcome to Mary Slessor Memorial Presbyterian Cathedral");
    const [heroSubtitle, setHeroSubtitle] = useState("Bringing the Gospel to Africa");
    const [aboutText, setAboutText] = useState("Mary Slessor Memorial Presbyterian Cathedral is a beacon of faith and community in Port Harcourt. Founded on the principles of the Presbyterian denomination, we are dedicated to spiritual growth, community service, and spreading the Gospel, continuing the legacy of our namesake.");

    const SectionEditor: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
        <div className="border-t pt-6 mt-6">
            <h3 className="text-xl font-serif font-bold text-church-dark mb-4">{title}</h3>
            <div className="space-y-4">{children}</div>
             <button className="mt-4 bg-accent-success text-white text-sm font-sans font-semibold py-1 px-4 rounded-full hover:bg-green-600">Save Changes</button>
        </div>
    );

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-serif text-church-blue font-bold mb-4">Manage Website Content</h2>
            <p className="text-slate-600 font-sans mb-6">
                Edit key text and content from various sections of the public-facing website. Changes here are for demonstration and will reset on page refresh.
            </p>

            {/* Hero Section */}
            <SectionEditor title="Homepage Hero Section">
                 <div>
                    <label className="block text-sm font-sans font-medium text-slate-700 mb-1">Main Title</label>
                    <input type="text" value={heroTitle} onChange={e => setHeroTitle(e.target.value)} className="w-full font-sans p-2 border rounded" />
                </div>
                <div>
                    <label className="block text-sm font-sans font-medium text-slate-700 mb-1">Subtitle</label>
                    <input type="text" value={heroSubtitle} onChange={e => setHeroSubtitle(e.target.value)} className="w-full font-sans p-2 border rounded" />
                </div>
            </SectionEditor>

             {/* About Preview Section */}
            <SectionEditor title="Homepage About Preview">
                 <div>
                    <label className="block text-sm font-sans font-medium text-slate-700 mb-1">About Text</label>
                    <textarea value={aboutText} onChange={e => setAboutText(e.target.value)} className="w-full font-sans p-2 border rounded" rows={4}></textarea>
                </div>
            </SectionEditor>
        </div>
    );
};

export default ManageContent;
