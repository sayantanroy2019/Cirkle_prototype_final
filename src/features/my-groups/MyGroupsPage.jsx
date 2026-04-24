import Navbar from '../home/Navbar/Navbar';
import BottomNav from '../home/BottomNav/BottomNav';
import MyGroupsHero from './MyGroupsHero';
import MyGroupsTabSwitcher from './MyGroupsTabSwitcher';
import MyGroupsList from './MyGroupsList';
import MyGroupsEmptyHint from './MyGroupsEmptyHint';

const MY_GROUPS = [
  {
    id: 1,
    eventName: 'Sunset Rooftop Party',
    groupOwner: "Alex's Group",
    boys: 2, girls: 3,
    date: 'Sat, Apr 12 · 8 PM',
    status: 'Confirmed',
    avatars: [
      { id: 1, name: 'Alex',  src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80' },
      { id: 2, name: 'Maya',  src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80' },
      { id: 3, name: 'Sam',   src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80' },
      { id: 4, name: 'Priya', src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&q=80' },
    ],
  },
  {
    id: 2,
    eventName: 'Jazz Night Downtown',
    groupOwner: "Maya's Group",
    boys: 1, girls: 4,
    date: 'Fri, Apr 28 · 7 PM',
    status: 'Confirmed',
    avatars: [
      { id: 1, name: 'Maya',   src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80' },
      { id: 2, name: 'Priya',  src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&q=80' },
      { id: 3, name: 'Lisa',   src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80' },
      { id: 4, name: 'Sophie', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80' },
    ],
  },
  {
    id: 3,
    eventName: 'Beach Yoga Fest',
    groupOwner: "Sam's Group",
    boys: 3, girls: 2,
    date: 'Sun, Apr 30 · 7 AM',
    status: 'Confirmed',
    avatars: [
      { id: 1, name: 'Sam',   src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80' },
      { id: 2, name: 'Alex',  src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80' },
      { id: 3, name: 'Rahul', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80' },
      { id: 4, name: 'Priya', src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&q=80' },
      { id: 5, name: 'Dev',   src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&q=80' },
    ],
  },
];

export function MyGroupsPage({ onNavigate }) {
  return (
    <div className="bg-cirkle-black min-h-screen pb-[60px]">
      <Navbar initialActive="mygroups" onNavigate={onNavigate} />
      <main className="pt-14">
        <MyGroupsHero groupCount={MY_GROUPS.length} />
        <MyGroupsTabSwitcher />
        <MyGroupsList groups={MY_GROUPS} onGroupClick={() => onNavigate?.('joined-group')} />
        <MyGroupsEmptyHint />
      </main>
      <BottomNav initialActive="mygroups" onNavigate={onNavigate} />
    </div>
  );
}

export default MyGroupsPage;
