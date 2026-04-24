import JoinedGroupTopBar from './JoinedGroupTopBar';
import JoinedGroupOwnerHeader from './JoinedGroupOwnerHeader';
import JoinedGroupMembers from './JoinedGroupMembers';
import JoinedGroupChat from './JoinedGroupChat';
import ChatInputBar from './ChatInputBar';
import BottomNav from '../home/BottomNav/BottomNav';

const JOINED_GROUP = {
  name: "Alex's Group",
  owner: {
    name: 'Alex', age: 24,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    interests: ['Hiking', 'Music', 'Travel'],
    goingTo: 'Sunset Rooftop Party',
  },
  members: [
    { id: 1, name: 'Alex',  age: 24, isOwner: true,  interests: 'Hiking, Music, Travel',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
    { id: 2, name: 'Maya',  age: 26, isOwner: false, interests: 'Music, Foodie, Art',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80' },
    { id: 3, name: 'Sam',   age: 22, isOwner: false, interests: 'Hiking, Photography',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80' },
    { id: 4, name: 'Priya', age: 25, isOwner: false, interests: 'Yoga, Dance, Travel',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=80' },
    { id: 5, name: 'Rahul', age: 23, isOwner: false, interests: 'Tech, Gaming, Coffee',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  ],
  boys: 2, girls: 3,
  messages: [
    { id: 1, senderName: 'Alex',  time: '8:42 PM',
      text: "Can't wait for Saturday! 🎉",
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80' },
    { id: 2, senderName: 'Maya',  time: '8:43 PM',
      text: "Same! What's the dress code?",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80' },
    { id: 3, senderName: 'Priya', time: '8:43 PM',
      text: 'Smart casual I think 👗',
      avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&q=80' },
  ],
};

export function JoinedGroupPage({ onBack, onNavigate }) {
  return (
    <div className="bg-cirkle-black min-h-screen pb-[140px]">
      <JoinedGroupTopBar
        groupName={JOINED_GROUP.name}
        onBack={onBack}
      />
      <main className="pt-12">
        <JoinedGroupOwnerHeader owner={JOINED_GROUP.owner} />
        <JoinedGroupMembers
          members={JOINED_GROUP.members}
          boys={JOINED_GROUP.boys}
          girls={JOINED_GROUP.girls}
        />
        <JoinedGroupChat messages={JOINED_GROUP.messages} />
      </main>
      <ChatInputBar />
      <BottomNav initialActive="mygroups" onNavigate={onNavigate} />
    </div>
  );
}

export default JoinedGroupPage;
