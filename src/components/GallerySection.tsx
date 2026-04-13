import { motion } from "framer-motion";
import heroImg from "@/assets/hero-food.jpg";
import ambienteImg from "@/assets/ambiente.jpg";
import ramenImg from "@/assets/ramen.jpg";
import cocktailsImg from "@/assets/cocktails.jpg";
import parrillaImg from "@/assets/parrilla.jpg";
import cevicheImg from "@/assets/ceviche.jpg";

const images = [
  { src: ambienteImg, alt: "Ambiente del gastro park", span: "md:col-span-2 md:row-span-2" },
  { src: heroImg, alt: "Rice and beans con camarones", span: "" },
  { src: cocktailsImg, alt: "Coctelería tropical", span: "" },
  { src: ramenImg, alt: "Ramen de cerdo", span: "" },
  { src: parrillaImg, alt: "Parrilla premium", span: "" },
  { src: cevicheImg, alt: "Ceviche fresco", span: "md:col-span-2" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4 block">Galería</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Un vistazo a <span className="text-gradient-gold">la experiencia</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`overflow-hidden rounded-xl ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 min-h-[200px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
