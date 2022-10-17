Módulo: Desarrollo de Aplicaciones Web
Asignatura: Desarrollo de Interfaces Web
Alumno: jvelaequiz
Actividad 1

16/10/22: Initial Commit Date 
16/10/22: Segundo Commit Date 
	-Escribo estas lineas en el README.md
17/10/22: Tercer Commit Date: 
	-Escribo los comandos de preparación de Github en nuestro equipo

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

