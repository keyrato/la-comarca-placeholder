import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿Cuál es el horario de La Comarca?", a: "Bar 🍻: Lunes a Domingo de 12:00md a 12:00am. Comidas 🍱🌮: Martes a Domingo de 11:00am a 10:00pm. Lunes: CERRADO (solo bar)." },
  { q: "¿Necesito hacer reservación?", a: "No es obligatorio, pero para grupos de 6 o más personas recomendamos reservar con anticipación para garantizar tu mesa." },
  { q: "¿Tienen opciones vegetarianas o veganas?", a: "¡Sí! Contamos con opciones vegetarianas y podemos adaptar varios platos. Consultá con nuestro equipo al llegar." },
  { q: "¿Cuál es el rango de precios?", a: "Nuestros platos van desde ₡5,000 hasta ₡10,000 por persona, ofreciendo una excelente relación calidad-precio." },
  { q: "¿Ofrecen servicio de entrega?", a: "Sí, contamos con entrega sin contacto y pedidos desde el automóvil (drive-thru) para tu comodidad." },
  { q: "¿Dónde están ubicados?", a: "100 Norte y 75 Oeste de Servicentro JSM, Guápiles. Frente al parqueo de la subasta de la Expo Pococí. ¡Buscanos en Waze!" },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4 block">FAQ</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Preguntas <span className="text-gradient-gold">frecuentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="font-heading text-foreground text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
