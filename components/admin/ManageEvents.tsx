import React, { useState } from 'react';
import { ChurchEvent } from '../../types.ts';
import { eventsData } from '../../data/events.ts';

const ManageEvents: React.FC = () => {
    const [events, setEvents] = useState<ChurchEvent[]>(eventsData);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingEvent, setEditingEvent] = useState<ChurchEvent | null>(null);
    const [formData, setFormData] = useState<Omit<ChurchEvent, 'id'>>({
        title: '', date: '', time: '', location: '', description: '', imageUrl: '', category: 'Community'
    });

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingEvent) {
            setEvents(events.map(ev => ev.id === editingEvent.id ? { ...formData, id: ev.id } : ev));
        } else {
            setEvents([{ ...formData, id: `event_${Date.now()}` }, ...events]);
        }
        resetForm();
    };

    const handleEdit = (event: ChurchEvent) => {
        setEditingEvent(event);
        setFormData(event);
        setIsFormVisible(true);
    };
    
    const handleDelete = (eventId: string, eventTitle: string) => {
        if (window.confirm(`Are you sure you want to delete the event "${eventTitle}"?`)) {
            setEvents(events.filter(ev => ev.id !== eventId));
        }
    };
    
    const resetForm = () => {
        setFormData({ title: '', date: '', time: '', location: '', description: '', imageUrl: '', category: 'Community' });
        setEditingEvent(null);
        setIsFormVisible(false);
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif text-church-blue font-bold">Manage Events</h2>
                <button onClick={() => { setIsFormVisible(!isFormVisible); setEditingEvent(null); }} className="bg-church-blue text-white font-sans font-semibold py-2 px-5 rounded-full hover:bg-church-blue-light transition-colors">
                    {isFormVisible ? 'Close Form' : 'Add New Event'}
                </button>
            </div>

            {isFormVisible && (
                 <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-serif font-bold text-church-dark mb-4">{editingEvent ? 'Edit Event' : 'Add New Event'}</h3>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                         <div className="grid md:grid-cols-2 gap-4">
                             <input name="title" value={formData.title} onChange={handleInputChange} placeholder="Event Title" className="w-full font-sans p-2 border rounded" required />
                             <input name="date" type="date" value={formData.date} onChange={handleInputChange} className="w-full font-sans p-2 border rounded" required/>
                             <input name="time" value={formData.time} onChange={handleInputChange} placeholder="Time (e.g., 7:00 PM)" className="w-full font-sans p-2 border rounded" required/>
                             <input name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" className="w-full font-sans p-2 border rounded" />
                             <select name="category" value={formData.category} onChange={handleInputChange} className="w-full font-sans p-2 border rounded bg-white">
                                <option>Community</option><option>Worship</option><option>Outreach</option><option>Youth</option>
                             </select>
                             <input name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} placeholder="Image URL" className="w-full font-sans p-2 border rounded" />
                         </div>
                         <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="w-full font-sans p-2 border rounded" rows={3}></textarea>
                         <div className="flex justify-end space-x-3">
                             <button type="button" onClick={resetForm} className="bg-gray-200 text-slate-700 font-sans font-semibold py-2 px-4 rounded-full">Cancel</button>
                             <button type="submit" className="bg-accent-success text-white font-sans font-semibold py-2 px-4 rounded-full">{editingEvent ? 'Update Event' : 'Save Event'}</button>
                         </div>
                    </form>
                </div>
            )}

             <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600 font-sans">
                    <thead className="text-xs text-slate-700 uppercase bg-gray-100">
                        <tr>
                            <th className="px-6 py-3">Event</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Location</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(event => (
                            <tr key={event.id} className="bg-white border-b">
                                <td className="px-6 py-4 font-semibold text-church-dark">{event.title}</td>
                                <td className="px-6 py-4">{event.date}</td>
                                <td className="px-6 py-4">{event.location}</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button onClick={() => handleEdit(event)} className="font-semibold text-blue-600 hover:underline">Edit</button>
                                    <button onClick={() => handleDelete(event.id, event.title)} className="font-semibold text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageEvents;
