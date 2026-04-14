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
    { name: "Rice and Beans con camarones", desc: "El clásico caribeño con camarones al ajillo", price: "Consultar" },
    { name: "Ramen de cerdo", desc: "Caldo rico con cerdo, huevo y vegetales asiáticos", price: "Consultar" },
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
  { q: "¿Qué locales hay dentro de La Comarca?", a: "Dentro encontrarás Bar Punta Mona, Don Chente, Primitivos Gourmet, La Çava, Leska's Caribbean Food, La Fresquería, El Cevichito ¡y más por venir!" },
  { q: "¿Cuál es el horario?", a: "Bar 🍻: Lunes a Domingo de 12:00 m.d. a 12:00 a.m. Comidas 🍱🌮: Martes a Domingo de 11:00 a.m. a 10:00 p.m. Los lunes solo abre el bar." },
  { q: "¿Necesito hacer reservación?", a: "¡No! Solo caé y disfrutá. No necesitás reservar, siempre hay espacio para vos." },
  { q: "¿Tienen parqueo?", a: "¡Sí! Contamos con amplio parqueo gratuito para que lleguéis sin preocupaciones." },
  { q: "¿Cuál es el rango de precios?", a: "Los platos van desde ₡5,000 hasta ₡10,000 por persona aproximadamente. Excelente relación calidad-precio." },
  { q: "¿Cómo llego?", a: "Estamos a 100 m norte y 75 m oeste del Servicentro JSM en Guápiles, frente al parqueo de la subasta de la Expo Pococí. ¡Buscanos en Waze!" },
  { q: "¿Ofrecen servicio de entrega?", a: "Sí, contamos con entrega sin contacto y pedidos desde el automóvil para tu comodidad." },
  { q: "¿Tienen opciones vegetarianas?", a: "¡Sí! Varios locales ofrecen opciones vegetarianas. Consultá con nuestro equipo al llegar." },
] as const;
