import GroupDetailTopBar from './GroupDetailTopBar';
import GroupDetailHeader from './GroupDetailHeader';
import GroupMembersList from './GroupMembersList';
import GroupPayJoinBar from './GroupPayJoinBar';
import GroupEventDetails from './GroupEventDetails';
import BottomNav from '../home/BottomNav/BottomNav';

const GROUP = {
  ownerImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  ownerAlt: 'Alex smiling outdoors',
  name: "Alex's Group",
  introText: 'Hey, I am going to Sunset Rooftop Party',
  boys: 2,
  girls: 3,
  price: '₹499',
  event: {
    title: 'Sunset Rooftop Party',
    date: 'Sat, Apr 12',
    time: '8:00 PM',
    location: 'Skyline Terrace, Downtown',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=200&q=80',
    description: 'Live DJ sets, craft cocktails, stunning sunset views, and a vibrant crowd of like-minded people.',
  },
  members: [
    { id: 1, name: 'Alex',  age: 24, isOwner: true,  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
    { id: 2, name: 'Maya',  age: 26, isOwner: false, interests: 'Music, Foodie',        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80' },
    { id: 3, name: 'Sam',   age: 22, isOwner: false, interests: 'Hiking, Photography',  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80' },
    { id: 4, name: 'Priya', age: 25, isOwner: false, interests: 'Yoga, Dance',          image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=80' },
    { id: 5, name: 'Rahul', age: 23, isOwner: false, interests: 'Tech, Gaming',         image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  ],
};

export function GroupDetailPage({ onBack }) {
  return (
    <div className="bg-cirkle-black min-h-screen pb-[60px]">
      <GroupDetailTopBar onBack={onBack} />
      <main className="pt-12">
        <GroupDetailHeader
          ownerImage={GROUP.ownerImage}
          ownerAlt={GROUP.ownerAlt}
          name={GROUP.name}
          introText={GROUP.introText}
        />
        <GroupMembersList members={GROUP.members} boys={GROUP.boys} girls={GROUP.girls} />
        <GroupPayJoinBar price={GROUP.price} />
        <GroupEventDetails event={GROUP.event} />
      </main>
      <BottomNav initialActive="groups" />
    </div>
  );
}

export default GroupDetailPage;
