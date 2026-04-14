import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Locales gastronómicos" },
  { value: "50+", label: "Platos disponibles" },
  { value: "🎶", label: "Eventos frecuentes" },
  { value: "4.5 ★", label: "Valoración Google" },
];

const StatsSection = () => (
  <section className="relative z-10 -mt-8 md:-mt-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card/80 backdrop-blur-lg border border-border/60 rounded-2xl p-5 md:p-6 text-center"
          >
            <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</div>
            <div className="font-body text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
