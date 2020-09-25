// Des Arrays

const personajes = ['goku', 'vegetta', 'krilin']
console.log(personajes);

// En la desestructuración si importa el orden
const [ p1 ] = personajes;
console.log(p1);

// Para extrae solo a vegeta, debe ignorarse
const [, p2] = personajes;
console.log(p2);

const retornaArreglo = () => {
  return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


// Crear una funcion useState, que reciba un valor y retorne un arreglo que tenga un valor y una funcion
const useState = (valor) => {
  return [valor, () => {console.log('Hola', valor)} ];
}
const arr = useState('goku');
arr[1](); //Llama a hola mundo

// desestructurando

const [nombre, setNombre] = useState('juan');
console.log(nombre);
setNombre();