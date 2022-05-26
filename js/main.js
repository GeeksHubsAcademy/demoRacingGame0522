
const screenSwitch = (pantallaActual,pantallaDestino) => {

    let actual = document.getElementById(pantallaActual);
    let destino = document.getElementById(pantallaDestino);

    destino.style.display = "block";
    actual.style.display = "none";
    
    // if(numeroPantalla == "pantalla2"){
    //     document.getElementById("pantalla1").style.display = "none";
    //     destino.style.display = "block";
    // } else {
    //     document.getElementById("pantalla2").style.display = "none";
    //     destino.style.display = "block";
    // };
   
};