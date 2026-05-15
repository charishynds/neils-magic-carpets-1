import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Work", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? "bg-white/95 backdrop-blur-sm border-green/10" : "bg-transparent border-transparent"
        }`}
      >
        <div className="container-content flex items-center justify-between h-16 lg:h-20">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center">
            <img
              src={scrolled ? "/neilsmagiccarpets-logo-black-transparent.png" : "/neilsmagiccarpets-logo-white-transparent.png"}
              alt="Neil's Magic Carpets"
              className="h-9 lg:h-11 w-auto transition-opacity duration-300"
            />
          </a>

          <nav className="hidden nav:flex items-center gap-10">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-700 hover:text-green"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className={`text-sm font-medium px-5 py-2.5 border transition-colors duration-200 ${
                scrolled
                  ? "border-green text-green hover:bg-green hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-green"
              }`}
            >
              Get in Touch
            </button>
          </nav>

          <button
            className="nav:hidden p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} className={scrolled ? "text-green" : "text-white"} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-green flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <img src="/neilsmagiccarpets-logo-white-transparent.png" alt="Neil's Magic Carpets" className="h-9 w-auto" />
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={24} className="text-white" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white font-display text-4xl font-medium hover:text-rose transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.08 + 0.1 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-4 text-white border border-white/40 px-8 py-3 text-sm font-medium tracking-wide hover:bg-white hover:text-green transition-colors"
              >
                Get in Touch
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
