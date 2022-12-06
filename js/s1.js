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

    fraseCap.value = fraseCortada.join(" ");
    console.log(fraseCortada);
}

btnGenerar1.onclick = () => capitalizar(fraseIng);

//2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
// Ejemplo: {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.

const nombre1 = document.getElementById("nombre1");
const apellido1 = document.getElementById("apellido1");
const edad1 = document.getElementById("edad1");
const profesion1 = document.getElementById("profesion1");

const msj1 = document.getElementById("msj1");
const msj2 = document.getElementById("msj2");
const msj3 = document.getElementById("msj3");
const msj4 = document.getElementById("msj4");

const msj5 = document.getElementById("msj5");

const btnGenerar2 = document.getElementById("btnGenerar2")

function validarCampos(){

    let campoNombre = nombre1.value;
    let campoApellido = apellido1.value;
    let campoEdad = edad1.value;
    let campoProfesion = profesion1.value;
    let vacio = "";

    msj1.innerText = "";
    msj2.innerText = "";
    msj3.innerText = "";
    msj4.innerText = "";
    msj5.innerText = "";

    let respuesta = true;

    if (campoNombre === vacio){
        msj1.innerText = "Llene el campo NOMBRE";
        respuesta = false;
    }
    if(campoApellido === vacio){
        msj2.innerText = "Llene el campo APELLIDO";
        respuesta = false;
    }
    if(campoEdad === vacio){
        msj3.innerText = "Llene el campo EDAD";
        respuesta = false;
    }
    if(campoProfesion === vacio){
        msj4.innerText = "Llene el campo PROFESION";
        respuesta = false;
    }

    return respuesta;

    /*console.log((!campoNombre === vacio) & (!campoApellido === vacio) & (!campoEdad === vacio) & (!campoProfesion === vacio))*/
}

btnGenerar2.onclick = function (){
    let val = validarCampos();
    if(val){
        msj5.innerText = "Datos completos";
    }
}

//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt o alert para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.


const nombre2 = document.getElementById("nombre2");
const apellido2 = document.getElementById("apellido2");
const edad2 = document.getElementById("edad2");
const profesion2 = document.getElementById("profesion2");

const msj11 = document.getElementById("msj11");
const msj12 = document.getElementById("msj12");
const msj13 = document.getElementById("msj13");
const msj14 = document.getElementById("msj14");

const msj15 = document.getElementById("msj15");

const btnGenerar3 = document.getElementById("btnGenerar3")
const btnGenerar3p1 = document.getElementById("btnGenerar3p1")

function validarCampos2(){

    let campoNombre2 = nombre2.value;
    let campoApellido2 = apellido2.value;
    let campoEdad2 = edad2.value;
    let campoProfesion2 = profesion2.value;
    let vacio2 = "";

    if (campoNombre2 === vacio2){
        nombre2.value = prompt("Llene el campo NOMBRE");
    }else{
        msj11.innerText = "";
    }
    if(campoApellido2 === vacio2){
        apellido2.value = prompt("Llene el campo APELLIDO");
    }else{
        msj12.innerText = "";
    }
    if(campoEdad2 === vacio2){
        edad2.value = prompt("Llene el campo EDAD");
    }else{
        msj13.innerText = "";
    }
    if(campoProfesion2 === vacio2){
        profesion2.value = prompt("Llene el campo PROFESION");
    }else{
        msj14.innerText = "";
    }

    console.log((!campoNombre2 == vacio2) & (!campoApellido2 == vacio2) & (!campoEdad2 == vacio2) & (!campoProfesion2 == vacio2))
}

function validarCampos2p1(){

    let campoNombre2 = nombre2.value;
    let campoApellido2 = apellido2.value;
    let campoEdad2 = edad2.value;
    let campoProfesion2 = profesion2.value;
    let vacio2 = "";

    if(!campoNombre2 == vacio2 && !campoApellido2 == vacio2 && !campoEdad2 == vacio2 && !campoProfesion2 == vacio2){
        msj15.innerText = "Datos completados";
    }else{
        msj15.innerText = "Haga clic en COMPLETAR DATOS";
    }

    console.log((!campoNombre2 == vacio2) & (!campoApellido2 == vacio2) & (!campoEdad2 == vacio2) & (!campoProfesion2 == vacio2))
}

