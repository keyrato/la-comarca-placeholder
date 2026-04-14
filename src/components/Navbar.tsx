import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { LINKS } from "@/lib/constants";
import logo from "@/assets/logo.jpg";

const links = [
  { label: "Inicio", href: "#top" },
  { label: "Locales", href: "#locales" },
  { label: "Menú", href: "#menu" },
  { label: "Eventos", href: "#eventos" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="La Comarca Gastro Park" className="h-10 w-auto rounded" />
          <span className="font-heading text-lg text-foreground hidden sm:block">La Comarca</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-muted-foreground hover:text-primary font-body text-sm tracking-wide transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#25D366] text-white font-body text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Menú">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border px-6 pb-6 pt-2 space-y-1">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-foreground hover:text-primary font-body text-base py-3 border-b border-border/30 transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-body font-medium py-3 px-6 rounded-full mt-4"
          >
            <MessageCircle className="w-4 h-4" />
            Escribinos por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
