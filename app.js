let conversion = Number(prompt("Ingresa el numero de la conversion que quieras hacer: \n 1 - Dolar a Pesos Arg \n 2 - Pesos Arg a Dolar"))

//FUNCIONES

function argDolar(){
    let numero = Number(prompt("Ingrese el dinero en digitos que quiere convertir:"))
    return (numero * 270);
}
function dolarArg(){
    let numero = Number(prompt("Ingrese el dinero en digitos que quiere convertir:"))
    return (numero / 270);
}


if (conversion === 1){    
    alert("tus dolares son : " + argDolar() + " pesos") 
}
else if (conversion === 2){
    alert("tus pesos son : " + dolarArg() + " dolar")
}
else{
    alert("Ingresaste un dato incorrecto, refresca la pagina para volver a ejecutar.")
}