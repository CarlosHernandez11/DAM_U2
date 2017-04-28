import {Cadena} from './cadena';
import {Numero } from './numero';

let cadena : Cadena;
let numero : Numero;
cadena = new Cadena("pedro pica papas con un pico");
console.log("-------------------Probando la clase cadena ----------------------------");
console.log("La cadena: ", cadena.text);
console.log(" Es palindromo: ", cadena.palindromo);
console.log(" Numero de vocales: ",cadena.vocales);
console.log(" Numero de palabras: ",cadena.palabras);
console.log(" Numero de letras: ",cadena.letras);
console.log("-------------------Probando la clase numero ----------------------------");
numero = new Numero(7);
console.log("El numero: ", numero.valor);
console.log("Sumado con 10:", numero.sumar(10));
console.log("Restando con 10:", numero.resta(10));
console.log("Factorial: ",numero.factorial(numero.valor));
console.log("Es primo: ",numero.primo);