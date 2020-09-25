# REact primeros pasos

## Qué es un componente
Es una pequeña pieza de código encapsulada y reutilizable que puede tener un estado o no.

## Qué es el estado?
Imaginemos un formulario:
- Cuando empieza los campos están vacios.
- Si cambiamos un campo, cambia el estado.

Por tal el estado es *como se encuentra la información del componente en un punto determinado de tiempo* 

## Estructura directorios
- node_modules: contiene los módulos de node que permiten ejecutar la app en react
- public: contiene una página web común y corriente. Tiene algunas configuraciones para una PWA.
- src: Todo el código

Una primera app en ract sería así. en el index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';

const saludo = <h1>Hola mundo</h1>;
const divRoot = document.querySelector('#root');

ReactDOM.render(saludo, divRoot);
```