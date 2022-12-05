//Caso Propuesto1:
//Una fábrica paga a todos sus empleados de acuerdo a la cantidad de horas que trabaja, de este modo la tarifa por cada hora trabajada varía de acuerdo a su categoría:
// Asimismo, los empleados reciben una bonificación correspondiente a un porcentaje a su sueldo básico de acuerdo a los años de servicio:

//Crear un formulario web donde se ingrese los datos solicitados y permita calcular el sueldo básico, bonificación por años de servicio y sueldo neto.

const horaslaboradas = document.getElementById("horaslaboradas");

const sueldoBasico = document.getElementById("sueldoBasico");
const bonCorresp = document.getElementById("bonCorresp");
const sueldoNeto = document.getElementById("sueldoNeto");
const btnCalcular1 = document.getElementById("btnCalcular1");

function sueldoFinal (){

    const selCategoria = document.getElementById("selCategoria");
    let opcCat = selCategoria.options[selCategoria.selectedIndex].text;

    let catA = "A";
    let catB = "B";
    let catC = "C";

    let a = 40;
    let b = 35;   
    let c = 30;

    if(opcCat === catA){
        sueldoBasico.value = parseInt(horaslaboradas.value) * a;
    }else if(opcCat === catB){
        sueldoBasico.value = parseInt(horaslaboradas.value) * b;
    }else{
        sueldoBasico.value = parseInt(horaslaboradas.value) * c;
    }

    console.log(opcCat);
}

function bonFinal (){

    const selAnos = document.getElementById("selAnos");
    let opcAnos = selAnos.options[selAnos.selectedIndex].text;

    let aaa = "1-3";
    let bbb = "4-7";
    let ccc = "8-12";
    let ddd = "13-mas";

    let a = 0.15;
    let b = 0.20;   
    let c = 0.30;
    let d = 0.35;

    if(opcAnos === aaa){
        bonCorresp.value = parseFloat(sueldoBasico.value) * a;
    }else if(opcAnos === bbb){
        bonCorresp.value = parseFloat(sueldoBasico.value) * b;
    }else if(opcAnos === ccc){
        bonCorresp.value = parseFloat(sueldoBasico.value) * c;
    }else{
        bonCorresp.value = parseFloat(sueldoBasico.value) * d;
    }

    console.log(opcAnos);
}

function sueldNeto (){

    sueldoNeto.value = parseFloat(sueldoBasico.value) + parseFloat(bonCorresp.value);

    console.log(sueldoNeto.value);
}
btnCalcular1.onclick = () => sueldoFinal () & bonFinal () & sueldNeto ();



/*
    if(selCategoria.value === 1){
        sueldoBasico.value = hrsLab * a;
    }
    if(selCategoria.value === 2){
        sueldoBasico.value = hrsLab * b;
    }
    let opcCat = selCategoria.options[selCategoria.selectedIndex].value;

    */



/*
function sueldoFinal (){

    const selCategoria = document.getElementById("selCategoria");
    let opcCat = selCategoria.options[selCategoria.selectedIndex].value;

    const catA = document.getElementById("catA");
    const catB = document.getElementById("catB");
    const catC = document.getElementById("catB");

    const catEscrita = document.getElementById("catEscrita");

    let catEscritainput = catEscrita.value;

    let aaa = "A" && "a";
    let bbb = "B" && "b";
    let ccc = "C" && "c";

    let a = 40;
    let b = 35;   
    let c = 30;

    let x = 0;

    let unoalTres = 0.15;
    let cuatroalSiete = 0.20;
    let ochoalDoce = 0.30;
    let tresceaMas = 0.35;

    let hrsLab = parseInt(horaslaboradas.value);

    if(catEscritainput === aaa){
        sueldoBasico.value = hrsLab * a;
    }else if(catEscritainput === bbb){
        sueldoBasico.value = hrsLab * b;
    }else{
        sueldoBasico.value = hrsLab * c;
    }

}

btnCalcular1.onclick = () => sueldoFinal();
*/



/*
function sueldoFinal (){

    const catEscrita = document.getElementById("catEscrita");

    let catEscritainput = catEscrita.value;

    let aaa = "A" && "a";
    let bbb = "B" && "b";
    let ccc = "C" && "c";

    let a = 40;
    let b = 35;   
    let c = 30;

    let x = 0;

    let hrsLab = parseInt(horaslaboradas.value);

    if(catEscritainput === aaa){
        sueldoBasico.value = hrsLab * a;
    }else if(catEscritainput === bbb){
        sueldoBasico.value = hrsLab * b;
    }else{
        sueldoBasico.value = hrsLab * c;
    }

}

*/