import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/hero-food.jpg";
import ambienteImg from "@/assets/ambiente.jpg";
import cocktailsImg from "@/assets/cocktails.jpg";
import parrillaImg from "@/assets/parrilla.jpg";
import burgerImg from "@/assets/burger.png";
import cevicheImg from "@/assets/ceviche.jpg";
import lacavaImg from "@/assets/lacava.jpg";

type Filter = "todo" | "comida" | "ambiente" | "bar";

const images = [
  { src: ambienteImg, alt: "Chef preparando parrilla en La Comarca", filter: "ambiente" as Filter, span: "md:col-span-2 md:row-span-2" },
  { src: burgerImg, alt: "Hamburguesa gourmet triple — la perfección", filter: "comida" as Filter, span: "" },
  { src: cocktailsImg, alt: "Gin & Tonic en Bar Punta Mona", filter: "bar" as Filter, span: "" },
  { src: cevicheImg, alt: "Ceviche fresco de El Cevichito", filter: "comida" as Filter, span: "" },
  { src: parrillaImg, alt: "Costillas BBQ con elote", filter: "comida" as Filter, span: "" },
  { src: lacavaImg, alt: "Cócteles de colores en La Çava", filter: "bar" as Filter, span: "md:col-span-2" },
  { src: heroImg, alt: "Rice and beans con pollo caribeño", filter: "comida" as Filter, span: "md:col-span-2" },
];

const filters: { label: string; value: Filter }[] = [
  { label: "Todo", value: "todo" },
  { label: "Comida", value: "comida" },
  { label: "Ambiente", value: "ambiente" },
  { label: "Bar", value: "bar" },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("todo");
  const filtered = activeFilter === "todo" ? images : images.filter((img) => img.filter === activeFilter);

  return (
    <section id="galeria" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4 block">Galería</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
            Un vistazo a <span className="text-gradient-gold italic">la experiencia</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`font-body text-sm px-5 py-2 rounded-full transition-all ${
                activeFilter === f.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          >
            {filtered.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className={`overflow-hidden rounded-xl ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 min-h-[180px]"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="text-center mt-8 text-muted-foreground font-body text-sm">
          Compartí tu visita con <span className="text-primary font-medium">#LaComarca</span> 📸
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
