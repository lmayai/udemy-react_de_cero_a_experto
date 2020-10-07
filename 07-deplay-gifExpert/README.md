# Deploy a github pages

## hacer build al proyecto
> npm run build

*Nota: Para el start no es necesario el run, pero para el build si*

Dentro de la carpeta del proyecto, ahora se tiene una carpeta llamada build. Ese directorio es el que se desplega en un sitio web!.
Si se abre el index que hay dentro de la carpeta build, este no funcionará, ya que debe ser desplegado dentro de un servidor.

Es muy común y fácil montar un localhost dentro del equipo. Una forma es usar un paquete de node. https://www.npmjs.com/package/http-server

> npm install --global http-server


Si ahora se navega dentro de la carpeta build:
> http-server -o

Luego se abrirá de manera local en la dirección localhost corriendo la aplicación.


## Subirlo en github pages
1. Comprobar version de git
> git --version

2. configurar git, es la información que estará en el commit
> git config --global user.name "Leo"

> git config --global user.email "l@maya"

## Crear repo
> git init

> git add .

> git commit -m "msg"

Dentro del gitignore se ignoran archivo que no se suben al repositorio.

- Se renombrará la carpeta *build* por *docs*

Luegpo de crear el repo en linea. Se ejecuta lo siguiente

> git remote add origin https://github.com/lmayai/udemy-react-app-gif-expert.git

> git branch -M main

> git push -u origin main

Luego dentro de Settings en github del repo. en la sección de *Github pages* se selcciona la rama master y luego la carpeta de docs.

Luego quedó desplegado en https://lmayai.github.io/udemy-react-app-gif-expert/


## Error 404 al desplegar
Es muy probable que al desplegarlo se encuentre un 404, ya que no encuentra el prpoyecto. Para esto hayq eu cambiar el index.html de la carpeta docs

```html
<head>
  <meta charset="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-app" />
  <link rel="apple-touch-icon" href="/logo192.png" />
  <link rel="manifest" href="/manifest.json" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <title>Gif Expert App</title>
  <link href="/static/css/main.b842ff2b.chunk.css" rel="stylesheet">
</head>
```

**Hay que agregar el punto antes del /**

