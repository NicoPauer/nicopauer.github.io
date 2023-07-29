// Se encarga de complementar informacion de accesibilidad de las canciones y agregar tres nuevas a la grilla

// Cargo todos los elementos a manipular
const grillaDeCanciones = document.getElementById("canciones");
// Obtengo solo enlaces de la grilla de canciones
const enlaces = Array.from(document.querySelector("a"));
/* Establezco que cada enlace dentro de la grilla de canciones tengo de texto de lector de pantalla el titulo de cancion del atributo title
   y que cada uno aparezca al lector de pantalla como "canción" */
enlaces.map((enlace) => enlace.setAttribute("aria-labeledby", "canción"));
enlaces.map((enlace) => enlace.setAttribute("aria-lablel", enlace.title));
