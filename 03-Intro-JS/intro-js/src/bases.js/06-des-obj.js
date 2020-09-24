// DEsestructuración de objetos!
// asigación desestructurante

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

const persona = {
  n: 'jan',
  ap: 'pee',
  clave: '123'
};

// es posible extraer y renombrar
const { n, ap: apellido, } = persona;

console.log( persona.n )
console.log( persona.ap )
console.log( n )
console.log( apellido )



// CON FUNCIONES
// Donde es posible definir valores por defecto
const showPersona = ({n, poder=12}) => {
  console.log('n', n, ' poder:', poder)
}
showPersona(persona);



// Tambien es posibe usar el uso de contextos!!!!!
const useContext = ({clave, n, poder=12}) => {
  return {
    nombreAv: n,
    claveAv: clave,
    latitud: {
      norte: 12,
      sur: 12
    }
  }
}

const { nombreAv, claveAv , latitud: { norte, sur}} = useContext(persona);

console.log(nombreAv, claveAv, norte, sur);

// Si yo quisiera extraer ahora esas propiedades
