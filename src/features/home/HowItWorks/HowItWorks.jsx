import { Search, Users, MessageCircle, MapPin } from 'lucide-react';

const STEPS = [
  { Icon: Search,        label: 'Discover',       desc: 'Find events near you' },
  { Icon: Users,         label: 'Join a Tribe',   desc: 'Join communities' },
  { Icon: MessageCircle, label: 'Connect & Chat', desc: 'Chat before meeting' },
  { Icon: MapPin,        label: 'Meet IRL',       desc: 'Meet in person' },
];

export function HowItWorks() {
  return (
    <section className="py-10 px-2 md:px-3 bg-cirkle-black">
      <div className="max-w-[1200px] mx-auto">

        <p className="font-body text-[15px] md:text-[18px] font-bold text-cirkle-yellow uppercase tracking-[0.15em] text-center mb-7">
          HOW IT WORKS
        </p>

        <div className="flex flex-row justify-between items-start gap-0 relative">
          {STEPS.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative">

              {/* Dashed connector line to next step */}
              {i < STEPS.length - 1 && (
                <div className="absolute top-[32px] md:top-[40px] left-[calc(50%+34px)] md:left-[calc(50%+42px)] right-0 w-[calc(100%-68px)] md:w-[calc(100%-84px)] h-0 border-t-2 border-dashed border-cirkle-border z-0" />
              )}

              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0 bg-cirkle-black z-10 relative">
                <step.Icon size={28} strokeWidth={1.8} className="text-white md:hidden" />
                <step.Icon size={34} strokeWidth={1.8} className="text-white hidden md:block" />
              </div>

              <span className="mt-3 font-body text-[13px] md:text-[15px] font-bold text-white block leading-tight">
                {step.label}
              </span>

              <span className="mt-1 font-body text-[11px] md:text-[13px] font-normal text-cirkle-text-muted block leading-snug">
                {step.desc}
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
