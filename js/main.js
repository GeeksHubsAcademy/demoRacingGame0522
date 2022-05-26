
const screenSwitch = (numeroPantalla) => {

    let destino = document.getElementById(numeroPantalla);


    if(numeroPantalla == "pantalla2"){
        document.getElementById("pantalla1").style.display = "none";
        destino.style.display = "block";
    } else {
        document.getElementById("pantalla2").style.display = "none";
        destino.style.display = "block";
    };
   
};