/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará a terminar la función. Si se no se recibe un string retornará -1.
*/

function contarVocales(texto) {
  const isTextValid =  typeof texto !== "string" 
  const isTextEmpty = !texto
  if(isTextValid) return -1
  if(isTextEmpty) return 0
  

  const vocales = extraerVocales(texto)

  const cantidadVocales = vocales.length
  return cantidadVocales
}

function extraerVocales(texto) {
  const expresionVocales = /[A, E, I, O, U]/gi
  
  const vocales = texto.match(expresionVocales)
  const vocalesFiltradas = vocales.filter(vocal => vocal !== ' ');
  return vocalesFiltradas
}


/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. 
La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad 
de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, 
caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/

const crearClase = () => {
  return class Clase{
    static contadorInstancias = 0
    constructor(texto){
      this.texto = texto
      Clase.contadorInstancias++ 
    }

    contadorPalabras(){
      if(typeof this.texto !== "string") return -1

      const palabras = this.texto.split(" ")
      return this.texto === "" ? 0 : palabras.length
    }

    hayNumeros(){
      if(typeof this.texto !== "string") return -1

      const numeros =  extraerNumeros(this.texto)
      return Boolean(numeros)
    }
  }
}


function extraerNumeros(texto) {
  const expresionNumeros = /[0-9]/gi
  
  const numeros = texto.match(expresionNumeros)
  return numeros
}



module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
