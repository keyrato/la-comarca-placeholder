import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, Flame, Fish } from "lucide-react";
import ramenImg from "@/assets/ramen.jpg";
import cocktailsImg from "@/assets/cocktails.jpg";
import parrillaImg from "@/assets/parrilla.jpg";
import burgerImg from "@/assets/burger.png";

const services = [
  { icon: Flame, title: "Hamburguesas Gourmet", desc: "La triple combinación de la perfección 🍔 con papas doradas", img: burgerImg },
  { icon: UtensilsCrossed, title: "Ramen Artesanal", desc: "Caldos ricos con ingredientes locales y asiáticos", img: ramenImg },
  { icon: Wine, title: "Coctelería & Bar", desc: "Cócteles de autor y cervezas frías de 12md a 12am", img: cocktailsImg },
  { icon: Fish, title: "Parrilla & Mariscos", desc: "Cortes selectos, rice and beans y platos del mar", img: parrillaImg },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4 block">Nuestra Cocina</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Un viaje de <span className="text-gradient-gold">sabores</span> te espera
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Una fusión de cocina caribeña, asiática y latinoamericana que solo encontrarás aquí.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
