const inbox = [
  {
    messageId: 1,
    asunto: "Oferta especial",
    preview: "Aprovechá este descuento exclusivo por tiempo limitado..."
  },
  {
    messageId: 2,
    asunto: "Reunión programada",
    preview: "Recordatorio: tenés una reunión mañana a las 10 AM."
  },
  {
    messageId: 3,
    asunto: "Novedades en tu cuenta",
    preview: "Actualizamos nuestras políticas de privacidad. Más detalles..."
  }
];

const count = inbox.length;

// El ternario que debés agregar debe devolver
// "mensaje" si count es == 1
// y "mensajes" si mayor

const pluralOrSingular = count === 1 ? "mensaje" : "mensajes";

const message = count === 0 
  ? "No tienes mensajes" 
  : `Tienes ${count} ${pluralOrSingular} en tu casilla`; 

console.log(message);