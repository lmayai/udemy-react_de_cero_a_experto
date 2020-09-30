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
```js```