import React, { useState } from 'react';
import { User, Message } from '../../../types.ts';
import { MailIcon } from '../../icons.tsx';

interface MessagesViewProps {
    user: User;
    onUpdateUser: (updatedUserData: Partial<User>) => void;
}

const MessagesView: React.FC<MessagesViewProps> = ({ user, onUpdateUser }) => {
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

    const handleSelectMessage = (message: Message) => {
        setSelectedMessage(message);
        if (!message.isRead) {
            const updatedInbox = user.inbox.map(m => m.id === message.id ? { ...m, isRead: true } : m);
            onUpdateUser({ inbox: updatedInbox });
        }
    };

    return (
        <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-xl font-serif text-church-blue font-bold mb-4">Inbox</h2>
                <div className="space-y-2">
                    {(user.inbox || []).map(message => (
                        <div
                            key={message.id}
                            onClick={() => handleSelectMessage(message)}
                            className={`p-3 rounded-lg cursor-pointer border-l-4 transition-colors ${
                                selectedMessage?.id === message.id 
                                ? 'bg-church-blue/10 border-church-blue' 
                                : `border-transparent hover:bg-gray-100 ${!message.isRead ? 'bg-church-light-gold/50' : ''}`
                            }`}
                        >
                            <div className="flex justify-between items-baseline">
                                <p className={`font-sans font-semibold text-church-dark ${!message.isRead ? 'font-bold' : ''}`}>
                                    {message.from}
                                </p>
                                {!message.isRead && (
                                    <span className="h-2 w-2 bg-church-gold rounded-full"></span>
                                )}
                            </div>
                            <p className={`font-sans text-sm text-slate-700 truncate ${!message.isRead ? 'font-semibold' : ''}`}>{message.subject}</p>
                            <p className="text-xs text-slate-500 font-sans mt-1">
                                {new Date(message.date).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-gray-200 min-h-[60vh]">
                {selectedMessage ? (
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-church-dark">{selectedMessage.subject}</h3>
                        <div className="flex justify-between items-center mt-2 pb-4 border-b border-gray-200">
                            <p className="font-sans text-sm">From: <span className="font-semibold">{selectedMessage.from}</span></p>
                            <p className="font-sans text-sm text-slate-500">{new Date(selectedMessage.date).toLocaleString()}</p>
                        </div>
                        <p className="font-sans text-slate-700 leading-relaxed mt-6 whitespace-pre-wrap">{selectedMessage.body}</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <MailIcon className="h-20 w-20 text-gray-300" />
                        <h3 className="mt-4 text-xl font-serif font-semibold text-church-dark">Select a message to read</h3>
                        <p className="mt-2 text-slate-600 font-sans">Your messages from church leadership will appear here.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessagesView;
