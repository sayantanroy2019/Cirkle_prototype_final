import GroupCard from './GroupCard';

const GROUPS = [
  {
    id: 1,
    ownerImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    ownerAlt: 'Young man smiling outdoors',
    eventName: 'Sunset Rooftop Party',
    introText: 'Hey, I am going to Sunset Rooftop Party',
    boys: 2,
    girls: 3,
    date: '26th March, Sunday',
  },
  {
    id: 2,
    ownerImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80',
    ownerAlt: 'Young woman at a concert',
    eventName: 'Jazz Night Downtown',
    introText: 'Hey, I am going to Jazz Night Downtown',
    boys: 1,
    girls: 4,
    date: '28th March, Friday',
  },
  {
    id: 3,
    ownerImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    ownerAlt: 'Young man at the beach',
    eventName: 'Beach Yoga Fest',
    introText: 'Hey, I am going to Beach Yoga Fest',
    boys: 3,
    girls: 2,
    date: '30th March, Sunday',
  },
  {
    id: 4,
    ownerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    ownerAlt: 'Young woman at a food market',
    eventName: 'Street Food Festival',
    introText: 'Hey, I am going to Street Food Festival',
    boys: 2,
    girls: 2,
    date: '29th March, Saturday',
  },
  {
    id: 5,
    ownerImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80',
    ownerAlt: 'Young woman at a techno event',
    eventName: 'Techno Warehouse',
    introText: 'Hey, I am going to Techno Warehouse',
    boys: 3,
    girls: 3,
    date: '25th April, Friday',
  },
  {
    id: 6,
    ownerImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
    ownerAlt: 'Young man hiking in forest',
    eventName: 'Hiking Trail Meetup',
    introText: 'Hey, I am going to Hiking Trail Meetup',
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
