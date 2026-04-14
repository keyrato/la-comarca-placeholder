import { MapPin, Clock, Mail, Phone, Briefcase } from "lucide-react";
import { LINKS, HOURS } from "@/lib/constants";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <img src={logo} alt="La Comarca Gastro Park" className="h-12 w-auto rounded mb-3" />
          <p className="text-muted-foreground text-sm font-body mb-4">
            Gastro Park · Centro gastronómico en Guápiles, Limón, Costa Rica.
          </p>
          <div className="flex items-center gap-3">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href={LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
            <a href={LINKS.waze} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Waze">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.54 6.63A8.99 8.99 0 0012.07 2C6.73 2 2.4 6.15 2.04 11.42a3.68 3.68 0 00-1.96 3.22 3.72 3.72 0 003.72 3.72c.2 0 .4-.02.59-.05A9.06 9.06 0 0012.07 22a8.93 8.93 0 005.9-2.2 3.69 3.69 0 004.95-1.72 3.72 3.72 0 00-2.38-5.45zM8.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.8 3.27A5.77 5.77 0 0112 17.5a5.77 5.77 0 01-5.3-2.23.75.75 0 011.18-.92A4.28 4.28 0 0012 16a4.28 4.28 0 004.12-1.65.75.75 0 011.18.92z"/></svg>
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-muted-foreground text-sm font-body">100 m norte y 75 m oeste del Servicentro JSM, Guápiles. Frente al parqueo de la subasta de la Expo Pococí.</span>
          </div>
          <a href={LINKS.phoneTel} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4 shrink-0" />
            <span className="text-sm font-body">{LINKS.phone}</span>
          </a>
          <a href={`mailto:${LINKS.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4 shrink-0" />
            <span className="text-sm font-body">{LINKS.email}</span>
          </a>
        </div>

        {/* Hours */}
        <div className="space-y-3">
          <h4 className="font-heading text-sm font-semibold text-foreground mb-2">Horarios</h4>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <div className="text-muted-foreground text-sm font-body">
              <p className="font-medium text-secondary-foreground">{HOURS.bar.label}</p>
              <p>{HOURS.bar.schedule}: {HOURS.bar.time}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <div className="text-muted-foreground text-sm font-body">
              <p className="font-medium text-secondary-foreground">{HOURS.food.label}</p>
              <p>{HOURS.food.schedule}: {HOURS.food.time}</p>
              <p className="text-accent">{HOURS.food.closed}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()} La Comarca Gastro Park. Todos los derechos reservados.
        </p>
        <a
          href={LINKS.workWithUs}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-xs transition-colors"
        >
          <Briefcase className="w-3 h-3" />
          Trabajá con nosotros
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
