# Introducción

## Que es React?
- Librería que permite crear apps.
- Es una librería declarativa.
- Es muy eficiente.
- Cualquier cambio que se haga, solo cambia el elemento unico en el DOM.
- Es predecible.
- Los componentes pueden tener estados, todas las apps se pueden divir en pequeños componentes.
- Server-side con Node.
- Apps móviles con React Native
- Apps de escritorio con Electron

La app más sencilla en REACT
```js
const divRoot = document.querySelector('#root');
const h1Tag = <h1>Hola Mundo</h1>;
ReactDOM.render(h1Tag, divRoot);
```
COn el selector se lloma una etiqueta con id root, y el render lo que hace es que pasa el elemento html en esa etiqueta HTML.

Lo anterior se conoce como **JSX: JS + XML**

Perfectamente se podría construir el código así:
```js
const h1Tag = document.createElement('h1', null, `Hola, soy ${nombre}`);
```

*Pero con JSX es posible asignarle a una constante de JS las etiquetas HTML.*


## Primeros pasos con React
https://gist.github.com/Klerith/b0111f52ba16451d095f38d4c995605b

React es una libreria, por tal se puede importar como una referencia directa dentro del HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <!-- Cargat React -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <title>Curso de React</title>
</head>
<body>
  <div id="root"></div>
  <script >
    const h1Tag = <h1>Hola mundo</h1>;
    //Code here
  </script>
</body>
</html>
```
Las 3 lineas son la de React, la de ReactDOM y la de babel. A pesar de que se intente usar como jsx no es posible y saca error. 

Para que funcione se requiere el uso de babel, el cual hará la traducción del script moderno a uno que interpreste el navegador. Por tal es necesario usar el script como tipo babel. **Por tal babel es necesario para el uso de REACT**
```html
<script type="text/babel"></script>
```

El script para poder utilizar React sería el siguiente:
```html
<script type="text/babel">
  const root = document.querySelector('#root');
  const h1Tag = <h1>Hola mundo</h1>;
  ReactDOM.render(h1Tag, root)
</script>
```
Lo anterior es el poder increíble que tiene React, el cual es el manejo simple del DOM.

- Con React también es muy fácil imprimir constantes, sería del siguiente modo
```js
const nombre = 'Goku';
const h1Tag = <h1>Hola soy {nombre} </h1>;
```
Donde el solo uso de **{}** permite imprimir el valor de estas.


## Introducción a BABEL
Babel funciona en el background al crear apps de React. Babel permite utilizar caraterísticas actuales y modernas de JS y utilizarlos en navegadores que no lo soporte.

Para enternder babel utilizaremos su herramiento en línea. https://babeljs.io/

- Por ejemplo, el uso de templates solo es del JS moderno, un código que luce así:
```js
const suma = `1 + 1 = ${1+1}`;
```

Babel lo traduce a este string normal concatenado con +:
```js
const suma = '1 + 1 = ' + (1+1);
```
*NOTA: El anterior código es completamente compatible con cualquier navegador*

- Otro ejemplo puede ser el siguiente, donde queremos hacer *undefined.length*:
```js
const respApi = {
  personajes: ['goku', 'vegeta'] 
}
console.log(respApi.personajes?.length)
```
Para lo anterior babel debería hacer una traducción de lo anterior de este modo.
```js
const respApi = {
  personajes: ['goku', 'vegeta'] 
}
console.log((_respApi$personajes = respApi.personajes) == null ? void 0 : _respApi$personajes)
```

**Se debe tener en cuenta que React no depende absolutamente de Babel, Babel se usa como una herramienta para darle mayor compatibilidad a las app en los navegadores, y permitir el uso de JS moderno.**

