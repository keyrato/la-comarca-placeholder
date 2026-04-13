import { motion } from "framer-motion";
import { Star, Users, Leaf, MapPin, Clock, Heart } from "lucide-react";

const reasons = [
  { icon: Star, title: "4.5 Estrellas", desc: "419+ opiniones reales en Google nos respaldan" },
  { icon: Users, title: "Ambiente Familiar", desc: "Ideal para familias, parejas y grupos de amigos" },
  { icon: Leaf, title: "Ingredientes Frescos", desc: "Productos locales de Limón y la zona caribeña" },
  { icon: MapPin, title: "Ubicación Única", desc: "En el corazón de Guápiles con ambiente al aire libre" },
  { icon: Clock, title: "Servicio Ágil", desc: "Consumo en lugar, drive-thru y entrega sin contacto" },
  { icon: Heart, title: "Hecho con Pasión", desc: "Cada plato es preparado con dedicación y amor" },
];

const WhyUsSection = () => {
  return (
    <section id="por-que" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4 block">¿Por qué elegirnos?</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Más que un <span className="text-gradient-gold">restaurante</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            La Comarca Gastro Park es una experiencia gastronómica completa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
