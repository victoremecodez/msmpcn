
import React, { useState } from 'react';
import { UserSubmission } from '../../types.ts';
import { HeartIcon, ChatBubbleIcon, ShareIcon, PrayingHandsIcon } from '../icons.tsx';
import CommentSection from './CommentSection.tsx';

interface WallPostProps {
    submission: UserSubmission;
    onLike: () => void;
    onAddComment: (commentText: string) => void;
}

const WallPost: React.FC<WallPostProps> = ({ submission, onLike, onAddComment }) => {
    const [commentsVisible, setCommentsVisible] = useState(false);
    const [showShareMessage, setShowShareMessage] = useState(false);
    
    const { type, author, content, date, imageUrl, videoUrl, likes, comments } = submission;

    const PostIcon = type === 'testimonial' 
        ? <ShareIcon className="h-6 w-6 text-green-500" /> 
        : <PrayingHandsIcon className="h-6 w-6 text-blue-500" />;

    const LikeButtonText = type === 'testimonial' ? 'Like' : 'Amen';

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    const handleShare = () => {
        const shareUrl = window.location.href; // In a real app, this would be a direct link to the post
        navigator.clipboard.writeText(shareUrl).then(() => {
            setShowShareMessage(true);
            setTimeout(() => setShowShareMessage(false), 2000);
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden relative">
            <div className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 mr-4 bg-church-light-gold p-3 rounded-full">
                           {PostIcon}
                        </div>
                        <div>
                            <p className="text-lg font-serif font-bold text-church-dark">{author}</p>
                            <p className="text-xs text-slate-500 font-sans">{formattedDate}</p>
                        </div>
                    </div>
                </div>

                <p className="my-5 text-slate-700 font-sans leading-relaxed whitespace-pre-wrap">{content}</p>

                {imageUrl && (
                    <div className="mt-4 rounded-lg overflow-hidden">
                        <img src={imageUrl} alt="Testimony visual" className="w-full h-auto object-cover"/>
                    </div>
                )}

                {videoUrl && (
                    <div className="mt-4 rounded-lg overflow-hidden aspect-video bg-black">
                        <iframe
                            width="100%"
                            height="100%"
                            src={videoUrl}
                            title="Testimony Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>

            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-between text-slate-600">
                     <div className="flex space-x-6">
                        <button onClick={onLike} className="flex items-center space-x-2 hover:text-church-blue transition-colors duration-200 group">
                           <HeartIcon className="h-6 w-6 group-hover:text-red-500" />
                           <span className="font-sans font-semibold text-sm">{LikeButtonText} ({likes})</span>
                        </button>
                        <button onClick={() => setCommentsVisible(!commentsVisible)} className="flex items-center space-x-2 hover:text-church-blue transition-colors duration-200 group">
                           <ChatBubbleIcon className="h-6 w-6" />
                           <span className="font-sans font-semibold text-sm">Comment ({comments.length})</span>
                        </button>
                        <button onClick={handleShare} className="flex items-center space-x-2 hover:text-church-blue transition-colors duration-200 group">
                           <ShareIcon className="h-6 w-6" />
                           <span className="font-sans font-semibold text-sm">Share</span>
                        </button>
                    </div>
                </div>
            </div>

            {commentsVisible && (
               <CommentSection 
                comments={comments}
                onAddComment={onAddComment}
               />
            )}

            {showShareMessage && (
                <div className="absolute top-4 right-4 bg-church-dark text-white text-xs font-sans py-1 px-3 rounded-md animate-fade-in-out">
                    Link copied!
                </div>
            )}
        </div>
    );
};

export default WallPost;