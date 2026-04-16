import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOCALE_MENU, LINKS } from "@/lib/constants";
import { ArrowRight, MessageCircle, Camera, X } from "lucide-react";

const MenuSection = () => {
  const [active, setActive] = useState(0);
  const [photoItem, setPhotoItem] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Listen for hash changes to activate a locale tab + scroll
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#menu?local=")) {
        const slug = hash.replace("#menu?local=", "");
        const idx = LOCALE_MENU.findIndex((l) => l.slug === slug);
        if (idx !== -1) {
          setActive(idx);
          setTimeout(() => {
            sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-24 bg-warm-gradient">
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
            Explorá lo que ofrece cada local. Precios y disponibilidad pueden variar.
          </p>
        </motion.div>

        {/* Locale tabs — horizontally scrollable on mobile */}
        <div className="flex overflow-x-auto gap-2 mb-10 pb-2 scrollbar-hide justify-start lg:justify-center">
          {LOCALE_MENU.map((loc, i) => (
            <button
              key={loc.slug}
              onClick={() => setActive(i)}
              className={`font-body text-sm px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap shrink-0 ${
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {loc.locale}
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
            {LOCALE_MENU[active].items.length > 0 ? (
              LOCALE_MENU[active].items.map((item) => (
                <div key={item.name}>
                  <div className="flex items-start justify-between gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/20 transition-colors">
                    <div>
                      <h4 className="font-heading text-lg text-foreground mb-1">{item.name}</h4>
                      <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => setPhotoItem(photoItem === item.name ? null : item.name)}
                      className="flex items-center gap-1.5 text-primary/70 hover:text-primary font-body text-xs whitespace-nowrap shrink-0 transition-colors py-1 px-2 rounded-lg hover:bg-primary/10"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Ver foto</span>
                    </button>
                  </div>

                  {/* Photo placeholder accordion */}
                  <AnimatePresence>
                    {photoItem === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="relative bg-card border border-t-0 border-border rounded-b-xl p-8 flex flex-col items-center justify-center gap-3">
                          <button
                            onClick={() => setPhotoItem(null)}
                            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          <div className="w-full max-w-sm aspect-[4/3] bg-background/50 border border-border rounded-lg flex flex-col items-center justify-center gap-3">
                            <Camera className="w-10 h-10 text-muted-foreground/40" />
                            <p className="font-heading text-foreground text-sm text-center px-4">{item.name}</p>
                            <p className="text-muted-foreground text-xs font-body">Foto disponible pronto</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="text-center bg-card border border-border rounded-xl p-10">
                <p className="text-muted-foreground font-body mb-4">Menú disponible pronto. Escribínos por WhatsApp.</p>
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold py-2.5 px-6 rounded-full hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            )}
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
