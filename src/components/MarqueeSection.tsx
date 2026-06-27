const PHRASES = [
  "CONTACT FOR HIRE",
  "OPEN FOR HACKATHONS",
  "OPEN FOR COLLABORATION",
  "CONTACT FOR MORE"
];

export default function MarqueeSection() {
  return (
    <section className="w-full overflow-hidden bg-[var(--signal)] py-4 md:py-6 border-y border-[var(--surface-border)] flex">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {/* Group 1 */}
        <div className="flex items-center">
          {PHRASES.map((phrase, i) => (
            <span key={i} className="text-xl md:text-2xl font-bold tracking-tighter text-[#06120a] px-4 md:px-8 flex items-center gap-4 md:gap-8">
              {phrase}
              <span className="text-lg opacity-40">✦</span>
            </span>
          ))}
        </div>
        {/* Group 2 (Exact duplicate for seamless looping) */}
        <div className="flex items-center">
          {PHRASES.map((phrase, i) => (
            <span key={i} className="text-xl md:text-2xl font-bold tracking-tighter text-[#06120a] px-4 md:px-8 flex items-center gap-4 md:gap-8">
              {phrase}
              <span className="text-lg opacity-40">✦</span>
            </span>
          ))}
        </div>
        {/* Group 3 (Extra duplicate to ensure it fills ultra-wide screens seamlessly) */}
        <div className="flex items-center">
          {PHRASES.map((phrase, i) => (
            <span key={i} className="text-xl md:text-2xl font-bold tracking-tighter text-[#06120a] px-4 md:px-8 flex items-center gap-4 md:gap-8">
              {phrase}
              <span className="text-lg opacity-40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
