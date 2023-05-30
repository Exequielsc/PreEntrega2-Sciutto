// Paso 1: Definir un arreglo vacío para almacenar las frutas
var frutas = [];

// Paso 2: Definir un constructor para crear objetos de frutas
function Fruta(nombre) {
  this.nombre = nombre;
  this.cantidadLetras = nombre.length;
}

// Paso 3: Pedir al usuario que ingrese la cantidad de frutas que desea agregar (validar que sea un número)
var cantidadFrutas;
do {
  cantidadFrutas = parseInt(prompt("Ingrese la cantidad de frutas que desea agregar:"));
} while (isNaN(cantidadFrutas));

// Paso 4: Pedir al usuario que ingrese cada fruta y crear objetos de frutas con cantidad de letras automática
for (var i = 0; i < cantidadFrutas; i++) {
  var nombreFruta;
  do {
    nombreFruta = prompt("Ingrese el nombre de la fruta " + (i + 1) + ":");
  } while (!/^[a-zA-Z]+$/.test(nombreFruta)); // Validar que solo se ingresen letras (mayúsculas o minúsculas)
  
  var fruta = new Fruta(nombreFruta);
  frutas.push(fruta);
}

// Paso 5: Crear una función que reciba un arreglo y devuelva la cantidad de elementos que contiene
function contarElementos(arreglo) {
  return arreglo.length;
}

// Paso 6: Llamar a la función contarElementos y mostrar el resultado por consola
console.log("Cantidad de frutas:", contarElementos(frutas));

// Paso 7: Crear un objeto que represente una persona con propiedades como nombre, edad y profesión (validar que la edad sea un número)
var persona = {
  nombre: null,
  edad: null,
  profesion: null
};

do {
  persona.nombre = prompt("Ingrese su nombre:");
} while (!/^[a-zA-Z]+$/.test(persona.nombre)); // Validar que solo se ingresen letras (mayúsculas o minúsculas)

do {
  persona.edad = parseInt(prompt("Ingrese su edad:"));
} while (isNaN(persona.edad));

do {
  persona.profesion = prompt("Ingrese su profesión:");
} while (!/^[a-zA-Z]+$/.test(persona.profesion)); // Validar que solo se ingresen letras (mayúsculas o minúsculas)

// Paso 8: Acceder a las propiedades del objeto persona y mostrarlas por consola
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Profesión:", persona.profesion);

// Paso 9: Crear una función que reciba un arreglo y un elemento, y devuelva true si el elemento se encuentra en el arreglo, o false si no está
function buscarElemento(arreglo, elemento) {
  return arreglo.includes(elemento);
}

// Paso 10: Pedir al usuario que ingrese la fruta que desea buscar
var frutaBuscada = prompt("Ingrese la fruta que desea buscar:").toLowerCase(); // Convertir a minúsculas

// Paso 11: Llamar a la función buscarElemento para buscar la fruta ingresada en el arreglo frutas (convertir los nombres a minúsculas para comparar)
console.log("La fruta", frutaBuscada, "se encuentra en el arreglo frutas:", buscarElemento(frutas.map(fruta => fruta.nombre.toLowerCase()), frutaBuscada));

// Paso 12: Filtrar el arreglo frutas para obtener solo las frutas que contienen la letra "a"
var frutasConA = frutas.filter(function (fruta) {
  return fruta.nombre.toLowerCase().includes("a");
});

// Paso 13: Mostrar por consola las frutas que contienen la letra "a" y la cantidad de letras que tienen
console.log("Frutas con la letra 'a':");
frutasConA.forEach(function (fruta) {
  console.log(fruta.nombre + " - Cantidad de letras: " + fruta.cantidadLetras);
});

// Paso 14: Filtrar el arreglo frutas para obtener solo las frutas que no contienen la letra "a"
var frutasSinA = frutas.filter(function (fruta) {
  return !fruta.nombre.toLowerCase().includes("a");
});

// Paso 15: Mostrar por consola las frutas que no contienen la letra "a" y la cantidad de letras que tienen
console.log("Frutas sin la letra 'a':");
frutasSinA.forEach(function (fruta) {
  console.log(fruta.nombre + " - Cantidad de letras: " + fruta.cantidadLetras);
});