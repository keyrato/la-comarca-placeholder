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
              Gastro Park · Restaurante familiar en Guápiles, Limón, Costa Rica.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm font-body">66F9+RGR, Guápiles, Limón 70201</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm font-body">Mar – Dom: 4:00 p.m. – 10:00 p.m.</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm font-body">Contactanos por el formulario</span>
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
