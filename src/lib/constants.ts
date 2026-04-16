// La Comarca Gastro Park — Central data & links

export const LINKS = {
  whatsapp: "https://api.whatsapp.com/send?phone=50661415178",
  waze: "https://waze.com/ul/hd1u6jt2e0",
  googleMaps: "https://maps.app.goo.gl/gcjnuP9uzKbWBn9HA",
  instagram: "https://www.instagram.com/la.comarcagastropark",
  facebook: "https://www.facebook.com/share/1HhjP6zH7G/",
  tiktok: "https://www.tiktok.com/@la.comarcagastropark",
  email: "lacomarcaguapiles@gmail.com",
  phone: "+506 6141 5178",
  phoneTel: "tel:+50661415178",
  workWithUs: "mailto:lacomarcaguapiles@gmail.com?subject=Quiero%20trabajar%20con%20ustedes",
} as const;

export const LOCALES = [
  { name: "Bar Punta Mona", emoji: "🍹", category: "Bar & Coctelería", desc: "Cócteles de autor, cerveza artesanal y la mejor vibra nocturna de Guápiles." },
  { name: "Don Chente", emoji: "🫕", category: "Comida costarricense", desc: "Casados, gallos y sabor tico auténtico como en casa de la abuela." },
  { name: "Primitivos Gourmet", emoji: "🔪", category: "Cocina gourmet", desc: "Técnicas modernas con ingredientes locales para paladares curiosos." },
  { name: "La Çava", emoji: "🍷", category: "Vinos y gastronomía", desc: "Vinos selectos y platos especiales para una experiencia refinada." },
  { name: "Leska's Caribbean Food", emoji: "🌴", category: "Comida caribeña", desc: "Rice and beans, patí y toda la sazón del Caribe costarricense." },
  { name: "La Fresquería", emoji: "🥤", category: "Bebidas y frescos", desc: "Batidos tropicales, aguas frescas y opciones ligeras para refrescarte." },
  { name: "El Cevichito", emoji: "🦐", category: "Ceviches y mariscos", desc: "Ceviche fresco, pescado del día y los mejores mariscos de la zona." },
] as const;

export const HOURS = {
  bar: { label: "Bar 🍻", name: "Bar Punta Mona", schedule: "Lunes a Domingo", time: "12:00 m.d. – 12:00 a.m." },
  food: { label: "Comidas 🍱🌮", name: "Restaurantes", schedule: "Martes a Domingo", time: "11:00 a.m. – 10:00 p.m.", closed: "Lunes: CERRADO" },
} as const;

export const MENU_ITEMS = [
  { category: "Entradas", items: [
    { name: "Patacones con guacamole", desc: "Plátano verde frito con guacamole fresco", price: "Consultar" },
    { name: "Ceviche mixto", desc: "Pescado y camarón marinado en limón con cilantro", price: "Consultar" },
    { name: "Empanadas de carne", desc: "Masa crujiente rellena de carne especiada", price: "Consultar" },
  ]},
  { category: "Platos fuertes", items: [
    { name: "Rice and Beans con Camarones", desc: "El clásico caribeño elevado. Arroz con frijoles rojos en leche de coco con camarones frescos. Leska's Caribbean Food.", price: "Consultar" },
    { name: "Ramen de Cerdo", desc: "Caldo profundo y reconfortante con cerdo tierno y fideos ramen. Único en Guápiles.", price: "Consultar" },
    { name: "Hamburguesa triple gourmet", desc: "La triple combinación de la perfección 🍔", price: "Consultar" },
    { name: "Costillas BBQ", desc: "Costillas ahumadas con salsa BBQ y elote", price: "Consultar" },
  ]},
  { category: "Mariscos", items: [
    { name: "Ceviche de camarón", desc: "Camarón fresco con limón, cebolla morada y chile", price: "Consultar" },
    { name: "Pescado entero frito", desc: "Pescado del día con ensalada y patacones", price: "Consultar" },
    { name: "Camarones al coco", desc: "Camarones en salsa de coco con arroz", price: "Consultar" },
  ]},
  { category: "Bebidas", items: [
    { name: "Gin & Tonic artesanal", desc: "Gin premium con tónica y botánicos frescos", price: "Consultar" },
    { name: "Cerveza artesanal", desc: "Selección rotativa de cervezas locales", price: "Consultar" },
    { name: "Batido tropical", desc: "Frutas frescas de temporada", price: "Consultar" },
    { name: "Agua de sapo", desc: "Bebida tradicional costarricense con jengibre y limón", price: "Consultar" },
  ]},
  { category: "Postres", items: [
    { name: "Tres leches", desc: "El clásico postre centroamericano", price: "Consultar" },
    { name: "Churros con chocolate", desc: "Churros crujientes con salsa de chocolate", price: "Consultar" },
  ]},
] as const;

export const EVENTS_PLACEHOLDER = [
  { name: "Noche de Música en Vivo", date: "Próximamente", time: "7:00 p.m.", desc: "Bandas locales y artistas invitados en un ambiente único bajo las estrellas." },
  { name: "Noche Temática Caribeña", date: "Próximamente", time: "6:00 p.m.", desc: "Sabores del Caribe, ritmos tropicales y cócteles especiales toda la noche." },
  { name: "Promo 2x1 en Cocktails", date: "Próximamente", time: "5:00 p.m. – 8:00 p.m.", desc: "Happy hour extendido con las mejores ofertas en coctelería de autor." },
] as const;

export const FAQ_DATA = [
  { q: "¿Qué locales hay dentro de La Comarca?", a: "Bar Punta Mona, Don Chente, Primitivos Gourmet, La Çava, Leska's Caribbean Food, La Fresquería, El Cevichito, y más." },
  { q: "¿Cuál es el horario?", a: "Bar: Lunes a Domingo, 12:00 m.d. – 12:00 a.m. Comidas: Martes a Domingo, 11:00 a.m. – 10:00 p.m. Lunes: comidas cerrado, bar abierto." },
  { q: "¿Necesito hacer reservación?", a: "No, no necesitás reservar. Podés llegar directamente." },
  { q: "¿Tienen parqueo?", a: "Sí, amplio parqueo disponible sin costo." },
  { q: "¿Cuál es el rango de precios?", a: "Entre ₡5,000 y ₡10,000 por persona según el local." },
  { q: "¿Cómo llego?", a: "100 m norte y 75 m oeste del Servicentro JSM, frente al parqueo de la subasta de la Expo Pococí, Guápiles. Buscanos en Waze: waze.com/ul/hd1u6jt2e0" },
  { q: "¿Ofrecen servicio de entrega?", a: "Sí, entrega sin contacto y pedidos desde el automóvil. Escribinos por WhatsApp: +506 6141 5178" },
  { q: "¿Tienen opciones vegetarianas?", a: "Cada local maneja su menú. Consultanos por WhatsApp para orientarte." },
] as const;
