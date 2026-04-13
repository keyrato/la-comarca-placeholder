import { motion } from "framer-motion";
import { MapPin, ArrowRight, Briefcase } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-gradient opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
            ¿Listo para vivir la <span className="text-gradient-gold">experiencia</span>?
          </h2>
          <p className="text-muted-foreground text-lg font-body mb-10 max-w-xl mx-auto">
            Vení a disfrutar de los mejores sabores del Caribe. 
            Te esperamos en Guápiles, Limón.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50688888888"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-gradient text-primary-foreground font-body font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-lg"
            >
              Escribinos por WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://waze.com/ul/hd1u6jt34e"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/30 text-primary font-body font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors text-lg"
            >
              <MapPin className="w-5 h-5" />
              Cómo llegar
            </a>
          </div>

          {/* Trabaja con nosotros */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <a
              href="https://wa.me/50688888888?text=Hola%2C%20me%20interesa%20trabajar%20con%20ustedes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-sm transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              Trabaja con nosotros
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
