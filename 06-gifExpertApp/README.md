# 06 Custom Hooks

API KEY: ZZetT6F5ek0XoBAyW6Lq2EE1c5bFcieT

## Listas

Se usa un map. Respecto al key debe ser +unico, y no debe ser el index.
```js
{
  categories.map( (category) => {
    return (
      <li key={category}>{category}</li>
    )
  })
}
```

## Inputs
Para manejar los input se podría utilizar de esta forma:
```js
export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('Hola Mundo');

  return (
    <>
      <input
        type="text"
        value={inputValue}
      />
    </>
  )
}
```
Una vez cargue de este modo, en la consola se obtiene un error que dice: *Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.*

Lo que significa que al editar el input no se puede cambiar, ya que no se erstá  utilizando el onChange

Para modificarlo basta con agregar el onChange y setiar el nuevo valor
```js
export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('Hola Mundo');

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </>
  )
}
```
Con esto se toma el target.value del elemento y se utiliza el hooks.

- Para formularios!
```js
const handleSubmit = (e) => {
  e.preventDefault();
}

<form onSubmit={handleSubmit}>
</form>
```
En formulario es importante destacar que para evitar una actualización de la página, es necesario un preoventDefault del evento

- Evitar useState sin inicializar. Si no se inicializa obtenemos el siguiente error *Warning: A component is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component.*
```js
const [inputValue, setInputValue] = useState();
```

Para solucionarlo, basta con agregar comillas vacias.
```js
const [inputValue, setInputValue] = useState('');
```
```js```
```js```
```js```
```js```
```js```
```js```
```js```
```js```