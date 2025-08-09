import { User, Donation, Message, DownloadableResource, SpiritualAchievement, LoginRecord } from '../types.ts';
import { sermonsData } from './sermons.ts';
import { initialSubmissions } from './wall.ts';
import { BibleIcon, CommunityIcon, WorshipIcon, BadgeCheckIcon } from '../components/icons.tsx';

export const messagesData: Message[] = [
    {
        id: 'msg1',
        from: 'Pastor John',
        subject: 'Welcome to the Church Family!',
        body: "Hi there, \n\nOn behalf of the entire leadership team, I want to extend a warm welcome to you! We're so glad you've decided to join our community. We believe God has a great plan for you here. \n\nIf you have any questions or need anything at all, please don't hesitate to reach out. We look forward to seeing you at a service soon! \n\nBlessings, \nPastor John",
        date: '2024-07-25T10:00:00Z',
        isRead: false,
    },
    {
        id: 'msg2',
        from: 'Admin',
        subject: 'Upcoming Men\'s Fellowship Meeting',
        body: "A friendly reminder that the Men's Christian Association (MCA) will have its monthly meeting this Saturday at 8:00 AM in the main hall. We hope to see you there for a time of fellowship and encouragement.",
        date: '2024-07-24T14:30:00Z',
        isRead: true,
    },
];

export const initialDashboardData: Omit<User, 'id' | 'name' | 'email' | 'role' | 'profile'> = {
    bookmarkedSermons: [sermonsData[1].title, sermonsData[3].title],
    eventSignups: ['event2', 'event4'],
    donations: [
        { id: 'd1', date: '2024-07-15', amount: 100, fund: 'Tithes & Offerings', type: 'One-time' },
        { id: 'd2', date: '2024-07-01', amount: 50, fund: 'Missions', type: 'Recurring' },
        { id: 'd3', date: '2024-06-15', amount: 100, fund: 'Tithes & Offerings', type: 'One-time' },
    ],
    sermonHistory: {
        [sermonsData[0].title]: 120, // 2 minutes in
        [sermonsData[2].title]: 0, // Watched fully
        [sermonsData[4].title]: 600, // 10 minutes in
    },
    prayerRequests: initialSubmissions.filter(s => s.type === 'prayer').map(p => ({...p, adminFeedback: "Our pastoral team is praying for you."})),
    spiritualAchievements: ['first_donation', 'first_bookmark', 'first_event_signup'],
    inbox: messagesData,
};

export const announcementsData = [
    { id: 'an1', title: 'Annual Retreat Registration Now Open', content: 'Sign up for our annual church-wide retreat happening in September. Limited spots available!', date: '2024-07-23' },
    { id: 'an2', title: 'Volunteer Call for Community Outreach', content: 'We need volunteers for our upcoming outreach event on September 7th. Please see the Volunteer page to sign up.', date: '2024-07-22' },
    { id: 'an3', title: 'New Sermon Series Starting This Sunday', content: 'Join us this Sunday as we kick off a new sermon series titled "Living by Faith". You won\'t want to miss it!', date: '2024-07-21' },
];

export const resourcesData: DownloadableResource[] = [
    { id: 'res1', title: 'July 2024 Newsletter', description: 'Catch up on all that happened in July.', url: '#', category: 'Newsletter' },
    { id: 'res2', title: 'Faith Foundations Study Guide', description: 'A companion guide for the "Faith Foundations" sermon series.', url: '#', category: 'Study Guide' },
    { id: 'res3', title: 'Membership Information Form', description: 'Update your contact details for our church records.', url: '#', category: 'Form' },
    { id: 'res4', title: 'June 2024 Newsletter', description: 'A look back at the month of June.', url: '#', category: 'Newsletter' },
];

export const achievementsData: { [key: string]: SpiritualAchievement } = {
    'first_bookmark': { id: 'first_bookmark', title: 'Word Keeper', description: 'You bookmarked your first sermon.', icon: BibleIcon },
    'first_donation': { id: 'first_donation', title: 'Cheerful Giver', description: 'You made your first donation.', icon: CommunityIcon },
    'first_event_signup': { id: 'first_event_signup', title: 'Community Builder', description: 'You signed up for your first event.', icon: WorshipIcon },
    'profile_complete': { id: 'profile_complete', title: 'All Set Up!', description: 'You completed your member profile.', icon: BadgeCheckIcon },
};


export const loginHistoryData: LoginRecord[] = [
    { id: 'log1', date: '2024-07-26T10:00:00Z', ip: '192.168.1.1', device: 'Chrome on Windows' },
    { id: 'log2', date: '2024-07-25T18:30:00Z', ip: '10.0.0.5', device: 'Safari on iPhone' },
];