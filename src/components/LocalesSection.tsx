import { motion } from "framer-motion";
import { LOCALES } from "@/lib/constants";

// Map locale names to their menu slugs
const SLUG_MAP: Record<string, string> = {
  "Bar Punta Mona": "bar-punta-mona",
  "Don Chente": "don-chente",
  "Primitivos Gourmet": "primitivos-gourmet",
  "La Çava": "la-cava",
  "Leska's Caribbean Food": "leskas-caribbean-food",
  "La Fresquería": "la-fresqueria",
  "El Cevichito": "el-cevichito",
};

const LocalesSection = () => (
  <section id="locales" className="py-24 bg-dark-gradient">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4 block">Nuestros Locales</span>
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
          Un solo lugar, <span className="text-gradient-gold italic">muchos sabores</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
          Explorá los restaurantes y bares que hacen de La Comarca un punto de encuentro gastronómico único en Guápiles.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {LOCALES.map((local, i) => {
          const slug = SLUG_MAP[local.name];
          return (
            <motion.div
              key={local.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:glow-gold transition-all duration-500"
            >
              <div className="text-4xl mb-4">{local.emoji}</div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{local.name}</h3>
              <p className="font-body text-xs text-primary uppercase tracking-wider mb-3">{local.category}</p>
              <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">{local.desc}</p>
              {slug ? (
                <a
                  href={`#menu?local=${slug}`}
                  className="text-primary font-body text-sm font-medium hover:underline"
                >
                  Ver menú →
                </a>
              ) : (
                <a
                  href="#menu"
                  className="text-primary font-body text-sm font-medium hover:underline"
                >
                  Consultar →
                </a>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10 font-heading text-xl text-muted-foreground italic"
      >
        ...y más sabores por descubrir
      </motion.p>
    </div>
  </section>
);

export default LocalesSection;
