/**
 * OPERADOR CONDICIONAL TERNARIO
*/

const activo = true;

let msg1 = '';

if (activo) {
  msg1 = 'Activo';
} else {
  msg1 = 'Inactivo';
}
console.log(msg1);

// En vez de usar muchos condicionales, solo se usa el condicional ternario
const msg2 = (!activo) ? 'Activo' : 'Inactivo'; 
console.log(msg2);


// Otra posibilidad es si solo se quiere usar cuando se cumple una +unica condicion
const msg3 = (activo) && 'Activo';
console.log(msg3)
