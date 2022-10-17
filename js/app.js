/**
 ** añadirFechaActual() imprime en pantalla la fecha actual
 **/
function añadirFechaActual() 
{
	const fecha = new Date();
	document.getElementById("date").innerHTML = fecha;
}