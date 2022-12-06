//EJERCICIO 1

const monopolio = document.getElementById("monopolio");
const ajedrez = document.getElementById("ajedrez");
const lego = document.getElementById("lego");
const damas = document.getElementById("damas");
const laberinto = document.getElementById("laberinto");
const importefinal = document.getElementById("importe");
const btnComprar1 = document.getElementById("btnComprar1")

btnComprar1.onclick = function (){
    let mon = 0;
    let aje = 0;
    let leg = 0;
    let dam = 0;
    let lab = 0;

    mon = parseFloat(monopolio.value);
    aje = parseFloat(ajedrez.value);
    leg = parseFloat(lego.value);
    dam = parseFloat(damas.value);
    lab = parseFloat(laberinto.value);

    let preMon = 70.99;
    let preAje = 78.99;
    let preLeg = 100.99;
    let preDam = 58.50;
    let preLab = 35.00;

    let tljugue = mon + aje + leg + dam + lab;
    let costofinal = mon * preMon + aje * preAje + leg * preLeg + dam * preDam + lab * preLab;

    let descuento = 0;
    let importe = 0;

    if (tljugue < 10){
        descuento = costofinal * 0.035;   
    }else if((tljugue >= 10) && (tljugue <= 20)){
        descuento = costofinal * 0.07;   
    }else{
        descuento = costofinal * 0.095;   
    }

    importe = costofinal - descuento;

    importefinal.value = importe.toFixed(2);
    console.log(costofinal);
}

//EJERCICIO 2

// Desarrollar una aplicación web que permita generar los accesos mediante un usuario y contraseña almacenado en un array. Los accesos deben ser ingresados mediante un formulario.
// Ejemplo:
// let usuarios = [“jperez”, “amaria”];
// let contraseña = [“123456”, “certus123”];
// Por ejemplo, si ingresa el usuario jperez y su contraseña 123456, debería mostrarse un mensaje de alerta indicando “Datos ingresados correctamente”. Lo mismo si el usuario y contraseña serian amaria y certus123 respectivamente. No se no ingresa un usuario existente o la contraseña equivocada, se deberia mostrar un mensaje indicando el error.

const usuario = document.getElementById("usuario1");
const contrasena = document.getElementById("contrasena1");
const usuInv = document.getElementById("usuInv");
const contInv = document.getElementById("contInv");
const graciasConf = document.getElementById("graciasConf");
const btnValidar1 = document.getElementById("btnValidar1");
const btnLimpiar1 = document.getElementById("btnLimpiar1");

let mensaje = "";

btnValidar1.onclick = function () {
    let usus = ["jperez", "amaria", "kathy"];
    let conts = ["123456", "certus123", "741"];
    mensaje = "Datos inválidos";

    for (let i = 0; i < usus.length; i++){
        if (usuario.value == usus[i] && contrasena.value == conts[i]){
            mensaje = "Datos válidos";
            break;
        }
    }
    graciasConf.innerText = mensaje;
}

btnLimpiar1.onclick = function () {
    graciasConf.innerText = "";
}