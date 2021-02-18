//Resolviendo el Problema Nro 2
let cade = prompt("Escriba una cadena");
document.write("<b>"+"La nueva cadena es:"+"</b>");
document.write("<p><b>"+ invertirparentesis(cade)+"</b></p>");
function invertirparentesis(cadena) 
{
    var cadenaFinal = "";
    while(cadena.indexOf('(') > -1) 
    {    
        if(cadena.charAt(0) !== '(' && cadena.charAt(0) !== ')') 
        {
            cadenaFinal = cadenaFinal + cadena.charAt(0);
            cadena = cadena.substring(0+1,cadena.length);
        } 
        else 
        {    
            if(cadena.charAt(0) === ')') 
            {
                cadena= cadena.substring(0+1,cadena.length);
            } 
            else 
            {
                var abriendoParenSiguiente = cadena.indexOf('(', 1);
                var cerrandoParen = cadena.indexOf(')');
                if(abriendoParenSiguiente !== -1 && abriendoParenSiguiente < cerrandoParen) 
                {                    
                    cadenaFinal = cadenaFinal + cadena.substring(abriendoParenSiguiente+1, cerrandoParen).split('').join('');
                    var part_1 = cadena.slice(0,abriendoParenSiguiente);
                    var part_2 = cadena.substring(cerrandoParen+1, cadena.length);
                    cadena = part_1 + part_2;
                } 
                else 
                {
                    var cadenaInvertida = cadena.substring(1,cerrandoParen);
                    cadenaFinal = cadenaFinal + cadenaInvertida.split('').reverse().join('');
                    cadena = cadena.substring(cerrandoParen+1, cadena.length);
                }
            }  
        }
    }
    cadenaFinal = cadenaFinal + cadena;
    return cadenaFinal;
}