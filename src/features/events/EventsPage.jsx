import Navbar from '../home/Navbar/Navbar';
import EventsSearchBar from './EventsSearchBar';
import CategoryFilter from './CategoryFilter';
import PopularEventsGrid from './PopularEventsGrid';

export function EventsPage({ onNavigate }) {
  return (
    <div className="bg-cirkle-black min-h-screen pb-[60px]">
      <Navbar initialActive="events" onNavigate={onNavigate} />
      <main className="pt-14 md:pt-16">
        <EventsSearchBar />
        <CategoryFilter />
        <PopularEventsGrid />
      </main>
    </div>
  );
}

export default EventsPage;
