import Navbar from '../home/Navbar/Navbar';
import BottomNav from '../home/BottomNav/BottomNav';
import GroupsHero from './GroupsHero';
import GroupsSearchBar from './GroupsSearchBar';
import GroupsGrid from './GroupsGrid';

export function GroupsPage({ onNavigate }) {
  return (
    <div className="bg-cirkle-black min-h-screen pb-[60px]">
      <Navbar initialActive="groups" onNavigate={onNavigate} />
      <main className="pt-14 md:pt-16">
        <GroupsHero />
        <GroupsSearchBar />
        <GroupsGrid onGroupClick={() => onNavigate?.('group-detail')} />
      </main>
      <BottomNav initialActive="groups" onNavigate={onNavigate} />
    </div>
  );
}

export default GroupsPage;
