import AnimateIn from "./AnimateIn";

export default function Statement() {
  return (
    <section id="statement" className="section-pad bg-white">
      <div className="container-content">
        <AnimateIn>
          <div className="w-16 h-px bg-green mb-12" />
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 leading-[1.15] max-w-4xl">
            Over 20 years fitting carpets and vinyl across London and the South East.
            Always Neil, never a&nbsp;faceless&nbsp;crew.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.25} className="mt-10 flex items-center gap-6">
          <span className="text-green text-sm font-medium tracking-[0.2em] uppercase">Your Local Flooring Specialist</span>
          <div className="flex-1 h-px bg-gray-200 max-w-[120px]" />
        </AnimateIn>
      </div>
    </section>
  );
}
