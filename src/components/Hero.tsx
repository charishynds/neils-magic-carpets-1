import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { useGoogleRating } from "@/hooks/use-google-rating";

export default function Hero() {
  const [logoDuration, setLogoDuration] = useState(1.6);
  const googleRating = useGoogleRating();
  const displayRating = googleRating?.rating ?? 5.0;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const update = (e: MediaQueryList | MediaQueryListEvent) => setLogoDuration(e.matches ? 2.2 : 1.6);
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const scrollDown = () => {
    const el = document.getElementById("statement");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-svh min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.JPG')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/55" />

      <div className="relative z-10 container-content w-full flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: logoDuration, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-8"
        >
          <img
            src="/neilsmagiccarpets-logo-white-transparent.png"
            alt="Neil's Magic Carpets"
            className="h-24 lg:h-32 w-auto"
          />
        </motion.div>

        <div className="overflow-hidden mb-3">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-rose text-xs font-medium tracking-[0.3em] uppercase"
          >
            Carpet &amp; Vinyl Specialists &nbsp;·<br className="sm:hidden" /> London &amp; South East
          </motion.p>
        </div>

        <div className="overflow-hidden pb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight max-w-2xl"
          >
            Fitted Right.<br />Every Time.
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="flex items-center gap-2 mt-2"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className={s <= Math.round(displayRating) ? "fill-rose text-rose" : "fill-white/30 text-white/30"} />
              ))}
            </div>
            <span className="text-white/75 text-xs font-medium tracking-wide">{displayRating.toFixed(1)} · Google Reviews</span>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
