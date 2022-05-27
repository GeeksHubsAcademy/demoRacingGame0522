let jugadores = [];

let vistaVersus = document.getElementById("padreTres");

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

const selecciona = (car) => {
    
    
    if(jugadores.length < 2){

        //Diccionario de js
        jugadores.push(allCars[car]);
        console.log(jugadores);

        //Una vez hemos introducido el coche en el array...
        //comprobamos si la longitud del array es 2. 
        //Eso significaría que ya tenemos los dos coches y que hay que cambiar de pantalla

        if(jugadores.length === 2){

            setTimeout(()=>{

                //Diseñamos el contenido de la pantalla3 antes de mostrarla dando el cambiazo
                vistaVersus.innerHTML = `<div class='hijoVersus'><img class='fotoVersus' src='img/${jugadores[0].modelo}.jpg' alt='asdfasdf'></div><div class='hijo3'><img class='fotoVersus' src='img/logovs.jpg'/><div class='hijoVersus'><img class='fotoVersus' src='img/${jugadores[1].modelo}.jpg' alt='asdfasdf'></div>`;
                screenSwitch("pantalla3");

                setTimeout(()=>{
                    screenSwitch("pantalla4");
                },2000);
            },500);
        }

    }
    
        
                

};

