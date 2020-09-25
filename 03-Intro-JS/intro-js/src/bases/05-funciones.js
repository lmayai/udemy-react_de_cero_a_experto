// funciones


console.log(saludar0())
//console.log(saludar1())
//console.log(saludar2())
console.log('se puede observar que saludar 1 y saludar 2 no están definidas');
/**
 * Se puede observar que saludar 1 2 no estan definidas, ya que estas son asginadas y no declaradas.
 * Cuando la funcion se asigna a una variable, el hoisting o levantamiento no permite reconocerla
 * Pero saludar0 si la reconoce, ya que en este caso la funcion se declara directamente
 */

function saludar0() {
  return 'hi'
}

// Se pueden asignar funciones a variables
const saludar1 = function() {
  return 'hi';
}

// Esto es una funcion de flecha - arrow function
const saludar2 = () => 'hi';

const getUser = () => ({
  user: 'pp',
  pass: 'tt'
});

console.log( getUser() );
console.log('para retornar un objeto se usan los parentesi');
// Para retrnar un obejto, debe ponerse entre parentesis


const getUserActivo = (name) => ({
  id: 12,
  user: name,
})

const uActivo = getUserActivo('yy');
console.log(uActivo);
