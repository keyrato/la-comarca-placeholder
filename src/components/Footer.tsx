import { MapPin, Clock, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="La Comarca Gastro Park" className="h-12 w-auto rounded mb-3" />
            <p className="text-muted-foreground text-sm font-body">
              Gastro Park · Área de comidas en Guápiles, Limón, Costa Rica.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.instagram.com/la.comarcagastropark/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="https://waze.com/ul/hd1u6jt34e"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Waze"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.54 6.63A8.99 8.99 0 0012.07 2C6.73 2 2.4 6.15 2.04 11.42a3.68 3.68 0 00-1.96 3.22 3.72 3.72 0 003.72 3.72c.2 0 .4-.02.59-.05A9.06 9.06 0 0012.07 22a8.93 8.93 0 005.9-2.2 3.69 3.69 0 004.95-1.72 3.72 3.72 0 00-2.38-5.45zM8.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.8 3.27A5.77 5.77 0 0112 17.5a5.77 5.77 0 01-5.3-2.23.75.75 0 011.18-.92A4.28 4.28 0 0012 16a4.28 4.28 0 004.12-1.65.75.75 0 011.18.92z"/></svg>
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm font-body">100 Norte y 75 Oeste de Servicentro JSM, Guápiles. Frente al parqueo de la subasta de la Expo Pococí.</span>
            </div>
            <a href="https://waze.com/ul/hd1u6jt34e" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:text-gold-light transition-colors">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.54 6.63A8.99 8.99 0 0012.07 2C6.73 2 2.4 6.15 2.04 11.42a3.68 3.68 0 00-1.96 3.22 3.72 3.72 0 003.72 3.72c.2 0 .4-.02.59-.05A9.06 9.06 0 0012.07 22a8.93 8.93 0 005.9-2.2 3.69 3.69 0 004.95-1.72 3.72 3.72 0 00-2.38-5.45zM8.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.8 3.27A5.77 5.77 0 0112 17.5a5.77 5.77 0 01-5.3-2.23.75.75 0 011.18-.92A4.28 4.28 0 0012 16a4.28 4.28 0 004.12-1.65.75.75 0 011.18.92z"/></svg>
              <span className="text-sm font-body font-medium">¡Buscanos en Waze!</span>
            </a>
          </div>
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold text-foreground mb-2">Horarios</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div className="text-muted-foreground text-sm font-body">
                <p className="font-medium text-secondary-foreground">Bar 🍻</p>
                <p>Lunes a Domingo: 12:00md – 12:00am</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div className="text-muted-foreground text-sm font-body">
                <p className="font-medium text-secondary-foreground">Comidas 🍱🌮</p>
                <p>Martes a Domingo: 11:00am – 10:00pm</p>
                <p>Lunes: CERRADO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} La Comarca Gastro Park. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
