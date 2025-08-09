

import React from 'react';
import { Service } from '../types.ts';
import { ClockIcon, MapPinIcon } from './icons.tsx';

const serviceTimes: Service[] = [
  { name: 'Sunday Service', day: 'Sundays', time: '9:00 AM – 12:00 PM', icon: <ClockIcon className="h-8 w-8 text-church-gold" /> },
  { name: 'Mid-week Service', day: 'Wednesdays', time: '5:00 PM – 6:30 PM', icon: <ClockIcon className="h-8 w-8 text-church-gold" /> },
  { name: 'Bible Study', day: 'Thursdays', time: '5:00 PM – 6:30 PM', icon: <ClockIcon className="h-8 w-8 text-church-gold" /> },
];

const ServiceTimes: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-church-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif text-church-blue font-bold mb-2">Service Times & Location</h2>
            <p className="text-lg text-slate-700 mb-8 font-sans">Join us for worship and fellowship. All are welcome.</p>
            <div className="space-y-6">
              {serviceTimes.map((service) => (
                <div key={service.name} className="flex items-start p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
                  <div className="flex-shrink-0 mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-serif text-church-dark font-semibold">{service.name}</h3>
                    <p className="text-slate-600 font-sans">{service.day}, {service.time}</p>
                  </div>
                </div>
              ))}
            </div>
             <div className="flex items-start p-6 bg-white rounded-xl shadow-lg mt-6 transition-transform transform hover:scale-105">
                <div className="flex-shrink-0 mr-4"><MapPinIcon className="h-8 w-8 text-church-gold" /></div>
                <div>
                    <h3 className="text-xl font-serif text-church-dark font-semibold">Our Location</h3>
                    <p className="text-slate-600 font-sans">Port Harcourt, Nigeria</p>
                </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl h-96 lg:h-full w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254503.197940172!2d6.914917424667104!3d4.81920703892705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea39f71c463%3A0x425425263a437060!2sPort%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1672530182744!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Church Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;