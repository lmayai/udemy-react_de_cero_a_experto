# Testing GifExpert
Es necesario tener Enzyme y Enzyme-to-json en la sección 05

Las pruebas se harán sobre la app giExpertApp dentro de la sección 06

- Dentro de src crear la carpeta *tests/*

Y configurar Enzyme
> npm i --save-dev enzyme enzyme-adapter-react-16
> npm install --save-dev enzyme-to-json

Luego el setupTests.js
```js
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
```



```js```
```js```
```js```
```js```
```js```
```js```
