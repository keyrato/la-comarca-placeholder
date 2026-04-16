import { motion } from "framer-motion";
import { UtensilsCrossed, Music, Car, Users, PawPrint } from "lucide-react";

const highlights = [
  { icon: UtensilsCrossed, title: "Variedad de sabores", desc: "Múltiples opciones gastronómicas en un solo lugar, desde cocina caribeña hasta gourmet." },
  { icon: Music, title: "Ambiente y entretenimiento", desc: "Música en vivo, noches temáticas y la mejor vibra social de Guápiles." },
  { icon: Car, title: "Amplio parqueo", desc: "Llegá sin preocupaciones con estacionamiento cómodo y seguro." },
  { icon: Users, title: "Para todos", desc: "Familias, parejas, amigos — cualquier plan, cualquier momento." },
  { icon: PawPrint, title: "Pet friendly y al aire libre", desc: "Tu mascota es bienvenida. Disfrutá el ambiente abierto en compañía de toda la familia." },
];

const ExperienceSection = () => (
  <section id="experiencia" className="py-24 bg-dark-gradient">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4 block">La Experiencia</span>
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
          No es solo comer,<br />
          es <span className="text-gradient-gold italic">vivir el momento</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <h.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl text-foreground mb-2">{h.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
