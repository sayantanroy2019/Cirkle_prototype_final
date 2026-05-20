import GroupDetailTopBar from './GroupDetailTopBar';
import GroupDetailHeader from './GroupDetailHeader';
import GroupMembersList from './GroupMembersList';
import GroupPayJoinBar from './GroupPayJoinBar';
import GroupEventDetails from './GroupEventDetails';
import BottomNav from '../home/BottomNav/BottomNav';

const GROUP = {
  ownerImage: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=200&q=80',
  ownerAlt: 'Arjun smiling outdoors',
  name: "Arjun's Group",
  introText: 'Hey, I am going to Bandra Rooftop Soirée',
  boys: 2,
  girls: 3,
  price: '₹499',
  event: {
    title: 'Bandra Rooftop Soirée',
    date: 'Sat, Apr 12',
    time: '8:00 PM',
    location: 'AER Lounge, Four Seasons, Mumbai',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=200&q=80',
    description: 'Live DJ sets, craft cocktails, stunning skyline views over Worli Sea Face, and a vibrant crowd of like-minded people.',
  },
  members: [
    { id: 1, name: 'Arjun',  age: 24, isOwner: true,  image: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=100&q=80' },
    { id: 2, name: 'Ananya', age: 26, isOwner: false, interests: 'Music, Foodie',        image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=100&q=80' },
    { id: 3, name: 'Rohan',  age: 22, isOwner: false, interests: 'Hiking, Photography',  image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&q=80' },
    { id: 4, name: 'Priya',  age: 25, isOwner: false, interests: 'Yoga, Dance',          image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=100&q=80' },
    { id: 5, name: 'Rahul',  age: 23, isOwner: false, interests: 'Tech, Gaming',         image: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=100&q=80' },
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
