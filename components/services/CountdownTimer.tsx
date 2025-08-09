
import React, { useState, useEffect } from 'react';
import { serviceDetails } from '../../data/services.ts';

const findNextService = () => {
    const now = new Date();
    let closestService: { date: Date; name: string } | null = null;

    for (let i = 0; i < 7; i++) {
        const targetDate = new Date(now);
        targetDate.setDate(now.getDate() + i);
        const targetDayIndex = targetDate.getDay();

        const servicesOnDay = serviceDetails.filter(s => s.dayIndex === targetDayIndex);

        for (const service of servicesOnDay) {
            const [hours, minutes] = service.startTime.split(':').map(Number);
            const serviceDateTime = new Date(targetDate);
            serviceDateTime.setHours(hours, minutes, 0, 0);

            if (serviceDateTime > now) {
                if (!closestService || serviceDateTime < closestService.date) {
                    closestService = { date: serviceDateTime, name: service.name };
                }
            }
        }
        if (closestService) break; // Found the next service, no need to check further days
    }
    
    // If no service is found in the next 7 days, check the following week (handles case where all services for the week have passed)
    if (!closestService) {
        const sortedServices = [...serviceDetails].sort((a,b) => a.dayIndex - b.dayIndex);
        const nextServiceInSchedule = sortedServices[0];
        
        const nextServiceDate = new Date();
        const daysUntilNext = (nextServiceInSchedule.dayIndex + 7 - now.getDay()) % 7;
        nextServiceDate.setDate(now.getDate() + daysUntilNext + 7); // Add 7 to ensure it's next week
        const [hours, minutes] = nextServiceInSchedule.startTime.split(':').map(Number);
        nextServiceDate.setHours(hours, minutes, 0, 0);
        
        return { date: nextServiceDate, name: nextServiceInSchedule.name };
    }

    return closestService;
};


const CountdownTimer: React.FC = () => {
    const [nextService, setNextService] = useState(findNextService());
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            if (nextService) {
                const now = new Date();
                const difference = nextService.date.getTime() - now.getTime();
                
                if (difference > 0) {
                    setTimeLeft({
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                        minutes: Math.floor((difference / 1000 / 60) % 60),
                        seconds: Math.floor((difference / 1000) % 60),
                    });
                } else {
                    // Time for the service has passed, find the next one
                    setNextService(findNextService());
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [nextService]);

    if (!nextService) return null;

    const TimeBlock: React.FC<{ value: number, label: string }> = ({ value, label}) => (
        <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-church-blue font-serif" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base text-slate-600 font-sans uppercase tracking-wider">{label}</div>
        </div>
    );

    return (
        <section className="py-12 md:py-16 bg-church-light-gold">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-xl md:text-2xl font-sans text-church-blue mb-2">Next Service Starts In</h2>
                <p className="text-lg text-slate-700 font-semibold mb-6">{nextService.name}</p>
                <div className="flex justify-center items-center space-x-4 md:space-x-8">
                    <TimeBlock value={timeLeft.days} label="Days" />
                     <div className="text-4xl md:text-6xl font-serif text-church-blue/50 pb-6">:</div>
                    <TimeBlock value={timeLeft.hours} label="Hours" />
                    <div className="text-4xl md:text-6xl font-serif text-church-blue/50 pb-6">:</div>
                    <TimeBlock value={timeLeft.minutes} label="Minutes" />
                     <div className="text-4xl md:text-6xl font-serif text-church-blue/50 pb-6">:</div>
                    <TimeBlock value={timeLeft.seconds} label="Seconds" />
                </div>
            </div>
        </section>
    );
};

export default CountdownTimer;
