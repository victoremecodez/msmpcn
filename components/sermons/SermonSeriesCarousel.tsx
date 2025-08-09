
import React from 'react';
import { SermonSeries } from '../../types.ts';
import { ArrowRightIcon } from '../icons.tsx';

interface SermonSeriesCarouselProps { 
    seriesData: SermonSeries[];
    onNavigateToSermons: (series: string) => void;
}

const SeriesCard: React.FC<{ series: SermonSeries; onClick: () => void; }> = ({ series, onClick }) => (
    <div onClick={onClick} className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col group cursor-pointer">
        <div className="overflow-hidden">
             <img src={series.thumbnail} alt={series.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-serif text-church-dark font-bold mb-2">{series.title}</h3>
            <p className="text-slate-700 font-sans text-sm flex-grow mb-4 leading-relaxed">{series.description}</p>
            <div className="mt-auto self-start flex items-center text-church-blue font-sans font-semibold group-hover:text-church-gold transition-colors duration-300">
                View Series <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </div>
    </div>
);


const SermonSeriesCarousel: React.FC<SermonSeriesCarouselProps> = ({ seriesData, onNavigateToSermons }) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Explore Sermon Series</h2>
                    <div className="w-20 h-1 bg-church-gold mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {seriesData.map((series) => (
                        <SeriesCard key={series.title} series={series} onClick={() => onNavigateToSermons(series.title)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SermonSeriesCarousel;