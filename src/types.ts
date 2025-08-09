

import { ReactNode } from 'react';

export interface UserProfile {
    phone?: string;
    gender?: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
    address?: string;
    ministry?: 'MCA' | 'WG' | 'PYPAN' | 'CGIT' | 'None';
    birthday?: string; // YYYY-MM-DD
    bio?: string;
    profilePictureUrl?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'member';
    profile: UserProfile;
    // Data for dashboard features
    bookmarkedSermons: string[]; // array of sermon titles
    eventSignups: string[]; // array of event IDs
    donations: Donation[];
    sermonHistory: { [sermonTitle: string]: number }; // title: progress in seconds
    prayerRequests: UserSubmission[];
    spiritualAchievements: string[]; // array of achievement keys
    inbox: Message[];
}

export interface Donation {
    id: string;
    date: string;
    amount: number;
    fund: 'Tithes & Offerings' | 'Missions' | 'Building Fund';
    type: 'One-time' | 'Recurring';
}

export interface Message {
    id: string;
    from: 'Admin' | 'Pastor John';
    subject: string;
    body: string;
    date: string;
    isRead: boolean;
}

export interface DownloadableResource {
    id: string;
    title: string;
    description: string;
    url: string; // path to the file
    category: 'Newsletter' | 'Study Guide' | 'Form';
}

export interface SpiritualAchievement {
    id: string;
    title: string;
    description: string;
    icon: React.FC<{className?: string}>;
}

export interface LoginRecord {
    id: string;
    date: string;
    ip: string;
    device: string;
}


export interface Service {
  name: string;
  day: string;
  time: string;
  icon: ReactNode;
  location?: string;
  description?: string;
}

export interface Ministry {
  name:string;
  acronym: string;
  description: string;
  icon: ReactNode;
}

export interface Sermon {
  title: string;
  speaker: string;
  date: string; // YYYY-MM-DD format for easy sorting
  tags: string[];
  videoUrl: string;
  audioUrl: string;
  series?: string; // Optional series name
  thumbnail: string;
  description: string;
}

export interface SermonSeries {
  title: string;
  description: string;
  thumbnail: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Leader {
    name: string;
    title: string;
    imageUrl: string;
    bio: string;
}

export interface FaithStatement {
    title: string;
    content: string;
}

export interface Belief {
    title: string;
    description: string;
    Icon: React.FC<{ className?: string }>;
}

export interface StrategicPillar {
    title: string;
    description: string;
    Icon: React.FC<{ className?: string }>;
}

export interface Comment {
    id: string;
    author: string;
    text: string;
    date: string;
}

export interface UserSubmission {
    id: string;
    type: 'testimonial' | 'prayer';
    author: string;
content: string;
    date: string;
    imageUrl?: string;
    videoUrl?: string;
    likes: number;
    comments: Comment[];
    isApproved: boolean;
    adminFeedback?: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string; // "YYYY-MM-DD"
  time: string; // "h:mm A"
  location: string;
  description: string;
  imageUrl: string;
  category: 'Worship' | 'Community' | 'Outreach' | 'Youth';
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Worship' | 'Community' | 'Outreach' | 'Events' | 'Cathedral';
}

export interface FaqItem {
    question: string;
    answer: string;
}

export type DashboardView =
  | 'welcome'
  | 'profile'
  | 'bookmarks'
  | 'events'
  | 'donations'
  | 'prayers'
  | 'announcements'
  | 'inbox'
  | 'downloads'
  | 'certificate'
  | 'growth'
  | 'security';
  
export type Page = 'home' | 'about' | 'sermons' | 'contact' | 'services' | 'beliefs' | 'mission' | 'login' | 'signup' | 'admin' | 'testimonials' | 'user-dashboard' | 'admin-login' | 'verification' | 'donation' | 'volunteer' | 'ministries' | 'events' | 'livestream' | 'gallery' | 'faith-journey' | 'faq' | 'profile-setup';