// VARIABLES y constantes
let valorDado = 5;
valorDado = 4;
var nuevo = 3;

if (true) {
  var nuevo = 2;
  const valorDado = 3;
  console.log(valorDado, nuevo);
}

console.log(valorDado, nuevo);
console.log('No hay 2 constantes en el mismo scope que se llamen igual, por tal está permitido')
console.log('Si se usa const o let, se pueden declarar y respetan su valor en el scope');
console.log('Con var, el valor es global al scope, por tal su valor cambio globalmente');