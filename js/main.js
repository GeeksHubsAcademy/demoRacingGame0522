
let jugadores = [];

let ganador = "";

let vistaVersus = document.getElementById("padreTres");
let cocheIzquierda = document.getElementById("cocheIzquierda");
let cocheDerecha = document.getElementById("cocheDerecha");
let metrosIzquierda;
let metrosDerecha;
let winnerIs = document.getElementById("winnerIs");

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

                    cocheIzquierda.innerHTML = `<div><img class='cocheRun' src='img/${jugadores[0].modelo}.jpg'/></div><div>${jugadores[0].marca}</div><div id='metrosIzquierda'>${jugadores[0].metros}</div>`;
                    cocheDerecha.innerHTML = `<div><img class='cocheRun' src='img/${jugadores[1].modelo}.jpg'/></div><div>${jugadores[1].marca}</div><div id='metrosDerecha'>${jugadores[1].metros}</div>`;

                    metrosIzquierda = document.getElementById("metrosIzquierda");
                    metrosDerecha = document.getElementById("metrosDerecha");

                    screenSwitch("pantalla4");

                    
                },2000);
            },500);
        }

    }
    
        
                

};

const play = () => {
    
    let random = Math.round(Math.random());

    jugadores[random].acelerar();

    if(jugadores[random].metros >= 200){



        setTimeout(()=>{

            winnerIs.innerHTML = `${jugadores[random].marca}`;

            screenSwitch("pantalla5");
        },500)
    }

    if(random == 0){

        metrosIzquierda.innerHTML = `${jugadores[random].metros}`;
    } else {
        metrosDerecha.innerHTML = `${jugadores[random].metros}`;
    }


};

const limpiar = () => {

    jugadores = [];

    ganador = "";

    metrosIzquierda.innerHTML = ``;

    metrosDerecha.innerHTML = ``;

    coche1.metros = 0;
    coche2.metros = 0;
    coche3.metros = 0;
    coche4.metros = 0;

    setTimeout(()=>{

        screenSwitch("pantalla1");
    },500);

};