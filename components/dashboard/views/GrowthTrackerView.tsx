import React from 'react';
import { User, SpiritualAchievement } from '../../../types.ts';
import { achievementsData } from '../../../data/dashboard.ts';
import { GrowthIcon } from '../../icons.tsx';

interface GrowthTrackerViewProps {
    user: User;
}

const AchievementCard: React.FC<{ ach: SpiritualAchievement, isUnlocked: boolean }> = ({ ach, isUnlocked }) => (
    <div className={`p-4 rounded-lg flex items-center space-x-4 border ${isUnlocked ? 'bg-church-light-gold border-church-gold/30' : 'bg-gray-100 border-gray-200'}`}>
        <div className={`flex-shrink-0 h-14 w-14 rounded-full flex items-center justify-center ${isUnlocked ? 'bg-church-gold' : 'bg-gray-300'}`}>
            <ach.icon className={`h-8 w-8 ${isUnlocked ? 'text-white' : 'text-gray-500'}`} />
        </div>
        <div className="flex-grow">
            <h4 className={`font-serif font-bold ${isUnlocked ? 'text-church-dark' : 'text-slate-500'}`}>{ach.title}</h4>
            <p className={`font-sans text-sm ${isUnlocked ? 'text-slate-700' : 'text-slate-400'}`}>{ach.description}</p>
        </div>
        {isUnlocked && (
             <div className="text-xs font-bold uppercase text-green-600">Unlocked</div>
        )}
    </div>
);


const GrowthTrackerView: React.FC<GrowthTrackerViewProps> = ({ user }) => {
    
    const unlockedCount = user.spiritualAchievements.length;
    const totalAchievements = Object.keys(achievementsData).length;
    const progressPercent = (unlockedCount / totalAchievements) * 100;

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-serif text-church-blue font-bold mb-2">My Spiritual Growth Journey</h2>
            <p className="text-slate-600 font-sans mb-6">Track your engagement and celebrate milestones in your faith walk.</p>

            <div className="mb-8">
                <div className="flex justify-between items-center mb-1 font-sans text-sm">
                    <span className="font-semibold text-church-dark">Progress</span>
                    <span className="font-bold text-church-blue">{unlockedCount} / {totalAchievements} Unlocked</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                        className="bg-church-gold h-4 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
            </div>

            <h3 className="text-xl font-serif font-bold text-church-dark mb-4">Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
                {Object.values(achievementsData).map(ach => (
                    <AchievementCard
                        key={ach.id}
                        ach={ach}
                        isUnlocked={user.spiritualAchievements.includes(ach.id)}
                    />
                ))}
                {/* Placeholder for more achievements */}
                <div className="p-4 rounded-lg flex items-center space-x-4 border bg-gray-100 border-gray-200 opacity-50">
                    <div className="flex-shrink-0 h-14 w-14 rounded-full flex items-center justify-center bg-gray-300">
                        <GrowthIcon className="h-8 w-8 text-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-serif font-bold text-slate-500">More Coming Soon...</h4>
                        <p className="font-sans text-sm text-slate-400">New challenges and achievements are on the way!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowthTrackerView;
