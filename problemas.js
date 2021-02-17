//Resolviendo el Problema Nro 1
let cade = prompt("Ingrese las cadenas que desee, como por ejemplo: aba aa ad vcd aba");
document.write("<b>"+"Las cadenas con mayor tamaño son: "+"</b>");
document.write("<p><b>"+ cadenasLargas(cade)+"</b></p>");
function cadenasLargas(cad)
{
	let cadenas = cad.split(" ");
	let tamaño=0;
	let cadenas_largas=[];
	for(let i=0;i<cadenas.length;i++)
	{
		if(cadenas[i].length>tamaño)
		{
			tamaño=cadenas[i].length;
		}
	}
	for(cadena of cadenas)
	{
		if (cadena.length==tamaño) 
		{
			cadenas_largas.push(cadena);
		}
	}
	console.log(cadenas_largas);
	return cadenas_largas;
}
