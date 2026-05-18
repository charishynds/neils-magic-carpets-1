import { Instagram } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-green text-white">
      <div className="container-content py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          <div>
            <img
              src="/neilsmagiccarpets-logo-white-transparent.png"
              alt="Neil's Magic Carpets"
              className="h-12 w-auto mb-4"
            />
            <p className="font-display text-xl text-white mb-3">Neil's Magic Carpets</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Carpet and vinyl flooring specialists serving London and the South East for over 20 years.
            </p>
          </div>

          <div>
            <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-5">Navigation</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scroll(link.href)}
                  className="text-sm text-white/70 hover:text-white transition-colors text-left w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-5">Contact</p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="tel:+447984147403" className="hover:text-white transition-colors">+44 (0) 7984 147403</a>
              <a href="mailto:neil@neilsmagiccarpets.co.uk" className="hover:text-white transition-colors">neil@neilsmagiccarpets.co.uk</a>
              <a href="https://www.instagram.com/neilsmagiccarpets/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><Instagram size={14} />@neilsmagiccarpets</a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/35">
          <p>© {year} Neil's Magic Carpets. All rights reserved.</p>
          <p>Neil's Magic Carpets Ltd. Registered in England &amp; Wales.</p>
        </div>
      </div>
    </footer>
  );
}
