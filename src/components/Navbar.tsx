import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { label: "Inicio", href: "#top" },
  { label: "Cocina", href: "#servicios" },
  { label: "Nosotros", href: "#por-que" },
  { label: "Galería", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="La Comarca Gastro Park" className="h-10 w-auto rounded" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#top" className="bg-gold-gradient text-primary-foreground font-body font-semibold py-2 px-5 rounded-lg text-sm hover:opacity-90 transition-opacity">
            Reservar
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-muted-foreground hover:text-primary font-body text-sm transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#top" onClick={() => setOpen(false)} className="block bg-gold-gradient text-primary-foreground font-body font-semibold py-2 px-5 rounded-lg text-sm text-center hover:opacity-90 transition-opacity">
            Reservar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
