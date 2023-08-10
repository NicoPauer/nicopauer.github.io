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
      this.imagen = objeto.imagen;
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
      vista.innerHTML = "<br /><aside><mark>" + (this.artista + " - " + this.nombre) + "</mark></aside>" + vista.innerHTML;
    // Hago visible el visualizador  
      this.visible = true
      const nueva = document.querySelector("#canciones");
     if (this.imagen !== "")
     {
         // Si hay una imagen la agrego
         // Correción de duplicados
           const img = document.createElement('img');
           img.setAttribute("src", this.imagen);
           img.setAttribute("width", "300");
           img.setAttribute("height", "200");
           img.setAttribute("alt", (this.artista + " - " + this.nombre));
           vista.appendChild(img);
           nueva.appendChild(vista);
      }
      else
      {
         this.visible = false;
      }
   }

   ocultar()
   {
      // Oculto el visualizador
        this.visible = false;
        const remover = document.querySelector("img[src=" + this.imagen + "]");
        remover.style = "display: none;";
   }
}
// Creo objetos que instancien a cancion de vez en cuando ire agregando mas

const cancion_1 = new Cancion("True Colors", "Sol Camila Lugo");
cancion_1.enlace = "https://www.youtube.com/watch?v=NFPtI5K9XTI";
cancion_1.genero = "Big Band";
cancion_1.imagen = "lugo.jpeg";

const cancion_2 = new Cancion("Europa VII", "La Oreja De Van Gogh");
cancion_2.enlace = "https://www.youtube.com/watch?v=mNbF4N3_xgI";
cancion_2.genero = "Pop";
cancion_2.imagen = "europa.png";

const cancion_3 = new Cancion("No me olvides", "La Beriso");
cancion_3.enlace = "https://www.youtube.com/watch?v=R_2Q6w_RryY";
cancion_3.genero = "Rock";
cancion_3.imagen = "olvides.png";

const cancion_4 = new Cancion("Titanium", "David Guetta ft. Sia");
cancion_4.enlace = "https://www.youtube.com/watch?v=JRfuAukYTKg&pp=ygUIdGl0YW5pdW0%3D";
cancion_4.imagen = "titanium.png";
cancion_4.genero = "Progressive House";

const cancion_5 = new Cancion("Alone", "Marshmello");
cancion_5.enlace = "https://www.youtube.com/watch?v=ALZHF5UqnU4";
cancion_5.imagen = "alone.png";
cancion_5.genero = "Electro House";

const cancion_6 = new Cancion("Yas Gagliardi", "Mi Futuro es Hoy");
cancion_6.enlace = "https://www.youtube.com/watch?v=29i66Dn1d84";
cancion_6.lanzamiento = "2023";
cancion_6.imagen = "futuro.png";
cancion_6.genero = "Pop";

const cancion_7 = new Cancion("Luck Ra", "La Morocha");
cancion_7.enlace = "https://www.youtube.com/watch?v=mo7MpQZRd5Q";
cancion_7.lanzamiento = 2023
cancion_7.imagen = "morocha.png";
cancion_7.genero = "Cuarteto";

const cancion_8 = new Cancion("Big One ft. FMK", "Un Finde");
cancion_8.enlace = "https://youtu.be/d2HmiKVoTNA";
cancion_8.lanzamiento = 2023;
cancion_8.genero = "Cumbiaton";

const cancion_9 = new Cancion("Avicii", "Waiting For Love");
cancion_9.enlace = "https://youtu.be/-ncIVUXZla8";
cancion_9.imagen = "waiting.png";
cancion_9.lanzamiento = 2015;
cancion_9.genero = "Progressive House";

const cancion_10 = new Cancion("La Oreja De Van Gogh", "Verano");
cancion_10.enlace = "https://www.youtube.com/watch?v=MGB736cazVs";
cancion_10.imagen = "verano.png";
cancion_10.lanzamiento = 2016;
cancion_10.genero = "Pop";

const cancion_11 = new Cancion("La Oreja De Van Gogh", "Dia Cero");
cancion_11.enlace = "https://www.youtube.com/watch?v=nVCJ0wyw1ZA";
cancion_11.imagen = "dia_cero.jpg";
cancion_11.lanzamiento = 2012;
cancion_11.genero = "Pop";

const cancion_12 = new Cancion("Soda Stereo", "Persiana Americana");
cancion_12.imagen = "americana.png";
cancion_12.genero = "Rock";
cancion_12.lanzamiento = 1986;
cancion_12.enlace = "https://www.youtube.com/watch?v=Z3L5M7GHAkw";

const cancion_13 = new Cancion("Lady Gaga", "Stupid Love");
cancion_13.imagen = ".png";
cancion_13.genero = "Pop";
cancion_13.lanzamiento = 2020;
cancion_13.enlace = "https://www.youtube.com/watch?v=5L6xyaeiV58";

const cancion_14 = new Cancion("La Oreja De Van Gogh", "Cometas Por El Cielo");
cancion_14.imagen = "cometas.png";
cancion_14.genero = "Pop";
cancion_14.lanzamiento = 2011;
cancion_14.enlace = "https://www.youtube.com/watch?v=j7FIquNQqkc";

const cancion_15 = new Cancion("", "");
cancion_15.imagen = ".png";
cancion_15.genero = "Pop";
cancion_15.lanzamiento = 20;
cancion_15.enlace = "";

const cancion_16 = new Cancion("", "");
cancion_16.imagen = ".png";
cancion_16.genero = "Pop";
cancion_16.lanzamiento = 20;
cancion_16.enlace = "";

const cancion_17 = new Cancion("", "");
cancion_17.imagen = ".png";
cancion_17.genero = "Pop";
cancion_17.lanzamiento = 20;
cancion_17.enlace = "";

const cancion_18 = new Cancion("", "");
cancion_18.imagen = ".png";
cancion_18.genero = "Pop";
cancion_18.lanzamiento = 20;
cancion_18.enlace = "";

// Creo arreglo con objetos que instancian a Cancion
const canciones = [cancion_1, cancion_2, cancion_3, cancion_4, cancion_5, cancion_6, cancion_7, cancion_8, cancion_9, cancion_10, cancion_11, cancion_12, cancion_13, cancion_14, cancion_15, cancion_16, cancion_17, cancion_18];
// Creo instancias visualizadoras para cada canción y la muestro
for (vista in canciones)
{
   let cancion = new Visualizador(canciones[vista]);
   cancion.mostrar();
}
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
