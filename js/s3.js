// UD3: JAVASCRIPT AVANZADO

//S3: Funciones de Usuario

//Ejercicio 1: A un profesor le pagan segun sus horas y una tarifa de pago por horas. Si la cantidad de horas trabajadas es mayor a 40 hrs, la tarifa se incrementa en un 50% para las horas extras. Calcular el salario del profesor dadas las  horas trabajadas y la tarifa.

function salario_final(){
    const horas = document.getElementById("horas");
    const tarifaxhora = document.getElementById("tarifaxhora");
    const resultado1 = document.getElementById("resultado1")

    let hrs = parseFloat(horas.value);
    let txh = parseFloat(tarifaxhora.value);
    let salario = hrs * txh;
    let salariofinal = 0;

    if(hrs > 40){
        salariofinal = salario + ((hrs - 40) * (txh * 0.5));
        resultado1.innerText = "Su salario final incluyendo sus horas extras es: S/. " + salariofinal.toFixed(2);
    }else{
        resultado1.innerText = "Su salario es: S/. " + salario.toFixed(2);
    }
}

const btnEnviar1 = document.getElementById("btnEnviar1");

btnEnviar1.onclick = () => salario_final();

//Ejercicio 2: A un profesor le pagan segun sus horas y una tarifa de pago por horas. Si la cantidad de horas trabajadas es mayor a 40 hrs, la tarifa se incrementa en un 50% para las horas extras. Calcular el salario del profesor dadas las  horas trabajadas y la tarifa.

function calcularperimetro(){
    const radio = document.getElementById("radio");
    const resultado2 = document.getElementById("resultado2");
    const resultado2p1 = document.getElementById("resultado2p1");
    const resultado2p2 = document.getElementById("resultado2p2");
    let perimetro = Math.PI * (2 * parseFloat(radio.value));

    resultado2.innerText = "El perimetro es: " + perimetro.toFixed(2);
    resultado2p1.innerText = "El perimetro reducido al 50% es: " + ((perimetro.toFixed(2))*0.50).toFixed(2);
    resultado2p2.innerText = "El perimetro reducido al 25% respecto al resultado anterior es: " + (((perimetro.toFixed(2)) * 0.50).toFixed(2)) * 0.25.toFixed(2);
}

const btnEnviar2 = document.getElementById("btnEnviar2");

btnEnviar2.onclick = () => calcularperimetro();

//Ejercicio 3: Dada las horas trabajadas de una persona y la tarifa de pago por hora, calcular su salario y escribirla y los valores porcentuales a su salario en 10%, 30%, 60% y 80%.

function salariofp(valorporcentual = 0){
    const horastrabajadas = document.getElementById("horastrabajadas");
    const tarifadepagoxhora = document.getElementById("tarifadepagoxhora");
    const resultado3 = document.getElementById("resultado3")

    let salariodelapersona = (parseFloat(horastrabajadas.value) * parseFloat(tarifadepagoxhora.value)) * valorporcentual;

    resultado3.innerText = "El salario es: S/." + salariodelapersona.toFixed(2);

}

const btnEnviar3 = document.getElementById("btnEnviar3");
const btnEnviar3p1 = document.getElementById("btnEnviar3p1");
const btnEnviar3p2 = document.getElementById("btnEnviar3p2");
const btnEnviar3p3 = document.getElementById("btnEnviar3p3");
const btnEnviar3p4 = document.getElementById("btnEnviar3p4");

btnEnviar3.onclick = () => salariofp(1);
btnEnviar3p1.onclick = () => salariofp(0.10);
btnEnviar3p2.onclick = () => salariofp(0.30);
btnEnviar3p3.onclick = () => salariofp(0.60);
btnEnviar3p4.onclick = () => salariofp(0.80);


//Ejercicio 4: Un alumno desea saber cual sera su calificacion final en la materia de Algoritmos. Dicha calificacion se compone de los siguientes porcentajes: 55% del promedio de sus tres calificaciones parciales./30% de la calificacion del examen final. / 15% de la calificacion de un trabajo final.

function calificacionFinal(){
    const cp1 = document.getElementById("cp1");
    const cp2 = document.getElementById("cp2");
    const cp3 = document.getElementById("cp3");
    const cef = document.getElementById("cef");
    const ctf = document.getElementById("ctf");
    const cnf = document.getElementById("cnf");

    let califcpt = ((parseFloat(cp1.value) + parseFloat(cp2.value) + parseFloat(cp3.value)) / 3) * 0.55;

    let califcef = parseFloat(cef.value) * 0.30;
    let califctf = parseFloat(ctf.value) * 0.15;
    let califinal = califcpt + califcef + califctf;

    cnf.value = califinal.toFixed(2);
}

const btnEnviar4 = document.getElementById("btnEnviar4");

btnEnviar4.onclick = () => calificacionFinal();

//Ejercicio 5: En un hospital existen tres areas: Ginecologia, Pediatria, Traumatologia. El presupuestp anual del hospital de reparte conforme ala siguiente tabla:

function calificacionfinal(){
    const montopre = document.getElementById("montopre");
    const mdg = document.getElementById("mdg");
    const mdt = document.getElementById("mdt");
    const mdp = document.getElementById("mdp");
    const presugen = document.getElementById("presugen");

    let mp = parseFloat(montopre.value);
    let gi = mp * 0.40;
    let tr = mp * 0.30;
    let pe = mp * 0.30;


    mdg.value = gi.toFixed(2);
    mdt.value = tr.toFixed(2);
    mdp.value = pe.toFixed(2);

    presugen.value = (gi + tr + pe).toFixed(2);
}

const btnEnviar5 = document.getElementById("btnEnviar5");

btnEnviar5.onclick = () => calificacionfinal();


// WORD

//Ejercicio 1: Crear una aplicación web donde se ingrese un número entero y determine si es PRIMO o no.

const numPon = document.getElementById("numPon");
const resultado1w = document.getElementById("resultado1w");
const btnValidar1w = document.getElementById("btnValidar1w");

function validarNumprimo(){
    let nPrimo = parseFloat(numPon.value);
    let esonoPrimo = true;

    for (let i = 2; i < nPrimo; i++){
        if (nPrimo % i === 0){
            esonoPrimo = false;
        }
    }
    if(esonoPrimo == true){
        resultado1w.innerText = "SI es numero primo";
    }else{
        resultado1w.innerText = "NO es numero primo";
    }
}

btnValidar1w.onclick = () => validarNumprimo();