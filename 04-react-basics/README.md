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

## Componentes
- Como notación los componentes se escriben con Upper Camel Case. es decir MiComponent.js
- Los componentes pueden estar basados a funciones o a clases.
  - Las funciones se llaman: Functional component, que antes eran las stateless components. Pero ahora con hooks ya pueden tener un estado.
  - *En la actualidad es lo más utilziado, los functional components* 

Un Functional component, luce así:
```js
import React from 'react';

const MyFuntionalComponent = () => {
  return <h1>My component</h1>
}

export default MyFuntionalComponent;
```

Es importante saber que si se va a retornar varios elementos html, debe enacpsularse en un elemento Fragment, y además JS solo retorna un objeto, por tal, debe estar entre paréntesis.
```js
const PrimeraApp = () => {
  return (
    <Fragment>
      <h1>HOLAAA mundo</h1>
      <p>Nombre: <b>Juancho</b></p>
    </Fragment>
  );
}
```
- En vez de *Fragment* se puede utilizar un div o cualquier etiqueta, pero Fragment no contiene información extra.
Fragment no se vería en el árbol de HTML, solo es a modo de agrupación

Otra forma de utilizar un Fragment es con etiquetas vacias

```js
const PrimeraApp = () => {
  return (
    <>
      <h1>HOLAAA mundo</h1>
      <p>Nombre: <b>Juancho</b></p>
    </>
  );
}
```

Si se desea usar EMMET en archivos JS, se debe incluir en settings.json
```json
"emmet.includeLanguages": {
  "javascript": "javascriptreact"
}
```

## Impresión de variables

Para imprimir variable se usan **{ }**
```js
const PrimeraApp = () => {
  const saludo = 'HOlaaa'
  return (
    <>
      <h1> { saludo } </h1>
    </>
  );
}
```

*** Consideraciones:
  - Los booleanos no los imprime
  - Los arreglos los pone juntos

Para imprimir objetos, se podría hacer lo siguiente:
```js
<>
  <p> {JSON.stringify(variable)} </p>
  <pre>{JSON.stringify(variable, null, 3)}</pre>
  <pre> variable </pre>
</>
```



```js```
```js```
```js```