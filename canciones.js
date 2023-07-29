// Se encarga de complementar informacion de accesibilidad de las canciones y agregar tres nuevas a la grilla

// Cargo todos los elementos a manipular
const grillaDeCanciones = document.getElementById("canciones");
// Obtengo solo enlaces de la grilla de canciones
const enlaces = Array.from(document.getElementsByTagName("a"));
// Saco el primer enlace que corresponde a mi descripcion personal y no a las canciones
enlaces.shift(0);
/* Establezco que cada enlace dentro de la grilla de canciones tengo de texto de lector de pantalla el titulo de cancion del atributo title
   y que cada uno aparezca al lector de pantalla como "canción" */
enlaces.map((enlace) => enlace.setAttribute("aria-labeledby", "canción"));
enlaces.map((enlace) => enlace.setAttribute("aria-lablel", enlace.title));
// Agrego mas texto para que se sepan titulo y artista de las canciones con estructura semantica para lectores de pantalla
enlaces.map((enlace) => enlace.innerHTML = enlace.innerHTML + "<br /><aside><mark>" + enlace.title + "</mark></aside>") 