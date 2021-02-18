//Resolviendo el Problema Nro 3
let cad =prompt("Escriba una cadena");
function permutacionesCadena(cadena) 
{
    if(typeof cadena != 'string')
    {
        throw TypeError("El texto ingresado debe ser una cadena de caracteres.");
    }
    if(cadena.length <= 2)
    {
        return cadena.length===2? [cadena, cadena[1] + cadena[0]] : [cadena];
    }
    return cadena.split('')
        .reduce((a, c, i) =>
            a.concat(permutacionesCadena(cadena.slice(0,i) + cadena.slice(i+1))
                .map(v => c+v))
            ,[]);
}
try{
    console.log(permutacionesCadena(cad));
} catch (e){
    console.log('Error: $(e.message)');
}
function palindromo(per)
{
        per=per.replace(/ /g,"")
        for(var j=0;j<per.length;j++)
        {
            if(per[j]!=per[per.length-j-1])
            {
                 return false;
            }
        }
        return true;
}
let permutaciones=[];
permutaciones=permutacionesCadena(cad);
//console.log(permutaciones);
for(let i=0;i<permutaciones.length;i++)
{
    if(palindromo(permutaciones[i]))
    {
        document.write('La cadena '+'<p><b>'+cad+'</b></p>'+' se reordena a '+'<p><b>'+permutaciones[i]+'</b></p>'+' por lo cual es palindromo');
        break;
    }
    else
    {
        if(i+1==permutaciones.length)
            document.write('La cadena '+'<p><b>'+cad+'</b></p>'+' no es palindromo a pesar de intentar reordenarla');
    }
}