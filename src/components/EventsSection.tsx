import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { EVENTS_PLACEHOLDER, LINKS } from "@/lib/constants";

const EventsSection = () => (
  <section id="eventos" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4 block">Eventos</span>
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
          Siempre pasa <span className="text-gradient-gold italic">algo bueno</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto font-body">
          Música en vivo, noches temáticas y promos especiales. Seguinos para no perderte nada.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {EVENTS_PLACEHOLDER.map((ev, i) => (
          <motion.div
            key={ev.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-2 text-primary font-body text-xs uppercase tracking-wider mb-4">
              <Calendar className="w-4 h-4" /> {ev.date}
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">{ev.name}</h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-3">
              <Clock className="w-3 h-3" /> {ev.time}
            </div>
            <p className="text-muted-foreground text-sm font-body">{ev.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href={LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-gold-light font-body font-medium transition-colors"
        >
          📸 Seguinos en Instagram para no perderte nada
        </a>
      </div>
    </div>
  </section>
);

export default EventsSection;
