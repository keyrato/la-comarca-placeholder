import { motion } from "framer-motion";
import { Star, Clock, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-food.jpg";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="La Comarca Gastro Park plato destacado" className="w-full h-full object-cover" width={1920} height={1080} />
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

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              <span className="text-foreground">La Comarca</span>
              <br />
              <span className="text-gradient-gold">Gastro Park</span>
            </h1>

            <p className="text-secondary-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-body">
              Donde la gastronomía caribeña se encuentra con la innovación. 
              Una experiencia culinaria única en el corazón de Guápiles, Limón.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-secondary-foreground font-body">4 p.m. – 10 p.m.</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-secondary-foreground font-body">Guápiles, Limón</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2">
                <span className="text-sm text-secondary-foreground font-body">₡5,000 – ₡10,000</span>
              </div>
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
