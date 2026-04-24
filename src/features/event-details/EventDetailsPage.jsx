import EventDetailHeader from './EventDetailHeader';
import EventHeroImage from './EventHeroImage';
import EventInfoBlock from './EventInfoBlock';
import EventAbout from './EventAbout';
import EventLineup from './EventLineup';
import EventVenue from './EventVenue';
import EventWhosGoing from './EventWhosGoing';
import EventFindYourTribe from './EventFindYourTribe';
import BottomNav from '../home/BottomNav/BottomNav';

const EVENT = {
  title: 'Sunset Rooftop Party',
  location: 'Skyline Terrace, Downtown',
  date: 'Sat, Apr 12',
  time: '8:00 PM',
  price: 'Free',
  isLive: true,
  image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
  about: `Join us for an unforgettable evening on the city's most iconic rooftop. Live DJ sets, craft cocktails, stunning sunset views, and a vibrant crowd of like-minded people. Whether you're new in town or looking for your next adventure — this is where connections happen. Join us or unintegrated ted linking an experience that more while remasing oorips, live proete don't down for attending people.`,
  attendees: {
    count: 24,
    overflow: 19,
    visible: [
      { id: 1, name: 'Alex', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80' },
      { id: 2, name: 'Maya', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&q=80' },
      { id: 3, name: 'Sam',  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&q=80' },
      { id: 4, name: 'Tina', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=60&q=80' },
    ],
  },
  venue: {
    name: 'Skyline Terrace',
    address: 'Skyline Terrace, Downtown, #262626',
  },
  groups: [
    {
      id: 1,
      name: 'Group Avabs',
      members: 2,
      avatars: [
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&q=80',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&q=80',
      ],
    },
    {
      id: 2,
      name: 'Group Riders',
      members: 2,
      avatars: [
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=40&q=80',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=40&q=80',
      ],
    },
  ],
  lineup: [
    { id: 1, name: 'DJ Nova',   image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&q=80' },
    { id: 2, name: 'Sara K',    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=80' },
    { id: 3, name: 'The Beats', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80' },
    { id: 4, name: 'TBA',       image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80' },
  ],
};

export function EventDetailsPage({ onBack }) {
  return (
    <div className="bg-cirkle-black min-h-screen pb-[60px]">
      <EventDetailHeader onBack={onBack} />
      <main className="pt-14">
        <EventHeroImage image={EVENT.image} title={EVENT.title} />
        <EventInfoBlock
          title={EVENT.title}
          location={EVENT.location}
          date={EVENT.date}
          time={EVENT.time}
          price={EVENT.price}
          isLive={EVENT.isLive}
        />
        <EventAbout about={EVENT.about} />
        <EventLineup lineup={EVENT.lineup} />
        <EventVenue venue={EVENT.venue} />
        <EventWhosGoing attendees={EVENT.attendees} />
        <EventFindYourTribe groups={EVENT.groups} />
      </main>
      <BottomNav initialActive="events" />
    </div>
  );
}

export default EventDetailsPage;