btnGenerar3.onclick = () => validarCampos2();
btnGenerar3p1.onclick = () => validarCampos2p1();


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


const nombre3 = document.getElementById("nombre3");
const apellido3 = document.getElementById("apellido3");
const edad3 = document.getElementById("edad3");
const profesion3 = document.getElementById("profesion3");

const nombre3p1 = document.getElementById("nombre3p1");
const apellido3p1 = document.getElementById("apellido3p1");
const edad3p1 = document.getElementById("edad3p1");
const profesion3p1 = document.getElementById("profesion3p1");

const nombre3p2 = document.getElementById("nombre3p2");
const apellido3p2 = document.getElementById("apellido3p2");
const edad3p2 = document.getElementById("edad3p2");
const profesion3p2 = document.getElementById("profesion3p2");

const nombre3p3 = document.getElementById("nombre3p3");
const apellido3p3 = document.getElementById("apellido3p3");
const edad3p3 = document.getElementById("edad3p3");
const profesion3p3 = document.getElementById("profesion3p3");

const nombre3p4 = document.getElementById("nombre3p4");
const apellido3p4 = document.getElementById("apellido3p4");
const edad3p4 = document.getElementById("edad3p4");
const profesion3p4 = document.getElementById("profesion3p4");

const nombre3p5 = document.getElementById("nombre3p5");
const apellido3p5 = document.getElementById("apellido3p5");
const edad3p5 = document.getElementById("edad3p5");
const profesion3p5 = document.getElementById("profesion3p5");

const msj40 = document.getElementById("msj40");

const btnGenerar4 = document.getElementById("btnGenerar4")
const btnGenerar4p1 = document.getElementById("btnGenerar4p1")

