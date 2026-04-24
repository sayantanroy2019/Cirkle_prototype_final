import { useState } from 'react';
import Screen1Name from './screens/Screen1Name';
import Screen2Gender from './screens/Screen2Gender';
import Screen3Photos from './screens/Screen3Photos';
import Screen4Location from './screens/Screen4Location';
import Screen5Interests from './screens/Screen5Interests';
import Screen6About from './screens/Screen6About';
import Screen7Success from './screens/Screen7Success';

export function OnboardingRouter({ onFinish, onExit }) {
  const [screen, setScreen] = useState(1);

  const next = () => setScreen((s) => s + 1);
  const back = (fallback) => screen === 1 ? fallback?.() : setScreen((s) => s - 1);
  const skip = () => setScreen((s) => Math.min(s + 1, 7));

  if (screen === 1) return <Screen1Name onBack={() => back(onExit)} onSkip={skip} onNext={next} />;
  if (screen === 2) return <Screen2Gender onBack={() => back()} onSkip={skip} onNext={next} />;
  if (screen === 3) return <Screen3Photos onBack={() => back()} onSkip={skip} onNext={next} />;
  if (screen === 4) return <Screen4Location onBack={() => back()} onSkip={skip} onNext={next} />;
  if (screen === 5) return <Screen5Interests onBack={() => back()} onSkip={skip} onNext={next} />;
  if (screen === 6) return <Screen6About onBack={() => back()} onSkip={skip} onNext={next} />;
  return <Screen7Success onFinish={onFinish} />;
}

export default OnboardingRouter;
