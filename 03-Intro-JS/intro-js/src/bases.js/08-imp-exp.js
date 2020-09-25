// Import Export y funciones comunes de arreglos
// https://gist.github.com/Klerith/4aeb99d31aedbc29ff4d54bbb77d2d7f

// Si necesito trabajar con lo que hay en data/heores y traerlo aqui, como lo hago?

//Forma 1: No default dentro de las llaves
import { heroesNoDefault } from '../data/heroes';

//Forma 2: sin necesidad de lklaves: Se exporta como default
import heroesDefault from '../data/heroes';

//Forma 3: exportacion de objeto definiendo default
import heroes, { owners } from '../data/heroes2';

console.log(heroesNoDefault);
console.log(heroesDefault);
console.log(heroes);
console.log(owners);

// ----- Luego con funciones

// USO DE FIND: Lo que está dentro del find es llamado CALLBACK
// El find solo retorna el primer elemento que cumple la condición
const getHeroById = (id) => {
  return heroesNoDefault.find( (hero) => hero.id === id );
}

console.log('getHeroById', getHeroById(1));

//USO de FILTER: puede retornar mas de una elemento, retorna todos los que cumplen la condición
const getHerosByOwner = (owner) => {
  return heroesDefault.filter( (hero) => hero.owner === owner);
}

console.log('getHerosByOwner', getHerosByOwner('DC'));
