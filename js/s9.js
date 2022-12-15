const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const codigo = document.getElementById("codigo");
const selCargo = document.getElementById("selCargo");

const sueldoBruto = document.getElementById("sueldoBruto");
const descuento = document.getElementById("descuento");
const sueldoNeto = document.getElementById("sueldoNeto");
const btnCalcular1 = document.getElementById("btnCalcular1");
const btnLimpiar1 = document.getElementById ("btnLimpiar1");

let nome = nombre.value;
let sobrenome = apellido.value;

class Empleado {
    codigo = "";
    nombre = "";
    apellido = "";
    correo = "";
    cargo = "";
    sueldoBruto = function (){

        let sueldo = 0;

        switch (this.cargo) {
            case "jefe":
                sueldo = 5000;
                break;
        
            case "analista":
                sueldo = 4000;
                break;

            case "programador":
                sueldo = 3000;
                break;

            case "soporte":
                sueldo = 2000;
                break;

            case "asistente":
                sueldo = 1500;
                break;

            default:
                sueldo = 0;
                break;
        }

        return sueldo;
    }

    descuento = function (){

        let descuento  = 0;

        descuento = this.sueldoBruto () * 0.125;
        return descuento;
    }

    sueldoNeto = function (){

        let sueldoneto = 0;

        sueldoneto  = this.sueldoBruto() - this.descuento ();
        return sueldoneto;
    }
}


btnCalcular1.disabled = true;

selCargo.onchange = function (){
    if (selCargo.value != "0"){
        btnCalcular1.disabled = false;
    }else{
        btnCalcular1.disabled = true;
    }
}

btnCalcular1.onclick = function (){

    let nuevoempleado = new Empleado ();

    let cod = codigo.value;
    //Objeto(.atributo) = const del document (valor del input)
    nuevoempleado.nombre = nombre.value;
    nuevoempleado.apellido = apellido.value;
    nuevoempleado.correo = correo.value;
    nuevoempleado.codigo = codigo.value;
    nuevoempleado.cargo = selCargo.value;

    sueldoBruto.value = nuevoempleado.sueldoBruto ();
    descuento.value = nuevoempleado.descuento ();
    sueldoNeto.value = nuevoempleado.sueldoNeto ();

    nombre.disabled = true;
    apellido.disabled = true;
    correo.disabled = true;
    codigo.disabled = true;
    selCargo.disabled = true;
}

btnLimpiar1.onclick = function (){
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    codigo.value = "";
    selCargo.value = "0";

    sueldoBruto.value = "";
    descuento.value = "";
    sueldoNeto.value = "";

    nombre.disabled = false;
    apellido.disabled = false;
    correo.disabled = false;
    codigo.disabled = false;
    selCargo.disabled = false;
}




