
import React, { useState } from 'react';
import { UploadIcon } from '../icons.tsx';

interface TestimonialFormProps {
    onSubmit: (author: string, content: string, imageUrl?: string, videoUrl?: string) => void;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({ onSubmit }) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!author || !content) return;
        onSubmit(author, content);
        setAuthor('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-serif text-church-dark font-bold text-center">Share God's Goodness</h3>
            <div>
                <label htmlFor="testimony-author" className="block text-sm font-sans font-medium text-slate-700 mb-1">Your Name</label>
                <input
                    type="text"
                    id="testimony-author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                    placeholder="e.g., John D."
                    required
                />
            </div>
            <div>
                <label htmlFor="testimony-content" className="block text-sm font-sans font-medium text-slate-700 mb-1">Your Testimony</label>
                <textarea
                    id="testimony-content"
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                    placeholder="Share what God has done for you..."
                    required
                ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <label htmlFor="testimony-image" className="block text-sm font-sans font-medium text-slate-700 mb-1">Upload Image (Optional)</label>
                    <div className="flex items-center justify-center w-full">
                       <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                           <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
                               <UploadIcon className="w-8 h-8 mb-2" />
                               <p className="text-sm">Click to upload image</p>
                           </div>
                           <input id="testimony-image" type="file" className="hidden" accept="image/*"/>
                       </label>
                    </div>
                 </div>
                 <div>
                    <label htmlFor="testimony-video" className="block text-sm font-sans font-medium text-slate-700 mb-1">Upload Video (Optional)</label>
                    <div className="flex items-center justify-center w-full">
                       <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                           <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
                               <UploadIcon className="w-8 h-8 mb-2" />
                               <p className="text-sm">Click to upload video</p>
                           </div>
                           <input id="testimony-video" type="file" className="hidden" accept="video/*"/>
                       </label>
                   </div>
                 </div>
            </div>
            <div>
                <button type="submit" className="w-full bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300">
                    Submit Testimony
                </button>
            </div>
             <p className="text-xs text-center text-slate-500 font-sans">
                Note: All submissions will be reviewed by an admin before being posted publicly.
            </p>
        </form>
    );
};

export default TestimonialForm;
