/** FETCH API
 * https://developer.mozilla.org/es/docs/Web/API/Fetch_API
 * https://developers.giphy.com/
*/

const apiKey = 'sBvJIwCWxYN9dzd2m4CVxrxA4pEJxG0e';
const url = 'api.giphy.com/v1/gifs/random';

const peticion = fetch(`http://${url}?api_key=${apiKey}`);

peticion
  .then( resp => resp.json())
  .then ( ({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)
  })
  .catch( console.warn )

//Lo anterior se usó para agregar una imagen al HTML, pero con react es mucho más simple