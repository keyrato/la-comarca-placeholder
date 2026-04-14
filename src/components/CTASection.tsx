import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { LINKS } from "@/lib/constants";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gold-gradient opacity-10" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 italic">
          Caé y disfrutá —<br />
          <span className="text-gradient-gold">te esperamos en Guápiles</span>
        </h2>
        <p className="text-muted-foreground text-lg font-body mb-10 max-w-xl mx-auto">
          Sin reservación, sin complicaciones. Solo vení a pasarla bien con la mejor comida y el mejor ambiente.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient text-primary-foreground font-body font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-lg"
          >
            Escribinos por WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/30 text-primary font-body font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors text-lg"
          >
            <MapPin className="w-5 h-5" />
            Cómo llegar
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
