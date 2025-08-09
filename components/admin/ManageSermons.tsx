import React, { useState } from 'react';
import { Sermon } from '../../types.ts';
import { sermonsData } from '../../data/sermons.ts';

const ManageSermons: React.FC = () => {
    const [sermons, setSermons] = useState<Sermon[]>(sermonsData);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingSermon, setEditingSermon] = useState<Sermon | null>(null);
    const [formData, setFormData] = useState<Omit<Sermon, 'tags'>>({
        title: '', speaker: '', date: '', videoUrl: '', audioUrl: '', thumbnail: '', description: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingSermon) {
            // Update existing sermon
            setSermons(sermons.map(s => s.title === editingSermon.title ? { ...s, ...formData, tags: [] } : s));
        } else {
            // Add new sermon
            setSermons([{ ...formData, tags: ['New'] }, ...sermons]);
        }
        resetForm();
    };
    
    const handleEdit = (sermon: Sermon) => {
        setEditingSermon(sermon);
        setFormData(sermon);
        setIsFormVisible(true);
    };
    
    const handleDelete = (sermonTitle: string) => {
        if (window.confirm(`Are you sure you want to delete "${sermonTitle}"?`)) {
            setSermons(sermons.filter(s => s.title !== sermonTitle));
        }
    };
    
    const resetForm = () => {
        setFormData({ title: '', speaker: '', date: '', videoUrl: '', audioUrl: '', thumbnail: '', description: '' });
        setEditingSermon(null);
        setIsFormVisible(false);
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif text-church-blue font-bold">Manage Sermons</h2>
                <button onClick={() => { setIsFormVisible(!isFormVisible); setEditingSermon(null); }} className="bg-church-blue text-white font-sans font-semibold py-2 px-5 rounded-full hover:bg-church-blue-light transition-colors">
                    {isFormVisible ? 'Close Form' : 'Add New Sermon'}
                </button>
            </div>
            
            {isFormVisible && (
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-serif font-bold text-church-dark mb-4">{editingSermon ? 'Edit Sermon' : 'Add New Sermon'}</h3>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                         <div className="grid md:grid-cols-2 gap-4">
                             <input name="title" value={formData.title} onChange={handleInputChange} placeholder="Sermon Title" className="w-full font-sans p-2 border rounded" required />
                             <input name="speaker" value={formData.speaker} onChange={handleInputChange} placeholder="Speaker" className="w-full font-sans p-2 border rounded" required/>
                             <input name="date" type="date" value={formData.date} onChange={handleInputChange} className="w-full font-sans p-2 border rounded" required/>
                             <input name="videoUrl" value={formData.videoUrl} onChange={handleInputChange} placeholder="YouTube Embed URL" className="w-full font-sans p-2 border rounded" />
                         </div>
                         <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="w-full font-sans p-2 border rounded" rows={3}></textarea>
                         <div className="flex justify-end space-x-3">
                             <button type="button" onClick={resetForm} className="bg-gray-200 text-slate-700 font-sans font-semibold py-2 px-4 rounded-full">Cancel</button>
                             <button type="submit" className="bg-accent-success text-white font-sans font-semibold py-2 px-4 rounded-full">{editingSermon ? 'Update Sermon' : 'Save Sermon'}</button>
                         </div>
                    </form>
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600 font-sans">
                    <thead className="text-xs text-slate-700 uppercase bg-gray-100">
                        <tr>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Speaker</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sermons.map(sermon => (
                            <tr key={sermon.title} className="bg-white border-b">
                                <td className="px-6 py-4 font-semibold text-church-dark">{sermon.title}</td>
                                <td className="px-6 py-4">{sermon.speaker}</td>
                                <td className="px-6 py-4">{sermon.date}</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button onClick={() => handleEdit(sermon)} className="font-semibold text-blue-600 hover:underline">Edit</button>
                                    <button onClick={() => handleDelete(sermon.title)} className="font-semibold text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageSermons;
