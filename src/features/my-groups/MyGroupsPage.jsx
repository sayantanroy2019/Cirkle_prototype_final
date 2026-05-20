import Navbar from '../home/Navbar/Navbar';
import BottomNav from '../home/BottomNav/BottomNav';
import MyGroupsHero from './MyGroupsHero';
import MyGroupsTabSwitcher from './MyGroupsTabSwitcher';
import MyGroupsList from './MyGroupsList';
import MyGroupsEmptyHint from './MyGroupsEmptyHint';

const MY_GROUPS = [
  {
    id: 1,
    eventName: 'Bandra Rooftop Soirée',
    groupOwner: "Arjun's Group",
    boys: 2, girls: 3,
    date: 'Sat, Apr 12 · 8 PM',
    status: 'Confirmed',
    avatars: [
      { id: 1, name: 'Arjun',  src: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=80&q=80' },
      { id: 2, name: 'Ananya', src: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=80&q=80' },
      { id: 3, name: 'Rohan',  src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&q=80' },
      { id: 4, name: 'Priya',  src: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=80&q=80' },
    ],
  },
  {
    id: 2,
    eventName: 'Hauz Khas Jazz Night',
    groupOwner: "Ananya's Group",
    boys: 1, girls: 4,
    date: 'Fri, Apr 28 · 7 PM',
    status: 'Confirmed',
    avatars: [
      { id: 1, name: 'Ananya', src: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=80&q=80' },
      { id: 2, name: 'Priya',  src: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=80&q=80' },
      { id: 3, name: 'Riya',   src: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=80&q=80' },
      { id: 4, name: 'Aisha',  src: 'https://images.unsplash.com/photo-1581824283135-0666cf353f35?w=80&q=80' },
    ],
  },
  {
    id: 3,
    eventName: 'Goa Beach Yoga Fest',
    groupOwner: "Rohan's Group",
    boys: 3, girls: 2,
    date: 'Sun, Apr 30 · 7 AM',
    status: 'Confirmed',
    avatars: [
      { id: 1, name: 'Rohan', src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&q=80' },
      { id: 2, name: 'Arjun', src: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=80&q=80' },
      { id: 3, name: 'Rahul', src: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=80&q=80' },
      { id: 4, name: 'Priya', src: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=80&q=80' },
      { id: 5, name: 'Dev',   src: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=80&q=80' },
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
