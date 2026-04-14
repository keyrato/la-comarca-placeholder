import { motion } from "framer-motion";
import { Star, MapPin, Car, ArrowRight } from "lucide-react";
import { LINKS } from "@/lib/constants";
import heroImg from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Plato destacado en La Comarca Gastro Park" className="w-full h-full object-cover object-[center_60%]" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pb-16 pt-32 md:pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="font-body text-primary uppercase tracking-[0.25em] text-sm mb-6">Gastro Park · Guápiles, Limón</p>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
              Un viaje de{" "}
              <span className="text-gradient-gold italic">sabores</span>
              <br />
              te espera
            </h1>

            <p className="text-secondary-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-body">
              La triple combinación de la perfección: gastronomía, bar y ambiente único en el corazón de Guápiles.
            </p>

            {/* Microdatos */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground font-body mb-8">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" /> 4.5 <span className="hidden sm:inline">(419 opiniones)</span>
              </span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Guápiles, Limón</span>
              <span className="text-border">|</span>
              <span>₡5,000–₡10,000</span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1"><Car className="w-4 h-4" /> Amplio parqueo</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="#locales" className="bg-gold-gradient text-primary-foreground font-body font-semibold py-3 px-6 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity">
                Ver locales <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#menu" className="border border-primary/30 text-primary font-body font-medium py-3 px-6 rounded-full hover:bg-primary/5 transition-colors">
                Ver menú
              </a>
              <a href={LINKS.googleMaps} target="_blank" rel="noopener noreferrer" className="border border-border text-foreground font-body font-medium py-3 px-6 rounded-full hover:bg-secondary transition-colors flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Cómo llegar
              </a>
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="border border-[#25D366]/40 text-[#25D366] font-body font-medium py-3 px-6 rounded-full hover:bg-[#25D366]/10 transition-colors">
                WhatsApp
              </a>
            </div>

            {/* Waze */}
            <a
              href={LINKS.waze}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.54 6.63A8.99 8.99 0 0012.07 2C6.73 2 2.4 6.15 2.04 11.42a3.68 3.68 0 00-1.96 3.22 3.72 3.72 0 003.72 3.72c.2 0 .4-.02.59-.05A9.06 9.06 0 0012.07 22a8.93 8.93 0 005.9-2.2 3.69 3.69 0 004.95-1.72 3.72 3.72 0 00-2.38-5.45zM8.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.8 3.27A5.77 5.77 0 0112 17.5a5.77 5.77 0 01-5.3-2.23.75.75 0 011.18-.92A4.28 4.28 0 0012 16a4.28 4.28 0 004.12-1.65.75.75 0 011.18.92z"/></svg>
              ¡Buscanos en Waze!
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
