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
  title: 'Bandra Rooftop Soirée',
  location: 'AER Lounge, Four Seasons, Mumbai',
  date: 'Sat, Apr 12',
  time: '8:00 PM',
  price: 'Free',
  isLive: true,
  image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
  about: `Join us for an unforgettable evening on Mumbai's most iconic rooftop. Live DJ sets, craft cocktails, stunning skyline views over Worli Sea Face, and a vibrant crowd of like-minded people. Whether you're new in town or looking for your next adventure — this is where connections happen.`,
  attendees: {
    count: 24,
    overflow: 19,
    visible: [
      { id: 1, name: 'Arjun',  image: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=60&q=80' },
      { id: 2, name: 'Ananya', image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=60&q=80' },
      { id: 3, name: 'Rohan',  image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=60&q=80' },
      { id: 4, name: 'Ishita', image: 'https://images.unsplash.com/photo-1619436277100-90a4d96f8efc?w=60&q=80' },
    ],
  },
  venue: {
    name: 'AER Lounge',
    address: 'AER, Four Seasons Hotel, Worli, Mumbai',
  },
  groups: [
    {
      id: 1,
      name: "Arjun's Group",
      members: 2,
      avatars: [
        'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=40&q=80',
        'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=40&q=80',
        'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=40&q=80',
      ],
    },
    {
      id: 2,
      name: "Kabir's Group",
      members: 2,
      avatars: [
        'https://images.unsplash.com/photo-1619436277100-90a4d96f8efc?w=40&q=80',
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=40&q=80',
      ],
    },
  ],
  lineup: [
    { id: 1, name: 'DJ Nucleya',     image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&q=80' },
    { id: 2, name: 'Sanaya K',       image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=100&q=80' },
    { id: 3, name: 'The Local Train',image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&q=80' },
    { id: 4, name: 'TBA',            image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=100&q=80' },
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
