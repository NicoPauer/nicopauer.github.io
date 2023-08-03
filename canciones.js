// Se encarga de complementar informacion de accesibilidad de las canciones y agregar nuevas a la grilla


// Objetos para hacer mas facil de mantener el codigo
class Cancion
{
   /*
     Autor: © 2023 Nicolas Pauer
     mail: nicolaspauer20@gmail.com

     Permite representar la información
     de una canción
   */
   constructor(nombre, artista)
   {
     // Nombre de la cancion   
      this.nombre = nombre;
    // Nombre del artista  
      this.artista = artista;
    // Enlace de Youtube hacia la canción  
      this.enlace = "";
    // Nombre de la imagen relacionada a la cancion
      this.imagen = "";
    // Año de lanzamiento de la cancion
      this.lanzamiento = 1000;
    // Genero músical de la cancion
      this.genero = "Música";
   }
}
// Creo objetos que instancien a cancion de vez en cuando ire agregando mas

const cancion_1 = new Cancion("True Colors", "Sol Camila Lugo");
cancion_1.enlace = "https://www.youtube.com/watch?v=NFPtI5K9XTI";

const cancion_2 = new Cancion("Europa VII", "La Oreja De Van Gogh");
canacio_2.enlace = "https://www.youtube.com/watch?v=mNbF4N3_xgI";

const cancion_3 = new Cancion("No me olvides", "La Beriso");
cancion_3.enlace = "https://www.youtube.com/watch?v=R_2Q6w_RryY";

// Creo arreglo con objetos que instancian a Cancion
const canciones = [cancion_1, cancion_2, cancion_3];
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
