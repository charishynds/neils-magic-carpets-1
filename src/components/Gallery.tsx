import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

const images = [
  "/gallery/312bb55c-28fa-47dc-976f-ead68bb356a2.jpg",
  "/gallery/0c4fabfe-b75f-44e9-bb0b-aa60c1586e6d.jpg",
  "/gallery/8156c83d-50d2-4f82-9e0a-f5c16ad43549.jpg",
  "/gallery/dc068195-7236-4afd-a1a7-f067990fa250.jpg",
  "/gallery/IMG_4933.JPG",
  "/gallery/a53461ce-d017-4ff1-939e-18493bfb0c5b.JPG",
  "/gallery/631eba94-bde0-43ce-a767-09e86ff682c3.JPG",
  "/gallery/cf864609-1355-41c8-b061-210481d7361e.JPG",
  "/gallery/d60cce18-c9f6-4c58-872f-4838aec9ea29.JPG",
  "/gallery/7968c0e5-9ab5-475b-8658-c43bef0b510d.JPG",
  "/gallery/67d91dac-7a96-47f8-924a-f74041bbbd91.JPG",
  "/gallery/28160a8f-ad59-476a-9189-433eabc4e1d0.JPG",
];

type Row = { src: string; flex: string; height: string }[];

const layout: Row[] = [
  [{ src: images[0], flex: "100%", height: "65vh" }],
  [{ src: images[1], flex: "58.33%", height: "48vh" }, { src: images[2], flex: "41.67%", height: "48vh" }],
  [{ src: images[3], flex: "41.67%", height: "52vh" }, { src: images[4], flex: "58.33%", height: "52vh" }],
  [{ src: images[5], flex: "100%", height: "55vh" }],
  [{ src: images[6], flex: "33.33%", height: "42vh" }, { src: images[7], flex: "33.33%", height: "42vh" }, { src: images[8], flex: "33.33%", height: "42vh" }],
  [{ src: images[9], flex: "50%", height: "45vh" }, { src: images[10], flex: "50%", height: "45vh" }],
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = (idx: number) => setLightbox(idx);
  const close = () => setLightbox(null);
  const prev = useCallback(() => setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length)), []);
  const next = useCallback(() => setLightbox((i) => (i === null ? null : (i + 1) % images.length)), []);

  return (
    <section id="gallery" className="section-pad bg-white">
      <div className="container-content mb-12">
        <AnimateIn>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-green text-xs font-medium tracking-[0.3em] uppercase block mb-4">Our Work</span>
              <h2 className="font-display text-4xl lg:text-5xl font-medium text-gray-900">
                Recent Installations
              </h2>
            </div>
          </div>
        </AnimateIn>
      </div>

      <div className="overflow-hidden">
        {layout.map((row, ri) => (
          <AnimateIn key={ri} delay={ri * 0.05}>
            <div className="flex">
              {row.map(({ src, flex, height }, ci) => {
                const imgIndex = images.indexOf(src);
                return (
                  <div
                    key={ci}
                    className="relative overflow-hidden group cursor-pointer"
                    style={{ flex: `0 0 ${flex}`, height }}
                    onClick={() => open(imgIndex)}
                  >
                    <img
                      src={src}
                      alt={`Neil's Magic Carpets installation ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                );
              })}
            </div>
          </AnimateIn>
        ))}
      </div>

      <div className="container-content mt-10">
        <AnimateIn>
          <a
            href="https://www.instagram.com/neilsmagiccarpets/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green text-sm font-medium border-b border-green/30 pb-0.5 hover:border-green transition-colors"
          >
            See more on Instagram →
          </a>
        </AnimateIn>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center"
            onClick={close}
          >
            <button onClick={close} className="absolute top-4 right-4 p-2 text-white/60 hover:text-white" aria-label="Close">
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              src={images[lightbox]}
              alt={`Installation ${lightbox + 1}`}
              className="max-h-[88vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
