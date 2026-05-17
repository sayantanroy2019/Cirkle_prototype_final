import { useState } from 'react';
import Navbar from './features/home/Navbar/Navbar';
import BottomNav from './features/home/BottomNav/BottomNav';
import Hero from './features/home/Hero/Hero';
import HowItWorks from './features/home/HowItWorks/HowItWorks';
import ExperiencesSection from './features/home/ExperiencesSection/ExperiencesSection';
import TribesSection from './features/home/TribesSection/TribesSection';
import SocialProofBand from './features/home/SocialProofBand/SocialProofBand';
import FinalCTA from './features/home/FinalCTA/FinalCTA';
import EventOrganisersCTA from './features/home/EventOrganisersCTA/EventOrganisersCTA';
import EventsSearchBar from './features/events/EventsSearchBar';
import CategoryFilter from './features/events/CategoryFilter';
import PopularEventsGrid from './features/events/PopularEventsGrid';
import EventDetailsPage from './features/event-details/EventDetailsPage';
import GroupsPage from './features/groups/GroupsPage';
import GroupDetailPage from './features/group-detail/GroupDetailPage';
import MyGroupsPage from './features/my-groups/MyGroupsPage';
import JoinedGroupPage from './features/joined-group/JoinedGroupPage';
import OnboardingRouter from './features/onboarding/OnboardingRouter';
import { OnboardingProvider } from './features/onboarding/context/OnboardingContext';
import MyProfilePage from './features/my-profile/MyProfilePage';

function AppInner() {
  const [page, setPage] = useState('home');
  const [onboardingReturn, setOnboardingReturn] = useState('home');

  function startOnboarding(returnTo = 'home') {
    setOnboardingReturn(returnTo);
    setPage('onboarding');
  }

  function handleNavigate(key) {
    if (key === 'profile') { setPage('profile'); return; }
    setPage(key);
  }

  if (page === 'event-detail') {
    return <EventDetailsPage onBack={() => setPage('events')} />;
  }

  if (page === 'groups') {
    return <GroupsPage onNavigate={handleNavigate} />;
  }

  if (page === 'group-detail') {
    return <GroupDetailPage onBack={() => setPage('groups')} />;
  }

  if (page === 'mygroups') {
    return <MyGroupsPage onNavigate={handleNavigate} />;
  }

  if (page === 'joined-group') {
    return <JoinedGroupPage onBack={() => setPage('mygroups')} onNavigate={handleNavigate} />;
  }

  if (page === 'onboarding') {
    return (
      <OnboardingRouter
        onFinish={() => setPage(onboardingReturn)}
        onExit={() => setPage(onboardingReturn)}
      />
    );
  }

  if (page === 'profile') {
    return (
      <MyProfilePage
        onBack={() => setPage('home')}
        onEdit={() => startOnboarding('profile')}
        onCreate={() => startOnboarding('profile')}
      />
    );
  }

  return (
    <div className="bg-cirkle-black min-h-screen pb-[60px]">
      <Navbar initialActive={page} onNavigate={handleNavigate} />
      <main className="pt-14 md:pt-16">
        {page === 'home' && (
          <>
            <Hero onCreateProfile={() => startOnboarding('home')} />
            <HowItWorks />
            <ExperiencesSection />
            <TribesSection />
            <SocialProofBand />
            <FinalCTA onCreateProfile={() => startOnboarding('home')} />
            <EventOrganisersCTA />
          </>
        )}
        {page === 'events' && (
          <>
            <EventsSearchBar />
            <CategoryFilter />
            <PopularEventsGrid onEventClick={() => setPage('event-detail')} />
          </>
        )}
      </main>
      <BottomNav initialActive={page} onNavigate={handleNavigate} />
    </div>
  );
}

function App() {
  return (
    <OnboardingProvider>
      <AppInner />
    </OnboardingProvider>
  );
}

export default App;
