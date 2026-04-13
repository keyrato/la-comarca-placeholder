import { motion } from "framer-motion";
import { Star, Users, Leaf, MapPin, Clock, Heart, Car, Store } from "lucide-react";

const reasons = [
  { icon: Star, title: "4.5 Estrellas", desc: "419+ opiniones reales en Google nos respaldan" },
  { icon: Users, title: "Ambiente Familiar", desc: "Ideal para familias, parejas y grupos de amigos" },
  { icon: Leaf, title: "Ingredientes Frescos", desc: "Productos locales de Limón y la zona caribeña" },
  { icon: MapPin, title: "Ubicación Única", desc: "En el corazón de Guápiles con ambiente al aire libre" },
  { icon: Car, title: "Amplio Parqueo", desc: "Estacionamiento cómodo y seguro para todos los visitantes" },
  { icon: Heart, title: "Hecho con Pasión", desc: "Cada plato es preparado con dedicación y amor" },
];

const restaurants = [
  "Bar Punta Mona",
  "Don Chente",
  "Primitivos Gourmet",
  "La Çava",
  "Leska's Caribbean Food",
  "La Fresquería",
  "El Cevichito",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Restaurants inside */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Store className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Dentro encontrarás <span className="text-gradient-gold">múltiples experiencias</span>
          </h3>
          <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
            Un solo lugar, muchos sabores. Explorá los diferentes restaurantes y bares dentro de La Comarca.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {restaurants.map((name) => (
              <span
                key={name}
                className="bg-secondary/60 border border-border text-secondary-foreground px-5 py-2.5 rounded-full font-body text-sm font-medium hover:border-primary/30 transition-colors"
              >
                {name}
              </span>
            ))}
            <span className="bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full font-body text-sm font-medium">
              ¡y más!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
