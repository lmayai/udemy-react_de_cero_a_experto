// ARREGLOS
/** Es una coleccion de información dentro de una misma variable */

const arreglo = new Array();
console.log(arreglo)

const a1 = []; // se prioriza esta forma de uso
const a2 = new Array(100); // se usa esta para un tamaño fijo

console.log(a2);

/**
 * no se recomineda el uso de push para agregar valores ya que modifica el objeto original
 * PAra insertar se usa el operador spread.
 */

const a3 = [1, 2, 3];
const a4 = a3;
a4.push(4);
console.log('a3;',a3);
console.log('a4:',a4);
console.log('El push modifico ambos, ya que como es un obejo, si se copio la referencia')

//usando el spread y no el push, se haría así
const a5 = [...a4, 5];
console.log('a4;',a4);
console.log('a5:',a5);
console.log(`Con el operador spread, se hace la copia del obejto y
 luego se hace el push del nuevo valor deseado. Esta es la manera correcta de hacerlo`);

console.log('El operador spreasd extrae la informacion')


// USO DE MAP

const a6 = a5.map(function(item) {
  return item * 2;
});
console.log('a6:', a6);
console.log('El uso de maps permite modificar el valor original, Por tal map crea un nuevo arreglo');
console.log('Map rompe con la copia de la referencia creando un nuevo espacio de memoria')
