import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { LINKS, HOURS } from "@/lib/constants";

const LocationSection = () => (
  <section id="ubicacion" className="py-24 bg-warm-gradient">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4 block">Ubicación</span>
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
          <span className="text-gradient-gold italic">Encontranos</span> fácilmente
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h3 className="font-heading text-2xl text-foreground mb-3">La Comarca Gastro Park</h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div className="text-muted-foreground font-body text-sm leading-relaxed">
                <p>100 m norte y 75 m oeste del Servicentro JSM</p>
                <p>Frente al parqueo de la subasta de la Expo Pococí</p>
                <p className="font-medium text-foreground">Guápiles, Limón, Costa Rica</p>
                <p className="text-xs mt-1">Plus Code: 66F9+RGR</p>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
              <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div className="text-sm font-body">
                <p className="font-medium text-foreground">{HOURS.bar.label}</p>
                <p className="text-muted-foreground">{HOURS.bar.schedule}: {HOURS.bar.time}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
              <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div className="text-sm font-body">
                <p className="font-medium text-foreground">{HOURS.food.label}</p>
                <p className="text-muted-foreground">{HOURS.food.schedule}: {HOURS.food.time}</p>
                <p className="text-accent font-medium">{HOURS.food.closed}</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-gradient text-primary-foreground font-body font-semibold py-3 px-6 rounded-full text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" /> Abrir en Google Maps
            </a>
            <a
              href={LINKS.waze}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/30 text-primary font-body font-medium py-3 px-6 rounded-full text-center hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.54 6.63A8.99 8.99 0 0012.07 2C6.73 2 2.4 6.15 2.04 11.42a3.68 3.68 0 00-1.96 3.22 3.72 3.72 0 003.72 3.72c.2 0 .4-.02.59-.05A9.06 9.06 0 0012.07 22a8.93 8.93 0 005.9-2.2 3.69 3.69 0 004.95-1.72 3.72 3.72 0 00-2.38-5.45zM8.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.8 3.27A5.77 5.77 0 0112 17.5a5.77 5.77 0 01-5.3-2.23.75.75 0 011.18-.92A4.28 4.28 0 0012 16a4.28 4.28 0 004.12-1.65.75.75 0 011.18.92z"/></svg>
              Buscanos en Waze
            </a>
          </div>
        </motion.div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border min-h-[350px]"
        >
          <iframe
            title="Ubicación de La Comarca Gastro Park"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0!2d-83.7906!3d10.2146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDEyJzUyLjYiTiA4M8KwNDcnMjYuMiJX!5e0!3m2!1ses!2scr!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 350 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;
