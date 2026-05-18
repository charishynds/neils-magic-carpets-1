import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimateIn from "./AnimateIn";

const testimonials = [
  { name: "Sarah M.", location: "Bromley", text: "Neil fitted our whole downstairs - hall, lounge and dining room. Absolutely immaculate finish. Would recommend without hesitation." },
  { name: "James T.", location: "Greenwich", text: "Called Neil on a recommendation from a neighbour. He transformed our bedroom in a day. Couldn't be happier with the result." },
  { name: "Karen L.", location: "Croydon", text: "Professional, tidy, and competitively priced. Neil's been doing our rentals for years. Always first class." },
  { name: "David R.", location: "Richmond", text: "Had the vinyl done in the kitchen and bathroom. Looks incredible - like a different house. Really top quality work." },
  { name: "Michelle B.", location: "Sutton", text: "Got Neil's number from a friend and I'm so glad I did. Turned up on time, job done perfectly, not a mark left behind." },
  { name: "Paul H.", location: "Guildford", text: "Commercial fit-out for our office. Completed on time and on budget. Staff love the new carpet. Professional from start to finish." },
  { name: "Angela S.", location: "Kingston", text: "We've used Neil three times now - stairs, landing, and two bedrooms. Every time, perfect. Won't use anyone else." },
  { name: "Tom W.", location: "Sevenoaks", text: "The vinyl Neil laid in our new kitchen looks absolutely stunning. Quality of work is second to none. Highly recommend." },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const delayRef = useRef(4000);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const d = delayRef.current;
    delayRef.current = 4000;
    timerRef.current = setTimeout(() => go(1), d);
    return () => clearTimeout(timerRef.current);
  }, [index, paused]);

  return (
    <section className="section-pad bg-green-muted">
      <div className="container-content">
        <AnimateIn className="mb-16">
          <span className="text-green text-xs font-medium tracking-[0.3em] uppercase block mb-4">Testimonials</span>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-gray-900">What customers say</h2>
        </AnimateIn>

        <div className="relative min-h-[260px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={{
                enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
                center: { opacity: 1, x: 0 },
                exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
              onPointerEnter={(e) => { if (e.pointerType === 'mouse') setPaused(true); }}
              onPointerLeave={(e) => { if (e.pointerType === 'mouse') { delayRef.current = 2000; setPaused(false); } }}
              onPointerDown={(e) => { if (e.pointerType === 'touch') setPaused(true); }}
              onPointerUp={(e) => { if (e.pointerType === 'touch') { delayRef.current = 2000; setPaused(false); } }}
              onPointerCancel={(e) => { if (e.pointerType === 'touch') { delayRef.current = 2000; setPaused(false); } }}
            >
              <div className="font-display text-[96px] leading-none text-green/20 select-none -mb-8">&ldquo;</div>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-800 leading-[1.3]">
                {testimonials[index].text}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="fill-rose text-rose" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {testimonials[index].name}
                  <span className="text-gray-400 font-normal"> · {testimonials[index].location}</span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-3 mt-12">
            <button
              onClick={() => go(-1)}
              className="p-2 border border-green/20 text-green hover:bg-green hover:text-white hover:border-green transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => go(1)}
              className="p-2 border border-green/20 text-green hover:bg-green hover:text-white hover:border-green transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
            <div className="flex gap-2 ml-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === index ? "bg-green w-4" : "bg-green/25"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-12 text-xs text-gray-400">
          Testimonials sourced from <a href="https://share.google/Ch84yuhwzrjyKq90N" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">Google Reviews</a> and <a href="https://nextdoor.co.uk/pages/neils-magic-carpets-london-england/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">Nextdoor Reviews</a>.
        </p>
      </div>
    </section>
  );
}
