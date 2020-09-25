/** ASYNC AWAIT
 * Nueva forma de manejar promesas
*/

// Como promesa
const getImagen = () => {
  return new Promise( (res, rej) => {
    res('https://media2.giphy.com/media/')
  });
}
getImagen().then(console.log)

// Pero con async, si a una funcion se le pone la palabra async, se vuelte una problema
const getImageAsync = async () => {
  return 'https://media2.giphy.com/media/';
}
getImageAsync().then(console.log)


/// Usando el ejercicio anterior. Para trabajar el await, es necesario usar el async
const getImagenGiphy = async () => {
  try {
    const apiKey = 'sBvJIwCWxYN9dzd2m4CVxrxA4pEJxG0e';
    const urlApi = 'api.giphy.com/v1/gifs/random';
    const resp = await fetch(`http://${urlApi}?api_key=${apiKey}`);
    const data = await resp.json();
    const { url } = data.data.images.original
    const image = document.createElement('img');
    image.src = url;
    document.body.append(image)
  } catch (error) {
    console.error('ERROR!')
  }
}

getImagenGiphy();