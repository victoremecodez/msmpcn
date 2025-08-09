
import React, { useState } from 'react';

interface PrayerRequestFormProps {
    onSubmit: (author: string, content: string) => void;
}

const PrayerRequestForm: React.FC<PrayerRequestFormProps> = ({ onSubmit }) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!content) return;
        const finalAuthor = isAnonymous ? 'Anonymous' : (author || 'A Church Member');
        onSubmit(finalAuthor, content);
        setAuthor('');
        setContent('');
        setIsAnonymous(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-serif text-church-dark font-bold text-center">Request for Prayer</h3>
            <div>
                <label htmlFor="prayer-author" className="block text-sm font-sans font-medium text-slate-700 mb-1">Your Name (Optional)</label>
                <input
                    type="text"
                    id="prayer-author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold disabled:bg-gray-200"
                    placeholder="Leave blank to be 'A Church Member'"
                    disabled={isAnonymous}
                />
            </div>
            <div className="flex items-center">
                <input
                    id="anonymous"
                    name="anonymous"
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="h-4 w-4 text-church-blue focus:ring-church-gold border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-900">
                    I want to remain anonymous
                </label>
            </div>
            <div>
                <label htmlFor="prayer-content" className="block text-sm font-sans font-medium text-slate-700 mb-1">Your Prayer Request</label>
                <textarea
                    id="prayer-content"
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                    placeholder="How can we pray for you?"
                    required
                ></textarea>
            </div>
            <div>
                <button type="submit" className="w-full bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300">
                    Submit Request
                </button>
            </div>
            <p className="text-xs text-center text-slate-500 font-sans">
                Your privacy is important. All prayer requests can be made anonymously and will be handled with care.
            </p>
        </form>
    );
};

export default PrayerRequestForm;
