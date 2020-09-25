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
  - los undefined o null tampoco.

Para imprimir objetos, se podría hacer lo siguiente:
```js
<>
  <p> {JSON.stringify(variable)} </p>
  <pre>{JSON.stringify(variable, null, 3)}</pre>
  <pre> variable </pre>
</>
```

## Propiedades enviadas a los componentes
>> Mirar en las devtools de chrome la pestaña components.

Al revisar el componente, se pueden observar las *props*. Las props son aquellos valores que se envian desde un componentes padre a un componente hijo. Esas props pueden definirse también como los valores de entrada de un componente.

- Para enviar propiedades al componente.
```js
ReactDOM.render(<PrimeraApp saludo='Hola soy goku'/> , divRoot);
```

- Luego para poder usar las props lo recomendado es desestructurar
```js
const PrimeraApp = ({ saludo }) => {
  return (<h1> {saludo} </h1>)
}
```

**Pero, qué pasa si no hay saludo, o si es undefined!**

- Es posible definir un valor por defectp
```js
const PrimeraApp = ({ saludo = 'Hola mundo' }) => {
}
```

- También es posible definir que una propiedad sea obligatoria

## PropTypes
Con los PropTypes es posible definir que una propiedad sea obligatoria o que tenga un tipo en específico.

Se importa así
```js
import PropTypes from 'prop-types'
```

Y se utlizan así
```js
PrimeraApp.propTypes = {
  mensaje: PropTypes.string.isRequired,
  saludo: PropTypes.string
}
```

En lo anterior se puede observar que *mensaje* es una propiedad que es **string** y es obligatoria y que *saludo* debe ser un **string** pero no es obligatorio.

Los errores que obtendríamos serían en la consola, pero no detienen la ejecución.

## Default Props
Otra manera de definir pro defecto una propiedad es así
```js
PrimeraApp.defaultProps = {
  description: 'Esta descripcion es por defecto'
}
```

## Snippets para crear un functional component con propTypes
> rafcp

```js```
```js```
```js```
```js```
```js```
```js```