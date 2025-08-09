import React from 'react';
import { User } from '../../../types.ts';
import { eventsData } from '../../../data/events.ts';
import { ClockIcon, MapPinIcon, EventsIcon } from '../../icons.tsx';

interface MyEventsViewProps {
    user: User;
    onUpdateUser: (updatedUserData: Partial<User>) => void;
}

const MyEventsView: React.FC<MyEventsViewProps> = ({ user, onUpdateUser }) => {
    
    const signedUpEvents = eventsData.filter(event => user.eventSignups.includes(event.id))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const handleCancelRsvp = (eventId: string) => {
        const updatedSignups = user.eventSignups.filter(id => id !== eventId);
        onUpdateUser({ eventSignups: updatedSignups });
    };
    
    // Function to generate .ics file content
    const generateIcsFile = (event) => {
        const startDate = new Date(event.date).toISOString().replace(/-|:|\.\d+/g, '');
        const endDate = new Date(new Date(event.date).setHours(new Date(event.date).getHours() + 2)).toISOString().replace(/-|:|\.\d+/g, ''); // Assume 2 hour duration
        const content = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            `UID:${event.id}@msmpc.org`,
            `DTSTAMP:${new Date().toISOString().replace(/-|:|\.\d+/g, '')}`,
            `DTSTART:${startDate}`,
            `DTEND:${endDate}`,
            `SUMMARY:${event.title}`,
            `DESCRIPTION:${event.description}`,
            `LOCATION:${event.location}`,
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\n');
        
        const blob = new Blob([content], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${event.title}.ics`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-serif text-church-blue font-bold mb-6">My Registered Events</h2>

            {signedUpEvents.length > 0 ? (
                <div className="space-y-6">
                    {signedUpEvents.map(event => (
                         <div key={event.id} className="bg-gray-50 p-4 rounded-lg flex flex-col md:flex-row items-start gap-4">
                            <img src={event.imageUrl} alt={event.title} className="h-24 w-full md:w-32 rounded-md object-cover" />
                            <div className="flex-grow">
                                <h3 className="font-serif font-bold text-lg text-church-dark">{event.title}</h3>
                                <p className="text-sm text-slate-600 font-sans flex items-center mt-1">
                                    <ClockIcon className="h-4 w-4 mr-1.5" />
                                    {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {event.time}
                                </p>
                                <p className="text-sm text-slate-600 font-sans flex items-center">
                                    <MapPinIcon className="h-4 w-4 mr-1.5" />
                                    {event.location}
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2 self-start md:self-center flex-shrink-0">
                                <button onClick={() => generateIcsFile(event)} className="w-full text-sm bg-church-blue text-white font-sans font-semibold py-2 px-4 rounded-full hover:bg-church-blue-light transition-colors">Add to Calendar</button>
                                <button onClick={() => handleCancelRsvp(event.id)} className="w-full text-sm bg-gray-200 text-slate-700 font-sans font-semibold py-2 px-4 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors">Cancel RSVP</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <EventsIcon className="h-16 w-16 mx-auto text-gray-300" />
                    <h3 className="mt-4 text-xl font-serif font-semibold text-church-dark">No Upcoming Events</h3>
                    <p className="mt-2 text-slate-600 font-sans">You haven't signed up for any events yet. Check the Events page to see what's happening!</p>
                </div>
            )}
        </div>
    );
};

export default MyEventsView;
