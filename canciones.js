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

class Visualizador
{
   /* Crea representación grafica para un objeto de tipo Cancion */
   constructor(objeto)
   {
    // Nombre de la cancion  
      this.nombre = objeto.nombre;
   // Nombre de la imagen que representa la cancion que está en el mismo directorio   
      this.imagen = "";
   // Enlace hacia la canción por lo general en Youtube   
      this.enlace = objeto.enlace;
   // Artista que interpreta la cancion   
      this.artista = objeto.artista;
   // Dice si el visualizador es visible   
      this.visible = false;
   }
  /* Metodos */
   mostrar()
   {
    // Preparo como se verá el visualizador
      const vista = document.createElement("a");
      vista.setAttribute("aria-labeledby", "canción");
      vista.setAttribute("aria-label", (this.artista + " - " + this.nombre));
      vista.setAttribute("href", this.enlace);
      vista.setAttribute("target", "_blank");
      vista.setAttribute("title", (this.artista + " - " + this.nombre));
      vista.innerHTML = vista.innerHTML + "<br /><aside><mark>" + (this.artista + " - " + this.nombre) + "</mark></aside>";
    // Hago visible el visualizador  
      this.visible = true
      const nueva = document.querySelector("#canciones").firstElementChild;
      nueva.append(vista);
   }

   ocultar()
   {
      // Oculto el visualizador
        this.visible = false;
   }
}
// Creo objetos que instancien a cancion de vez en cuando ire agregando mas

const cancion_1 = new Cancion("True Colors", "Sol Camila Lugo");
cancion_1.enlace = "https://www.youtube.com/watch?v=NFPtI5K9XTI";

const cancion_2 = new Cancion("Europa VII", "La Oreja De Van Gogh");
cancion_2.enlace = "https://www.youtube.com/watch?v=mNbF4N3_xgI";
cancion_2.genero = "Pop";

const cancion_3 = new Cancion("No me olvides", "La Beriso");
cancion_3.enlace = "https://www.youtube.com/watch?v=R_2Q6w_RryY";
cancion_3.genero = "Rock";

const cancion_4 = new Cancion("Titanium", "David Guetta ft. Sia");
cancion4.enlace = "https://www.youtube.com/watch?v=JRfuAukYTKg&pp=ygUIdGl0YW5pdW0%3D";
cancion_4.imagen = "titanium.png";
canicon_4.genero = "Progressive House";
// Creo objetos visualizadores, uno para cada cancion
const vista_1 = new Visualizador(cancion_1);
vista_1.mostrar();

const vista_2 = new Visualizador(cancion_2);
vista_2.mostrar();

const vista_3 = new Visualizador(cancion_3);
vista_3.mostrar();

const vista_4 = new Visualizador(cancion_4);
vista_4.mostrar();
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
