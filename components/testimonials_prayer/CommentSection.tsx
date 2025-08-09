
import React, { useState } from 'react';
import { Comment } from '../../types.ts';

interface CommentSectionProps {
    comments: Comment[];
    onAddComment: (commentText: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, onAddComment }) => {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            onAddComment(newComment.trim());
            setNewComment('');
        }
    };

    return (
        <div className="p-6 bg-gray-50 border-t border-gray-200">
            {/* Comment List */}
            <div className="space-y-4 mb-6">
                {comments.length > 0 ? (
                    comments.map(comment => (
                        <div key={comment.id} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 bg-church-blue text-white rounded-full h-8 w-8 flex items-center justify-center text-xs font-bold">
                                {comment.author.charAt(0)}
                            </div>
                            <div className="flex-1 bg-gray-100 rounded-xl p-3">
                                <p className="font-sans font-semibold text-sm text-church-dark">{comment.author}</p>
                                <p className="font-sans text-sm text-slate-700">{comment.text}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-sm text-slate-500 font-sans">Be the first to comment.</p>
                )}
            </div>

            {/* Add Comment Form */}
            <form onSubmit={handleSubmit} className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-church-blue text-white rounded-full h-8 w-8 flex items-center justify-center text-xs font-bold">
                    U
                </div>
                <div className="flex-1">
                    <textarea
                        rows={2}
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                        placeholder="Write a comment..."
                        className="w-full font-sans p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold text-sm"
                    />
                    <button type="submit" className="mt-2 bg-church-blue text-white font-sans font-semibold py-1 px-4 rounded-full text-sm hover:bg-blue-800 transition-colors">
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentSection;
