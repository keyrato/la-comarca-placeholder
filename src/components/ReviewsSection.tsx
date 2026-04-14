import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ReviewsSection = () => (
  <section id="resenas" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-8 h-8 ${i < 4 ? "fill-primary text-primary" : "fill-primary/40 text-primary/40"}`} />
          ))}
        </div>
        <div className="font-heading text-6xl md:text-8xl font-bold text-foreground mb-4">4.5</div>
        <p className="text-muted-foreground font-body text-lg mb-2">basado en <span className="text-foreground font-medium">419 opiniones</span> en Google</p>
        <div className="mt-10 border-t border-border/50 pt-10 space-y-6">
          <blockquote className="font-heading text-2xl md:text-3xl text-foreground italic leading-relaxed">
            "Un punto de encuentro gastronómico<br className="hidden md:block" /> que Guápiles necesitaba"
          </blockquote>
          <p className="text-muted-foreground font-body">
            Muy bien valorado por quienes lo visitan. Variedad, ambiente y sabor en un solo lugar.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ReviewsSection;
