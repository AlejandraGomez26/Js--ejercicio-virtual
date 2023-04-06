// En JavaScript el usuario a través de un prompt debería poder ingresar un número y este debería responderle con el nombre del apostol al que pertenece ese numero

let num = prompt('Ingresa un número del 1 al 12');
let apostol = ['Pedro', 'Andres', 'Santiago', 'Judas Tadeo', 'Santiago de Zebedeo', 'Juan', 'Mateo', 'Felipe', 'Tomás', 'Judas Iscariote', 'Bartolomé', 'Simón'];


if (1<=num && num<=12) {
  console.log (`El apóstol ${num} es ${apostol[num]}`);
} else {
  console.log ('Solo numeros del 1 al 12');
}
