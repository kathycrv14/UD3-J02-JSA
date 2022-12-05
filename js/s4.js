//Caso Propuesto1:
//Crear una aplicación web donde se ingrese un número entero de 3 cifras y determine lo siguiente: si sus cifras son iguales halle la suma de sus raíces cuadradas, caso contario halle la suma de sus cuadrados.

const numero = document.getElementById("numero");
const resultado1 = document.getElementById("resultado1");
const resultado1p1 = document.getElementById("resultado1p1");
const btnCalcular1 = document.getElementById("btnCalcular1");

btnCalcular1.onclick = function(){

    let numEntero = parseInt(numero.value);

        let a = numEntero % 10;
        numEntero = Math.trunc(numEntero/10); 
        let b = numEntero % 10;
        numEntero = Math.trunc(numEntero/10); 
        let c = numEntero % 10;

        let sumaRaiz = Math.sqrt(a) + Math.sqrt(b) + Math.sqrt(c);
        let sumaCuadrados = Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2);


    if(a===b & b===c & a===c){
        resultado1.innerText = "La suma de las raices cuadradas de sus cifras es: " + sumaRaiz.toFixed(2);
    }else{
        resultado1.innerText = "La suma de los cuadrados de sus cifras es: " + sumaCuadrados;
    }
}

//Caso Propuesto2:
//Crear una función que valide una contraseña que cumpla las siguientes características, debe contener minúsculas y al menos 1 mayúscula, debe tener al menos un signo especial: @ o el _ (guion bajo), además debe contener al menos 1 digito numérico y debe tener como mínimo 10 caracteres.

// Input Password

const contrasena = document.getElementById("contrasena");
const resultado2 = document.getElementById("resultado2");
const btnEnviar2 = document.getElementById("btnEnviar2");

function validarContrasena(){
    let vpwd = contrasena.value;
    resultado2.innerText ="";
    let RegExpContrasena = /^[A-Z]{1}[a-z]*[0-9]{1}/;

    if(!RegExpContrasena.test(vpwd)){
        resultado2.innerText = "Contraseña inválida";
    }else{
        resultado2.innerText = "Contraseña válida";
    }
}

btnEnviar2.onclick = () => validarContrasena();


//Caso Propuesto3:
//Crear una función que valide el correo electrónico, de tal manera que solo se acepten del dominio certus.edu.pe, así mismo, el nombre del usuario no debe contener espacios en blanco.



// Input Email

const email = document.getElementById("email");
const resultado3 = document.getElementById("resultado3");
const btnEnviar3 = document.getElementById("btnEnviar3");
    
function validarEmail(){
    let vemail = email.value;
    resultado3.innerText ="";
    let RegExpEmail = /^[a-z]+\.[a-z]+@certus\.edu\.pe/;

    if(!RegExpEmail.test(vemail)){
        resultado3.innerText = "Correo inválido";
    }else{
        resultado3.innerText = "Correo válido";
    }

}

btnEnviar3.onclick = () => validarEmail();

/*
const numero = document.getElementById("numero");
const resultado1 = document.getElementById("resultado1");
const resultado1p1 = document.getElementById("resultado1p1");
const btnCalcular1 = document.getElementById("btnCalcular1");

btnCalcular1.onclick = function(){

    let numEntero = parseInt(numero.value);

    if(numEntero > 99 && numEntero < 1000){

        let a = numEntero % 10;
        numEntero = Math.trunc(numEntero/10); 
        let b = numEntero % 10;
        numEntero = Math.trunc(numEntero/10); 
        let c = numEntero % 10;

        let suma = a + b + c;

        resultado1.innerText = "La suma de los digitos es: " + suma;
    }
    if(a===b & b===c & a===c){
        resultado1.innerText = "La suma de los digitos es: " + suma;
    }else{
        resultado1.innerText = "No se puede sumar"
    }
}


*/