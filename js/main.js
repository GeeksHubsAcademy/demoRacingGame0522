
const screenSwitch = (pantallaDestino) => {

    // let actual = document.getElementById(pantallaActual);
    let destino = document.getElementById(pantallaDestino);
    destino.style.display = "flex";
    // actual.style.display = "none";
    
    // if(numeroPantalla == "pantalla2"){
    //     document.getElementById("pantalla1").style.display = "none";
    //     destino.style.display = "block";
    // } else {
    //     document.getElementById("pantalla2").style.display = "none";
    //     destino.style.display = "block";
    // };

    let arrayPantallas = ["pantalla1","pantalla2","pantalla3","pantalla4","pantalla5"];

    for(let pantalla of arrayPantallas){
        if(pantalla != pantallaDestino){
            document.getElementById(pantalla).style.display = "none";
        };
    };
   
};