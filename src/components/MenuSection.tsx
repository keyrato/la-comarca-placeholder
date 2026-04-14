import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS, LINKS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const MenuSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="menu" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4 block">Menú</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
            Sabores que <span className="text-gradient-gold italic">enamoran</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            Una muestra de lo que te espera. Precios y disponibilidad pueden variar según el local.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {MENU_ITEMS.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActive(i)}
              className={`font-body text-sm px-5 py-2.5 rounded-full transition-all duration-300 ${
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto space-y-3"
          >
            {MENU_ITEMS[active].items.map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/20 transition-colors"
              >
                <div>
                  <h4 className="font-heading text-lg text-foreground mb-1">{item.name}</h4>
                  <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
                </div>
                <span className="text-primary font-body font-medium text-sm whitespace-nowrap shrink-0">{item.price}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-10">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-body font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            ¿Querés ver el menú completo? Escribinos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
