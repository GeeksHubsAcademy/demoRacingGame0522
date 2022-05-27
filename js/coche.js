
//Descripción de la clase Coche

class Coche {

    constructor(marca,modelo,peso,velocidad){
        this.marca = marca;
        this.modelo = modelo;
        this.peso = peso;
        this.velocidad = velocidad;
        
        this.metros = 0;

    };

    acelerar(){

        this.metros = (this.velocidad * this.peso) + 20;

    };

};

//Instanciar

let coche1 = new Coche("Volkswagen","golf",1400,240);
let coche2 = new Coche("Mitsubishi","mitsu",950,240);
let coche3 = new Coche("Seat","seat",600,140);
let coche4 = new Coche("Tesla","tesla",2200,190);

//Diccionario de JS

let allCars = {
    "1": coche1,
    "2": coche2,
    "3": coche3,
    "4": coche4
}