# Service Music

Servicio de Node para obtener listado de música desde Spotify
construido con Node - Typescript - MongoDB

### Instalación

Se debe contar con las siguientes herramientas:

* Docker
* Docker-compose

### Tecnologías

* NodeJs
* Redis (Caché)
* MongoDB
* Docker


### Endpoints disponible

Lista de endpoints disponible para nuestro servicio

Search Album:
```
http://localhost:3005/album/search

Method: POST

{
    "q": "Michael Jackson"
}
```

Add Album in favorites:
```
http://localhost:3005/favorites/add

Method: POST

{
    "id": "xyz123"
}
```

Delete Album of favorites:
```
http://localhost:3005/favorites/delete

Method: POST

{
    "id": "xyz123"
}
```

Get all Album of favorites:
```
http://localhost:3005/favorites/get

Method: GET
```

La aplicación funciona en el puerto 3005, antes de lanzar el docker
se debe tener ese puerto disponible para que no colisione.

### Lanzamiento de la aplicación

```
docker-compose up -d
```

Esperar por el log de la conexión a la base de datos para empezar a usar.


### Notas adicionales

Como problemas al respecto del desarrollo de la aplicación solo se
me hizo corto el tiempo del access_token de parte de la API de Spotify
sin embargo esto se pudo solucionar efectivamente gracias a Redis y su
excelente usabilidad en el tema de caché.

Documentación de Spotify es un poco desordenada en cuanto a conseguir los
recursos de ejemplos.

![skywalker](./assets/music.jpeg "Jedi")

