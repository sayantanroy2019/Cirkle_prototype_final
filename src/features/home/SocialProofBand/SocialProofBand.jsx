import { Zap, Compass, Handshake } from 'lucide-react';

const PROOF_ITEMS = [
  { Icon: Zap,       text: 'MEET LIKE-MINDED PEOPLE' },
  { Icon: Compass,   text: 'EXPLORE YOUR CITY' },
  { Icon: Handshake, text: 'NEVER GO ALONE AGAIN' },
];

export function SocialProofBand() {
  return (
    <section className="w-full bg-[#E8EC4A] py-7 px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-5 sm:gap-0">
        {PROOF_ITEMS.map((item) => (
          <div key={item.text} className="flex flex-row items-center justify-center gap-2.5 sm:flex-1">
            <item.Icon size={22} strokeWidth={2.5} className="text-cirkle-text-dark flex-shrink-0" />
            <span className="font-body text-[15px] sm:text-[13px] md:text-[16px] font-extrabold text-cirkle-text-dark uppercase tracking-[0.04em]">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SocialProofBand;
