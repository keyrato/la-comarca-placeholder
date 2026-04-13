import { motion } from "framer-motion";
import { Star, Clock, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-food.jpg";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="La Comarca Gastro Park plato destacado" className="w-full h-full object-cover object-[center_75%]" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? "fill-primary text-primary" : "fill-primary/50 text-primary/50"}`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground font-body text-sm">4.5 · 419 opiniones</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl font-bold leading-[0.95] mb-6 tracking-[0.04em]">
              <span className="text-foreground">LA COMARCA</span>
              <br />
              <span className="text-gradient-gold text-[0.6em] tracking-[0.15em]">GASTRO PARK</span>
            </h1>

            <p className="text-secondary-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-body">
              ✨ Un viaje de sabores te espera. Gastronomía, bar y ambiente 
              único en el corazón de Guápiles, Limón.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-secondary-foreground font-body">Bar: 12md – 12am</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-secondary-foreground font-body">Comidas: 11am – 10pm</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-secondary-foreground font-body">Guápiles, Limón</span>
              </div>
              <a
                href="https://waze.com/ul/hd1u6jt34e"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-secondary/50 hover:bg-secondary rounded-full px-4 py-2 transition-colors"
              >
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M20.54 6.63A8.99 8.99 0 0012.07 2C6.73 2 2.4 6.15 2.04 11.42a3.68 3.68 0 00-1.96 3.22 3.72 3.72 0 003.72 3.72c.2 0 .4-.02.59-.05A9.06 9.06 0 0012.07 22a8.93 8.93 0 005.9-2.2 3.69 3.69 0 004.95-1.72 3.72 3.72 0 00-2.38-5.45zM8.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.8 3.27A5.77 5.77 0 0112 17.5a5.77 5.77 0 01-5.3-2.23.75.75 0 011.18-.92A4.28 4.28 0 0012 16a4.28 4.28 0 004.12-1.65.75.75 0 011.18.92z"/></svg>
                <span className="text-sm text-secondary-foreground font-body">¡Buscanos en Waze!</span>
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
