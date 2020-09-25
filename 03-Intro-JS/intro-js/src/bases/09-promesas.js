// PROMESAS: 
// ejm: un jefe pregunta por un reporte, y yo le prometo que mañana se lo tengo list0
// al tenerlo listo notifico y el jefe recibe si si o no.

import { getHeroById } from './data/heroes';

const promesa = new Promise( (resolve, reject) => {
  setTimeout( () => {
    console.log('2 seg luego') 
    resolve(getHeroById(2));
    //reject('errorzaso');
  }, 2000);
});


promesa
  .then( (recibeDeLaPromesa) => {
    console.log('luego de la promesa al ejecutar el RESOLVE:', recibeDeLaPromesa)
  })
  .catch( (error) => {
    console.warn('ERRORRR', error);
  })



/// Es muy comun tener un manejador de la promesa. Por tal la funcion retorna una promesa.

// Forma 1 de retornar
const getHeroByIdAsync = (id) => {
  const promesa = new Promise( (res, rej) => {
    setTimeout(() => {
      res(getHeroById(id))
    }, 3000);
  });
  return promesa;
}

// Forma 2 de retornar
const getHeroByIdAsyncReturnExplicito = (id) => {
  return new Promise( (res, rej) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if ( hero) {
        res(hero);
      } else {
        rej('no existe el heroe')
      }

    }, 3000);
  });
}

getHeroByIdAsync(5).
  then( (hero) => {
    console.log('hero:', hero);
  })

getHeroByIdAsyncReturnExplicito(1)
  .then( (hero) => console.log('hero:', hero))
  .catch( (err) => console.warn(err) )


// Es posible también usar directamente el parametro recibido
// Si el argumento recibido es enviado a otra función. Solamente mandan la referencia a la función.
getHeroByIdAsyncReturnExplicito(8)
  .then(console.log)
  .catch(console.warn)