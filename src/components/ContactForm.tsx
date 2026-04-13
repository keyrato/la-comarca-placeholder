import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto pronto." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 glow-gold">
      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Reservá tu mesa</h3>
      <p className="text-muted-foreground text-sm mb-6 font-body">Completá el formulario y te contactamos</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          required
          maxLength={100}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body text-sm transition-all"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          required
          maxLength={255}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body text-sm transition-all"
        />
        <input
          type="tel"
          placeholder="Teléfono"
          maxLength={20}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body text-sm transition-all"
        />
        <textarea
          placeholder="Mensaje o detalles de tu reserva"
          rows={3}
          maxLength={1000}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body text-sm transition-all resize-none"
        />
        <button
          type="submit"
          className="w-full bg-gold-gradient text-primary-foreground font-body font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          Enviar mensaje
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
