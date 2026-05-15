import AnimateIn from "./AnimateIn";

const stats = [
  { value: "20+", label: "Years experience" },
  { value: "100%", label: "Word of mouth" },
  { value: "1", label: "Man — always Neil" },
];

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <AnimateIn direction="left" className="relative min-h-[400px] lg:min-h-0 order-2 lg:order-1">
          <img
            src="/portrait_neil.JPEG"
            alt="Neil — carpet and vinyl specialist"
            className="w-full h-full object-cover object-top"
            style={{ filter: "sepia(15%) contrast(1.05)" }}
          />
        </AnimateIn>

        <AnimateIn direction="right" className="bg-green order-1 lg:order-2 flex items-center">
          <div className="px-8 py-16 lg:px-16 lg:py-20 xl:px-20">
            <span className="text-white/50 text-xs font-medium tracking-[0.3em] uppercase block mb-6">
              The Man Behind the Work
            </span>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight mb-8">
              Meet Neil
            </h2>
            <div className="w-12 h-px bg-rose mb-8" />
            <p className="text-white/80 leading-relaxed text-lg mb-5">
              Neil has been fitting carpets and vinyl for over 20 years — not because it's just a job, but because he genuinely takes pride in every room he finishes.
            </p>
            <p className="text-white/80 leading-relaxed text-lg mb-10">
              Based in London, Neil works across the South East fitting for families, landlords, and small businesses. Every job gets the same care. He'll measure up himself, help you pick the right material, and won't leave until it's right.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <p className="font-display text-3xl lg:text-4xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/50 text-xs mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
