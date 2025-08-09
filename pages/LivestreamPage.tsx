
import React from 'react';
import { Page } from '../types.ts';
import PageHeader from '../components/common/PageHeader.tsx';
import { ClockIcon, VideoCameraIcon } from '../components/icons.tsx';
import CountdownTimer from '../components/services/CountdownTimer.tsx';


interface LivestreamPageProps {
  onNavigate: (page: Page) => void;
}

const LivestreamPage: React.FC<LivestreamPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-church-gray">
      <PageHeader
        title="Livestream"
        subtitle="Worship with us, wherever you are"
        imageUrl="https://picsum.photos/seed/livestreampage/1920/1080"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl aspect-video bg-black mb-8">
                {/* Placeholder for livestream embed */}
                <div className="w-full h-full flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/stream-bg/1280/720')"}}>
                    <div className="text-center bg-black/50 p-8 rounded-lg backdrop-blur-sm text-white">
                        <VideoCameraIcon className="h-20 w-20 mx-auto text-gray-400" />
                        <p className="mt-4 text-2xl font-bold font-serif">Livestream is Currently Offline</p>
                        <p className="text-gray-300 font-sans">Our next service will begin shortly.</p>
                    </div>
                </div>
            </div>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
                 <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-serif font-bold text-church-dark mb-3">Give Online</h3>
                    <p className="text-slate-600 font-sans mb-4">Your generosity helps us continue our mission. Thank you for your support.</p>
                    <button onClick={() => onNavigate('donation')} className="bg-church-gold text-church-blue font-sans font-semibold py-2 px-8 rounded-full shadow-md hover:bg-yellow-300 transition-colors">
                        Give Now
                    </button>
                 </div>
                 <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-serif font-bold text-church-dark mb-3">Connect With Us</h3>
                    <p className="text-slate-600 font-sans mb-4">New here? We'd love to get to know you. Fill out our connection card.</p>
                    <button onClick={() => onNavigate('contact')} className="bg-church-blue text-white font-sans font-semibold py-2 px-8 rounded-full shadow-md hover:bg-church-blue-light transition-colors">
                        Get Connected
                    </button>
                 </div>
            </div>
        </div>
      </section>

      <CountdownTimer />
      
    </div>
  );
};

export default LivestreamPage;
