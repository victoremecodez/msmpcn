
import React, { useState, useMemo } from 'react';
import { Page } from '../types.ts';
import PageHeader from '../components/common/PageHeader.tsx';
import { ChurchEvent } from '../types.ts';
import { eventsData } from '../data/events.ts';
import { ClockIcon, MapPinIcon } from '../components/icons.tsx';

interface EventsPageProps {
  onNavigate: (page: Page) => void;
}

type Category = 'All' | 'Worship' | 'Community' | 'Outreach' | 'Youth';

const EventCard: React.FC<{ event: ChurchEvent }> = ({ event }) => {
    const eventDate = new Date(event.date);
    const month = eventDate.toLocaleString('default', { month: 'short' }).toUpperCase();
    const day = eventDate.getDate();

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1">
            <div className="md:w-1/3">
                 <img src={event.imageUrl} alt={event.title} className="w-full h-48 md:h-full object-cover" />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col">
                <div className="flex items-start">
                    <div className="flex-shrink-0 text-center mr-6">
                        <p className="text-3xl font-bold text-church-blue font-serif">{day}</p>
                        <p className="text-md font-semibold text-red-600">{month}</p>
                    </div>
                    <div>
                        <span className={`inline-block bg-church-gold/20 text-church-blue text-xs font-bold mr-2 px-2.5 py-1 rounded-full`}>{event.category}</span>
                        <h3 className="text-2xl font-serif text-church-dark font-bold mt-2">{event.title}</h3>
                    </div>
                </div>
                <div className="flex-grow my-4 text-slate-700 font-sans space-y-2 text-sm">
                   <p className="flex items-center"><ClockIcon className="h-4 w-4 mr-2 text-slate-500" />{event.time}</p>
                   <p className="flex items-center"><MapPinIcon className="h-4 w-4 mr-2 text-slate-500" />{event.location}</p>
                   <p>{event.description}</p>
                </div>
                <div className="mt-auto self-start">
                    <button className="bg-church-blue text-white font-sans font-semibold py-2 px-6 rounded-full hover:bg-church-blue-light transition-colors duration-300">
                        Learn More & RSVP
                    </button>
                </div>
            </div>
        </div>
    );
}

const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
    const [filter, setFilter] = useState<Category>('All');
    const categories: Category[] = ['All', 'Worship', 'Community', 'Outreach', 'Youth'];

    const filteredEvents = useMemo(() => {
        const upcomingEvents = eventsData
            .filter(event => new Date(event.date) >= new Date())
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        
        if (filter === 'All') {
            return upcomingEvents;
        }
        return upcomingEvents.filter(event => event.category === filter);
    }, [filter]);

  return (
    <div className="bg-white">
      <PageHeader
        title="Upcoming Events"
        subtitle="Join us for fellowship, growth, and service"
        imageUrl="https://picsum.photos/seed/eventspage/1920/1080"
      />
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Church Calendar</h2>
                 <div className="w-20 h-1 bg-church-gold mx-auto"></div>
            </div>

            <div className="flex justify-center flex-wrap gap-2 mb-10">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`py-2 px-5 font-sans font-semibold rounded-full text-sm transition-colors duration-300 ${
                            filter === cat 
                                ? 'bg-church-blue text-white shadow-md' 
                                : 'bg-white text-church-dark hover:bg-gray-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map(event => <EventCard key={event.id} event={event} />)
                ) : (
                    <div className="text-center py-16 bg-white rounded-xl shadow-md">
                        <p className="text-lg text-slate-600 font-sans">No upcoming events match this category.</p>
                        <p className="text-slate-500 font-sans mt-2">Check back soon for more events!</p>
                    </div>
                )}
            </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
