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

## useEffect
El useEffect es un hooks que permite ejecutar cierto código siguiendo unas dependencias. 
Es muy probable que si se llama endPoints al cargar el componente, este se llame siempre que se actualice algo dentro de este. 

Para evitar que solo se haga el llamado una única vez, se usa el *useEffect*. este recibe un callback y un arreglo de dependencias.
```js
useEffect(() => {
  getGifs();
}, []);
```

Este useEffect con un [] vacio es exactamente el **componentDidMount** del React con clases. Osea, ejecuta cuando el componente es renderizado por primera vez

## Envio de todas las props con spread operator
Es posible que se quiera enviar toda la información de un objeto a un subcomponent. Imaginando que *images* es un arreglo de objetos y cada objeto tiene *{url, id, title}*. Es posible pasar todas las propiedades con el spred operator como se ve acontionuación.
```js
{
  images.map((img) => (
    <GifGridItem
      key={img.id}
      {...img} 
    />
  ))
}
```

Luego el component las recibe así:
```js
export const GifGridItem = ({id, title, url}) => {}
```

## Aplicar estilos
En React no es posible usar class dentro de los components. Para eso, es necesario cambiar class, por  *className*

## Aplicar efectos como dependencias
Es posible que si dentro de useEffect se usa un parametro aparezca un warning *React Hook useEffect has a missing dependency: 'category'. Either include it or reove the dependencymove the dependency array  react-hooks/exhaustive-deps*

Para solucionar el warning basta poner como dependecia el parametro dentro del useEffect.
```js
useEffect(() => {
    getGifs(category)
      .then(setImages)
  }, [category]);
```

## Custom hooks
Es una forma de extraer logica de un componente, para reutilzzarla y que sea sencillo reutilizarla.
Por ejm, hay un useeffect para hacer una pteicion y almacenarla a unas imagenes.

Lo que se hará es un customHook que cuando el componente carga, haga la peticion fetch y haga la carga

- Se crea un carpta hooks/ y dentro un archivo llamado useFetchGifs. El *use* es una convensión para definir que es un hook. **Un hook no es más que una función**

Los Custom hooks, funcionan como funcitonal component. Pueden tener efetos, usar reducers, pueden usar contextos, etc
```js
export const useFetchGifs = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  setTimeout(() => {
    setState({
      data: [1,2,3,4,5],
      loading: false
    })
  }, 3000);

  return state;
}
```
En el hook, lo que se hace es almacenar un state. Ese state tiene variables que pueden luego ser usadas dentro de mi component.
```js
export const GifGrid = ({category}) => {

  const { loading } = useFetchGifs();
  
  return (
    <>
      <h3>{category}</h3>
      { loading ? 'Cargando...' : 'Cargado'}  
    </>
  )
}
```

Luego en ese custoom Hooks puedo tener
```js
useEffect(() => {
    getGifs(category)
      .then(images =>{
        setState({
          data: images,
          loading: false,
        })
      })
  }, [category]);
```

Donde luego en la data solo tengo las imagenes. y al retornar solo debo usarlas

```js
  const { loading, data: images } = useFetchGifs(category);
```

## Para animaciones
https://animate.style/



```js```
```js```
```js```
```js```
```js```