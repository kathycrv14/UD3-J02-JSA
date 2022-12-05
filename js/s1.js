//1. Crear una funcion que convierta los strings que se ingresan como parametros a estilo capitalizado.
// Ejemplo: "hola a todos" => "Hola A Todos"

const fraseIng = document.getElementById("fraseIng");
const fraseCap = document.getElementById("fraseCap");
const btnGenerar1 = document.getElementById("btnGenerar1")

function capitalizar(fraseIng){
    let fraseFinal = fraseIng.value;
    let fraseCortada = fraseFinal.split(" ");
    
    for (let i = 0; i < fraseCortada.length; i++ ){
        fraseCortada[i] = fraseCortada[i][0].toUpperCase() + fraseCortada[i].substr(1);
    }

    fraseCap.value = fraseCortada;
    console.log(fraseCortada.join(" "));
}

btnGenerar1.onclick = () => capitalizar(fraseIng);

//2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
// Ejemplo: {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.

const nombre = document.getElementById("nombre");

const btnGenerar2 = document.getElementById("btnGenerar2")

function validarCampos(nombre){
    let campoNombre = nombre.value;

    if (campoNombre()){
        return true;
    }else{
        
    }
}

//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.




//4. Te enviaron una base de datos de usuarios:

// let users = [
//     {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
//     {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
//     {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
//     {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
//     {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
//     {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
// ]

// Te piden que utilizando las funciones de los ejercicios anteriores, evalues que usuarios tienen datos pendientes
// y en caso no existan, solicitar el ingreso de los datos a traves del prompt para completarlos.






//5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.


/*
btnEnviar1.onclick = function (){

const frase1 = document.getElementById("frase1")
const frase1cap = document.getElementById("frase1cap")
const btnEnviar1 = document.getElementById("btnEnviar1")



    function capitalizar(frase){
        let fraseCortada = frase.split(" ") // ["hola", "a", "todos", "los", "humanos"]
        let newArray = []
        for(let i = 0; i < fraseCortada.length ;i++){  
            let nuevaPalabra = `${fraseCortada[i][0].toUpperCase()}${fraseCortada[i].substring(1)}`
            newArray.push(nuevaPalabra)
        }
        return newArray.join(" ")
        
    }

    frase1cap.innerText = newArray
}

*/