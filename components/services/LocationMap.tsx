
import React from 'react';
import { MapPinIcon } from '../icons.tsx';

const LocationMap: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Find Us</h2>
            <div className="w-20 h-1 bg-church-gold mx-auto mb-4"></div>
            <div className="flex justify-center items-center text-lg text-slate-700 font-sans">
                <MapPinIcon className="h-5 w-5 mr-2 text-church-gold" />
                <span>25 Cathedral Avenue, Port Harcourt, Rivers State, Nigeria</span>
            </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl h-96">
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
    </section>
  );
};

export default LocationMap;
