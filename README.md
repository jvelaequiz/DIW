Módulo: Desarrollo de Aplicaciones Web
Asignatura: Desarrollo de Interfaces Web
Tarea: 1
Alumno: jvelaequiz
<------------------------------------------------------------------------------------->
16/10/22: Initial Commit
16/10/22: Segundo Commit
	-Escribo estas lineas en el README.md
17/10/22: Tercer Commit
	-Escribo los comandos de preparación de Github en nuestro equipo
17/10/22: Cuarto Commit	
	-Pongo todos los ficheros en carpetas.
	-Explico como he desplegado la web en Netfily y copio aquí los logs del despliegue
<------------------------------------------------------------------------------------->
### Actividad 1  ###
# Comandos de instalación de Github por orden:
# Web de ayuda:
http://git-cheatsheet.com/
# Instalo Git en mi equipo Windows y compruebo su versión
git --version
# Configuramos Github en nuestro equipo
git config --global user.name "jvelaequiz"
git config --global user.email "jvelaequiz@educacion.navarra.es"
# Ahora descargo el repositorio creado online para subir los cambios desde mi equipo
git clone https://github.com/jvelaequiz/DIW.git
# Después del clone, ya tengo mi carpeta con control de version
# Modifico los archivos y veo si se han recogido los cambios
git status
# Preparamos los archivos de la carpeta del repositorio para el siguiente commit
git add .
# Guardamos los cambios en nuestros equipo. El siguente comando nos pedirá un mensaje de información de cambios.
git commit -a
# Subimos los cambios al servidor de Github.
git push

### Actividad 2  ###
Descripción:
Siguiendo el Link publicado en la tarea, se nos reenvia directamente a la web de Netlify.
La primera pantalla que vemos es una pagina de Login. Se nos pide que nos autentifiquemos con algunas de las opciones mostradas. Yo selecciono la opción de Github. A continuación, selecciono el repositorio de la asignatura. Pulsamos en continuar con la instación y automaticamente, un robot intentará desplegar la sencilla web creada. En mi caso, la web consta de dos archivos. Una página index.html y su script app.js para mostrar la fecha actual en pantalla cuando pulsamos un botón.
La tarea Deploying your site tarda muchos minutos en ejecutarse.
Copio Aqui los Logs:
10:24:29 PM: Build ready to start
10:24:31 PM: build-image version: 9289b698a503f132b265bd089ab40ce1d6f9e65e (focal)
10:24:31 PM: build-image tag: v4.12.0
10:24:31 PM: buildbot version: 2510ae842d7cc96532da2c05a74ba836f3e7f056
10:24:31 PM: Fetching cached dependencies
10:24:31 PM: Failed to fetch cache, continuing with build
10:24:31 PM: Starting to prepare the repo for build
10:24:31 PM: No cached dependencies found. Cloning fresh repo
10:24:31 PM: git clone https://github.com/jvelaequiz/DIW
10:24:31 PM: Preparing Git Reference refs/heads/main
10:24:32 PM: Parsing package.json dependencies
10:24:32 PM: No build steps found, continuing to publishing
10:24:32 PM: Starting to deploy site from '/'
10:24:32 PM: Creating deploy tree 
10:24:32 PM: Creating deploy upload records
10:24:33 PM: 3 new files to upload
10:24:33 PM: 0 new functions to upload
10:24:33 PM: Uploading Cache of size 7.2KB
10:24:33 PM: Starting post processing
10:24:33 PM: Finished processing build request in 2.09709438s
10:24:33 PM: Post processing - HTML
10:24:33 PM: Post processing - header rules
10:24:33 PM: Post processing - redirect rules
10:24:34 PM: Post processing done
10:24:36 PM: Site is live ✨
Dirección Web:
https://deluxe-piroshki-5a0532.netlify.app/