function validarCampos3(){

    let campoNombre3 = nombre3.value;
    let campoApellido3 = apellido3.value;
    let campoEdad3 = edad3.value;
    let campoProfesion3 = profesion3.value;

    let campoNombre3p1 = nombre3p1.value;
    let campoApellido3p1 = apellido3p1.value;
    let campoEdad3p1 = edad3p1.value;
    let campoProfesion3p1 = profesion3p1.value;

    let campoNombre3p2 = nombre3p2.value;
    let campoApellido3p2 = apellido3p2.value;
    let campoEdad3p2 = edad3p2.value;
    let campoProfesion3p2 = profesion3p2.value;

    let campoNombre3p3 = nombre3p3.value;
    let campoApellido3p3 = apellido3p3.value;
    let campoEdad3p3 = edad3p3.value;
    let campoProfesion3p3 = profesion3p3.value;

    let campoNombre3p4 = nombre3p4.value;
    let campoApellido3p4 = apellido3p4.value;
    let campoEdad3p4 = edad3p4.value;
    let campoProfesion3p4 = profesion3p4.value;

    let campoNombre3p5 = nombre3p5.value;
    let campoApellido3p5 = apellido3p5.value;
    let campoEdad3p5 = edad3p5.value;
    let campoProfesion3p5 = profesion3p5.value;

    let vacio3 = "";

    /* USUARIO 1 */
    if (campoNombre3 === vacio3){
        nombre3.value = prompt("USER 1: Llene el campo NOMBRE");
    }
    if(campoApellido3 === vacio3){
        apellido3.value = prompt("USER 1: LLene el campo APELLIDO");
    }
    if(campoEdad3 === vacio3){
        edad3.value = prompt("USER 1: LLene el campo EDAD");
    }
    if(campoProfesion3 === vacio3){
        profesion3.value = prompt("USER 1: LLene el campo PROFESION");
    }

    /* USUARIO 2 */
    if (campoNombre3p1 === vacio3){
        nombre3p1.value = prompt("USER 2: Llene el campo NOMBRE");
    }
    if(campoApellido3p1 === vacio3){
        apellido3p1.value = prompt("USER 2: LLene el campo APELLIDO");
    }
    if(campoEdad3p1 === vacio3){
        edad3p1.value = prompt("USER 2: LLene el campo EDAD");
    }
    if(campoProfesion3p1 === vacio3){
        profesion3p1.value = prompt("USER 2: LLene el campo PROFESION");
    }

    /* USUARIO 3 */
    if (campoNombre3p2 === vacio3){
        nombre3p2.value = prompt("USER 3: Llene el campo NOMBRE");
    }
    if(campoApellido3p2 === vacio3){
        apellido3p2.value = prompt("USER 3: LLene el campo APELLIDO");
    }
    if(campoEdad3p2 === vacio3){
        edad3p2.value = prompt("USER 3: LLene el campo EDAD");
    }
    if(campoProfesion3p2 === vacio3){
        profesion3p2.value = prompt("USER 3: LLene el campo PROFESION");
    }

    /* USUARIO 4 */
    if (campoNombre3p3 === vacio3){
        nombre3p3.value = prompt("USER 4: Llene el campo NOMBRE");
    }
    if(campoApellido3p3 === vacio3){
        apellido3p3.value = prompt("USER 4: LLene el campo APELLIDO");
    }
    if(campoEdad3p3 === vacio3){
        edad3p3.value = prompt("USER 4: LLene el campo EDAD");
    }
    if(campoProfesion3p3 === vacio3){
        profesion3p3.value = prompt("USER 4: LLene el campo PROFESION");
    }

    /* USUARIO 5 */
    if (campoNombre3p4 === vacio3){
        nombre3p4.value = prompt("USER 5: Llene el campo NOMBRE");
    }
    if(campoApellido3p4 === vacio3){
        apellido3p4.value = prompt("USER 5: LLene el campo APELLIDO");
    }
    if(campoEdad3p4 === vacio3){
        edad3p4.value = prompt("USER 5: LLene el campo EDAD");
    }
    if(campoProfesion3p4 === vacio3){
        profesion3p4.value = prompt("USER 5: LLene el campo PROFESION");
    }

    /* USUARIO 6 */
    if (campoNombre3p5 === vacio3){
        nombre3p5.value = prompt("USER 6: Llene el campo NOMBRE");
    }
    if(campoApellido3p5 === vacio3){
        apellido3p5.value = prompt("USER 6: LLene el campo APELLIDO");
    }
    if(campoEdad3p5 === vacio3){
        edad3p5.value = prompt("USER 6: LLene el campo EDAD");
    }
    if(campoProfesion3p5 === vacio3){
        profesion3p5.value = prompt("USER 6: LLene el campo PROFESION");
    }

    console.log((!campoNombre3 == vacio3) & (!campoApellido3 == vacio3) & (!campoEdad3 == vacio3) & (!campoProfesion3 == vacio3))
}

function validarCampos3p1(){

    let campoNombre3 = nombre3.value;
    let campoApellido3 = apellido3.value;
    let campoEdad3 = edad3.value;
    let campoProfesion3 = profesion3.value;
    let vacio3 = "";

    if(!campoNombre3 == vacio3 && !campoApellido3 == vacio3 && !campoEdad3 == vacio3 && !campoProfesion3 == vacio3){
        msj40.innerText = "Datos completados";
    }else{
        msj40.innerText = "Haga clic en COMPLETAR DATOS";

        nombre3.disabled = true;
        apellido3.disabled = true;
        edad3.disabled = true;
        profesion3.disabled = true;

        nombre3p1.disabled = true;
        apellido3p1.disabled = true;
        edad3p1.disabled = true;
        profesion3p1.disabled = true;

        nombre3p2.disabled = true;
        apellido3p2.disabled = true;
        edad3p2.disabled = true;
        profesion3p2.disabled = true;

        nombre3p3.disabled = true;
        apellido3p3.disabled = true;
        edad3p3.disabled = true;
        profesion3p3.disabled = true;

        nombre3p4.disabled = true;
        apellido3p4.disabled = true;
        edad3p4.disabled = true;
        profesion3p4.disabled = true;

        nombre3p5.disabled = true;
        apellido3p5.disabled = true;
        edad3p5.disabled = true;
        profesion3p5.disabled = true;
    }

}

btnGenerar4.onclick = () => validarCampos3();
btnGenerar4p1.onclick = () => validarCampos3p1();



//5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.


