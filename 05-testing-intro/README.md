# Sección 05 Pruebas unitarias y de integración - Intro

## Que son?
No son una perdida de tiempo. Manejaria un carro no probado por un fabricante?

## Tipos
- Unitarias: Enfocada en pequeañas piezas y funcionalidad.
- Integración: Enfocadas a como reaccionan varias piezas en cojunto.

## Características
- Fáciles de escribir
- Fáciles de leer
- Confiables
- Rápidas
- Principalmente unitarias

## AAA
PAsos que se aplican a las pruebas

### Arrange (arreglar)
Preparamos el estado inicial
- Inicializamos variables
- importaciones necesarias 

### Act (Actuar)
Aplicamos acciones o estímulos
- LLamar métodos.
- Simular clicks.
- Realizar acciones sobre el paso anterior.

### Assert (Afirmar)
Obsrevar el comportamiento resultante
- Observar si los resutlados son los esperados.
- EJ: que algo cambie, que algo increente o bien que nada suceda

## Como probar
**Todas las pruebas se harán en el counterApp**

Hay muchas formas de ordenar y colocar las pruebas. 

Hay un patron de diseño para pribar, uno es agragando una carpeta llamada tests dentro de *src*

tests/ 
  - demo.test.js

El nombre no es importante, pero si es importante el *test.js*. Ya que ese lo toma el test suit para correr las pruebas.

- Para correr las pruebas:
> npm run test -> El cual ejecuta react-scripts test

El test suit tomará todos los archivos que contengan y finalicen en test.js

Dentro del archivo se dentran funcionan *test*. Al instalar react con create-react-app ya viene configurado **jest**(se puede observar en el package Json)

https://jestjs.io/

### ToBe

- Una prueba luce así:
```js
test( 'Should be equal strings ', () => {
  
  // 1. Inicialización
  const mensaje = 'Hola Mundo';
  
  // 2. Estímulo
  const mensaje2 = 'Hola Mundo';

  // 3. Observar
  expect(mensaje).toBe(mensaje2);

});
```

Para obtener ayudas es bueno importar en los archivos lo siguiente
```js
import '@testing-library/jest-dom';
```

### toEqual
To Equal sirve para comparar objetos!! a diferencia de con toBe. toEqual analiza propiedad a propiedad.

```js
test('getUser should return an object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  })
```

### Testing con procedimientos asíncronos

Si se ejucata una prueba asincrona, a pesar de tener un assert que falle, la tarea pasa.
```js
test('getHeroeByIdAsync should return an hero', () => {
    getHeroeByIdAsync(1)
      .then( (hero) => {
        expect(true).toBe(false)
      })
  })
```
Esto ocurre por que los test son normalemnet sincronos, no asincronos. Como tal el test nunca termina ejecutando el assert.

Para lograr que si se ejecute se debe pasar un argumento al callback de la prueba, llamado **done**
```js
test('getHeroeByIdAsync should return an hero', (done) => {
  //promise here
})
```
Con solo agregar eso ya debe esperar a que la prueba termine.

Luego, cuando se llame el *done()* se finaliza la prueba
```js
test('getHeroeByIdAsync should return an hero', (done) => {
  done()
})
```

**- Para async await**

Basta con poner en la prueba async y await en la respuesta

```js
test('should getImagen return an url', async () => {
    const url = await getImagen();
    expect(typeof url).toBe('string')
  })
```

### Testing con React
Para probar un componente es posible utilizar 2 métodos:
- @testing-library/react
- Enzyme

Para utlizar Testing Library de react es necesario añadir un archivo en la carpeta *src* del app llamado setupTests.js. Que tendría lo siguiente:
```js
import '@testing-library/jest-dom/extend-expect';
```

Este permite ampliar las funciones del expect común de jest para analizar los componentes de react.

En la siguiente prueba lo que se hace es que al enviarle una propiedad al componente, este verifique que si la renderiza. La prueba sería así:

```js
test('should show the message "Primerita app"', () => {
  const saludo = 'Primerita app';
  const wrapper = render( <PrimeraApp mensaje={saludo} />);
  expect(wrapper.getByText(saludo)).toBeInTheDocument();
})
```

Debe resaltarse que la pruebe requiere las siguiente exportaciones: React, el método render() de testing library y el componente a renderizar como tal.
```js
import React from 'react'
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
```

***Una alternativa muy utilizada hoy en día, y la cual es más sencilla es utilizar Enzyme, en vez de utilizar testing-library. Donde Enzyme ya viene instalado. Testing library a parte no muestra muy claro cuales son los errores.***/


## Con Enzyme
https://enzymejs.github.io/enzyme/

https://www.npmjs.com/package/enzyme-to-json

Enzyme permite expandir las funcionalidades de Jest. Adem´s de ser más simple. Fue desarrolladoa por airbnb.
Permite conectarse con diferentes motores de pruebas cono *Karma*, *Mocha*. Al utilizar el create-react-app se utilizará *Jest*

- 1. Instalación en el proyecto para reaact 16
> npm i --save-dev enzyme enzyme-adapter-react-16


- 2. Agregar en el setupTests.js
```js
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```

- 3. Prueba con snapshots e importaciones
```js
import React from 'react'
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

test('Should show <PrimerApp /> con Enzyme', () => {
  const saludo = 'Hola mundo';
  const wrapper = shallow(<PrimeraApp mensaje={saludo}/>);
  expect(wrapper).toMatchSnapshot();
})
```
Cuando se ejecuta esta prueba, se crea dentro de la carpeta test una carpeta *_snapshots_*.

En esta carpeta aparece algo como lo siguiente
```js
exports[`Pruebas en <PrimeraApp /> Should show <PrimerApp /> con Enzyme 1`] = `ShallowWrapper {}`;
```
AL final aparece algo como *ShallowWrapper {}* lo cual no es conveniente y no servirá para hacer pruebas. Para que funcione, se necesita que en esa parte se obtenga una fotografía de lo que se está renderizando en el momento.

- 4. Para continuar es necesario una libreria llamada *enzyme-to.json*. Que siempre se instala como dependencia de desarrollo.
> npm install --save-dev enzyme-to-json

- 5. Luego haría falta hacer una configuración para utilizarlo. Donde se debe agregar lo siguiente al *setupTests.js*
```js
import { createSerializer } from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
```

Al ejecutar las prubeas que se tenían anteriormente, estas fallan. Mostrando que un Snapshot falló, ya que era un snapshot guardado previamente.

Para poder solucionar, luego de que se ejecute la prueba hay que actualizar el snapshot. Esto se hace presionando **u**

- 6. Ahora al visualizar el snapshot dentro de la carpeta se obtiene lo siguiente.
```js
exports[`Pruebas en <PrimeraApp /> Should show <PrimerApp /> con Enzyme 1`] = `
<Fragment>
  <h1>
     
    Hola Mundo
     
  </h1>
  <p>
     
    Hola mundo
     
  </p>
  <small>
     
    Esta descripcion es por defecto
     
  </small>
</Fragment>
`;
```
Lo cual significa que se obtuvo correctamente la fotografía del componente renderizado.

*NOTA: Si luego de correr una prueba que pasó, se modifica un componente, las pruebas fallarán ya que el snapshot (fotografía) es diferente en ese momento. Para lograr que vuelvan a pasar es necesario actualizar el snapshot.*

### Prubeas con Wrapper

- En el wrapper es posible hacer busquedas de los elementos renderizados.
```js
const textDescription = wrapper.find('small').text();
expect(textDescription).toBe(description);
```
Ese *find* funciona como el querySelector de js

```js```
```js```
```js```
```js```