// Lista de videos likeados dentro del objeto usuarios.
const user = {
  email: "marce@apx.school",
  id: "x1s2d3f4g5",
  likes: [
    {
      id: "yt-video-NK4CbPxzZQU",
      nombre: "Usando webhooks para recibir la confirmación de un pago",
    },
    {
      id: "yt-video-4S1jDNY08Q8",
      nombre: "Pensando objetivos del año con OKRs",
    },
    {
      id: "yt-video-yIRWzNIacJc",
      nombre: "Generando un link de pago con la API de Mercado Pago",
    },
  ],
};

// Lista de videos generales

const videos = [
  {
    id: "yt-video-NK4CbPxzZQU",
    nombre: "Usando webhooks para recibir la confirmación de un pago",
    duracion: "12:34",
  },
  {
    id: "yt-video-4S1jDNY08Q8",
    nombre: "Pensando objetivos del año con OKRs",
    duracion: "10:15",
  },
  {
    id: "yt-video-yIRWzNIacJc",
    nombre: "Generando un link de pago con la API de Mercado Pago",
    duracion: "08:45",
  },
  {
    id: "yt-video-LttJdPtXmw4",
    nombre: "Pagos online - Introducción - Parte 1/4",
    duracion: "09:30",
  },
  {
    id: "yt-video-ZjwMQkherN4",
    nombre: "Usando AI para programar profesionalmente",
    duracion: "11:20",
  },
  {
    id: "yt-video-IC4c_XOCDGw",
    nombre: "Mi primera línea de código",
    duracion: "07:50",
  },
];

for (const video of videos) {
  let mensaje = `Video: ${video.nombre}`;
  
  // Verificar si el video está en los likes
  for (const like of user.likes) {
    if (like.id === video.id) {
      mensaje += " ❤️"; // Agregar un corazón si está en los likes
    }
  }

  console.log(mensaje);
}