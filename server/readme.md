Dentro de esta carpeta se incluyen los archivos DOCKERFILE y .dockerignore, 
- El Archivo Dockerfile es el principal a la hora de la ejecucion de esta aplicacion dentro de un contenedor, ya que posee las caracteristicas principales de todo lo que debe llevar y los prerequisitos del contenedore asi como comandos que deben ser ejecutados por el contenedor y va de la siguiente forma 

# Imagen que el contenedor usara para ejecutar las aplicaciones 
 FROM node:16

# Directorio local en donde se ubicara la aplicacion (recordemos que docker corre en maquinas virtuales linux)
WORKDIR /usr/src/app

# Instalacion de todas las dependencias 
# En este punto se puede copiar un archivo que contenga todas las dependencias de la aplicacion usando el comando COPY [origen] [destino]
COPY package*.json ./

# en RUN escribiremos cualquier comando que se requiera como prerequisito o como obligatorio para el funcionamiento de la aplicacion
RUN npm install

# De nuevo copiamos toda la aplicacion cada punto significa la carpeta donde esta el dockerfile a el WORKDIR
COPY . .

# Este comando se usa para definir el puerto por defecto de la aplicacion si es que asi se requiere 
EXPOSE 4000

# Por medio de este comando ejecutaremos las lineas de codigo que se necesiten para ejecutar la aplicacion 
CMD [ "node", "server.js" ]

- En el archivo .docker ignore tenemos todos los documentos que se ignoraran, esto con el fin de no sobrecargar la imagen y no gastar espacio en disco 

- Una vez reconocidos estos archivos, por medio de la consola CMD de Windows, o Terminal de Unix, con permisos de administrador, procederemos a ubicarnos en la ruta donde tengamos la aplicacion junto con el docker file (deben estar siempre juntos, no es una obligacion pero sirve para evitar tener muchos docker files en casos de muchas imagenes) y ejecutamos la siguiente linea 


docker build <ruta de la aplicacion, en caso de estar en el mismo directorio del docker file se pone .> -t (significa tag y ayuda a crearle un nombre a la imagen) 

este comando se lee de la siguiente manera 

docker build . -t <usuario de docker>/{nombre de la imagen}

- una vez finalizado el proceso de creacion verificamos si la imagen quedo creada con nuestro nombre 
- ya luego procederemos a crear nuestros contenedores usando la imagen creada con el dockerfile