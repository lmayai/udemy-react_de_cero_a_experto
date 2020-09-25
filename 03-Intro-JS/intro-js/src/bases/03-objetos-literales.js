// Objetos literales

const persona = {
  llave: 'valor',
  key: 'value',
  n: 'Tony',
  ap: 'Stark',
};

console.log('esto es un objeto literal: ', persona)
console.log('Todo objeto creado en JS tiene un prototype')

const newObj = {
  persona: persona,
}

const newObj2 = {
  persona,
}

console.log('Si el nombre de la propiedad tiene el mismo nombre de lo que se asginará, no es necesario escribirlo 2 veces');
console.log(newObj, newObj2);

console.log('para visualizar objetos, es posible usar console.table')
console.table(newObj)
console.table(persona)

const persona2 = persona;
/**
 * Esto copia la referencia del objeto, pero no hace una copia de sus valores. 
 * Por tal, si cambia un valor en uno de los objetos, también cambia en el otro 
 *  */ 
persona.n = 'Jorich';
console.log(persona, persona2); //SOn iguales
console.log('Son iguales persona y persona2, ya que copia la referencia del objeto');

//Operador Spread
console.log('OPERADOR SPREAD');
const persona3 = {...persona};
/**
 * Los 3 puntos toma todas las propiedades y las 'mete' en el nuevo objeto. 
 * Ahora es una copia y no una referencia 
 */
persona3.n = 'PEter';
console.log(persona, persona3);
console.log('Son diferente persona y persona3, ya que copio las props, pero no la referencia');

