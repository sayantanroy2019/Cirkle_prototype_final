import GroupCard from './GroupCard';

const GROUPS = [
  {
    id: 1,
    ownerImage: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=400&q=80',
    ownerAlt: 'Arjun smiling outdoors',
    eventName: 'Bandra Rooftop Soirée',
    introText: 'Hey, I am going to Bandra Rooftop Soirée',
    boys: 2,
    girls: 3,
    date: '26th March, Sunday',
  },
  {
    id: 2,
    ownerImage: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=400&q=80',
    ownerAlt: 'Ananya at a concert',
    eventName: 'Hauz Khas Jazz Night',
    introText: 'Hey, I am going to Hauz Khas Jazz Night',
    boys: 1,
    girls: 4,
    date: '28th March, Friday',
  },
  {
    id: 3,
    ownerImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    ownerAlt: 'Rohan at the beach',
    eventName: 'Goa Beach Yoga Fest',
    introText: 'Hey, I am going to Goa Beach Yoga Fest',
    boys: 3,
    girls: 2,
    date: '30th March, Sunday',
  },
  {
    id: 4,
    ownerImage: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=400&q=80',
    ownerAlt: 'Priya at a food market',
    eventName: 'Chandni Chowk Food Walk',
    introText: 'Hey, I am going to Chandni Chowk Food Walk',
    boys: 2,
    girls: 2,
    date: '29th March, Saturday',
  },
  {
    id: 6,
    ownerImage: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80',
    ownerAlt: 'Kabir hiking in forest',
    eventName: 'Sahyadri Trek Meetup',
    introText: 'Hey, I am going to Sahyadri Trek Meetup',
    boys: 4,
    girls: 2,
    date: '27th April, Sunday',
  },
];

export function GroupsGrid({ onGroupClick }) {
  return (
    <section className="bg-cirkle-black px-4 pt-5 pb-6">
      <div className="grid grid-cols-2 gap-x-3 gap-y-3.5 md:grid-cols-3 lg:grid-cols-4">
        {GROUPS.map(group => (
          <GroupCard key={group.id} group={group} onClick={() => onGroupClick?.(group)} />
        ))}
      </div>
    </section>
  );
}

export default GroupsGrid;
