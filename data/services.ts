
import { ChurchIcon, ClockIcon, BibleIcon } from '../components/icons.tsx';

export const serviceDetails = [
  {
    name: 'Sunday Worship Service',
    time: '9:00 AM – 12:00 PM',
    location: 'Main Sanctuary',
    description: 'Our main worship gathering featuring prayers, hymns, the Word, and fellowship.',
    dayIndex: 0, // Sunday
    startTime: '09:00',
    Icon: ChurchIcon,
  },
  {
    name: 'Mid-week Service',
    time: 'Wednesdays, 5:00 PM – 6:30 PM',
    location: 'Sanctuary Hall',
    description: 'A midweek time of reflection, teaching, and spiritual recharge.',
    dayIndex: 3, // Wednesday
    startTime: '17:00',
    Icon: ClockIcon,
  },
  {
    name: 'Bible Study',
    time: 'Thursdays, 5:00 PM – 6:30 PM',
    location: 'Teaching Room A / Online',
    description: 'In-depth study of the Scriptures, open discussions, and Q&A.',
    dayIndex: 4, // Thursday
    startTime: '17:00',
    Icon: BibleIcon,
  },
];
