import { createContext, useContext, useState } from 'react';

const OnboardingContext = createContext(null);

const INITIAL_DATA = {
  firstName: '',
  birthdayDd: '',
  birthdayMm: '',
  birthdayYyyy: '',
  gender: null,
  photos: [null, null, null, null, null, null],
  city: null,
  interests: [],
  bio: '',
  occupation: '',
  prompt: '',
  promptAnswer: '',
  isComplete: false,
};

export function OnboardingProvider({ children }) {
  const [data, setData] = useState(INITIAL_DATA);

  function update(fields) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  function reset() {
    setData(INITIAL_DATA);
  }

  return (
    <OnboardingContext.Provider value={{ data, update, reset }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  return useContext(OnboardingContext);
}

export default OnboardingContext;
