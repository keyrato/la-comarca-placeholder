import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Léon",
    initial: "L",
    badge: "Local Guide · 28 opiniones",
    stars: 5,
    text: "We ate lomito and fish fingers from the restaurant in the back, it was perfect. We also had ceviche from another restaurant and it was also delicious. This is a place to visit again, definitely.",
  },
  {
    name: "Yorlene Calderón",
    initial: "Y",
    badge: "Local Guide · 30 opiniones",
    stars: 5,
    text: "Muy lindo el lugar, espacioso. Genial para compartir con amigos. Estar en familia, muy ricas sus comidas. Un lugar tranquilo y un parqueo grande. Muy cómodos sus precios.",
  },
  {
    name: "Lester Zúñiga",
    initial: "L",
    badge: "Local Guide · 48 opiniones",
    stars: 5,
    text: "Buen lugar para compartir, disfrutar del ambiente, libre elección en bebidas, comidas, pet friendly, comida en el sitio y al aire libre. Agradable tanto para jóvenes y adultos, compartir en familia, realizar actividades o festejos privados con una agradable vista.",
  },
  {
    name: "Victor Arce",
    initial: "V",
    badge: "Local Guide · 144 opiniones",
    stars: 5,
    text: "Un lugar acogedor con variedad de restaurantes, zona familiar, ordenado y limpio, para ir solo o en familia, realmente encantador.",
  },
  {
    name: "Silvina Fazzari",
    initial: "S",
    badge: "Local Guide · 10 opiniones",
    stars: 5,
    text: "Rinconcito escondido de Guápiles, un patio de comidas bien ambientado, buena música y buena gastronomía.",
  },
];

const ReviewsSection = () => (
  <section id="resenas" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-7 h-7 ${i < 4 ? "fill-primary text-primary" : "fill-primary/40 text-primary/40"}`} />
          ))}
        </div>
        <div className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-2">4.5</div>
        <p className="text-muted-foreground font-body text-lg">
          basado en <span className="text-foreground font-medium">419 opiniones</span> en Google
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/20 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-heading font-bold text-lg shrink-0">
                {r.initial}
              </div>
              <div className="min-w-0">
                <p className="font-heading text-foreground font-semibold text-sm truncate">{r.name}</p>
                <p className="text-muted-foreground text-xs font-body flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.97 10.97 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  {r.badge}
                </p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(r.stars)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm font-body leading-relaxed flex-1">"{r.text}"</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://maps.app.goo.gl/gcjnuP9uzKbWBn9HA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 font-body font-medium py-3 px-6 rounded-full transition-colors text-sm"
        >
          Ver todas las opiniones <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
