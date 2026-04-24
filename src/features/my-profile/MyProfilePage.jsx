import { useOnboarding } from '../onboarding/context/OnboardingContext';
import MyProfileTopBar from './MyProfileTopBar';
import MyProfileHero from './MyProfileHero';
import MyProfileAbout from './MyProfileAbout';
import MyProfileInterests from './MyProfileInterests';
import MyProfilePhotoGrid from './MyProfilePhotoGrid';
import MyProfileEmpty from './MyProfileEmpty';

export function MyProfilePage({ onBack, onEdit, onCreate }) {
  const { data } = useOnboarding();
  const {
    firstName, birthdayYyyy, gender, photos, city,
    interests, bio, occupation, prompt, promptAnswer, isComplete,
  } = data;

  const hasAnyData = firstName || photos.some(Boolean) || bio || interests.length > 0;

  if (!isComplete && !hasAnyData) {
    return (
      <main className="min-h-screen bg-cirkle-black text-white font-body flex flex-col">
        <MyProfileTopBar onBack={onBack} onEdit={onCreate} />
        <div className="pt-12 flex-1 flex flex-col">
          <MyProfileEmpty onCreate={onCreate} />
        </div>
      </main>
    );
  }

  const age = birthdayYyyy ? new Date().getFullYear() - parseInt(birthdayYyyy) : null;
  const mainPhoto = photos.find(Boolean);

  return (
    <main className="min-h-screen bg-cirkle-black text-white font-body pb-12">

      <MyProfileTopBar onBack={onBack} onEdit={onEdit} />

      <div className="pt-12">

        <MyProfileHero
          firstName={firstName}
          age={age}
          city={city}
          occupation={occupation}
          mainPhoto={mainPhoto}
        />

        {gender && (
          <div className="px-4 md:max-w-[560px] md:mx-auto md:px-0">
            <span className="inline-flex items-center h-7 px-3 rounded-full bg-cirkle-chip font-body text-[11px] font-bold uppercase tracking-wide text-cirkle-text-light">
              {gender}
            </span>
          </div>
        )}

        <MyProfileAbout bio={bio} prompt={prompt} promptAnswer={promptAnswer} />

        <MyProfileInterests interests={interests} />

        <MyProfilePhotoGrid photos={photos} />

      </div>

    </main>
  );
}

export default MyProfilePage;
