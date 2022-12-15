//EJERCICIO 1

$(".btnEnviar1").click(function(){
    //Usuario
    if(!$("#usuario1").val()){
        $(".nombreUsu").show();
        $(".nombreUsu").text("El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo");
    }else{
        $(".nombreUsu").hide();
        $("#usuario1").prop("disabled",true);
    }
    //Nombre
    if(!$("#nombre1").val()){
        $(".nombreNom").show();
        $(".nombreNom").text("El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo");
    }else{
        $(".nombreNom").hide();
        $("#nombre1").prop("disabled",true);
    }
    //Correo
    if(!$("#correo1").val()){
        $(".nombreCo").show();
        $(".nombreCo").text("El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo");
    }else{
        $(".nombreCo").hide();
        $("#correo1").prop("disabled",true);
    }
    //Celular
    if(!$("#celular1").val()){
        $(".nombreCel").show();
        $(".nombreCel").text("El celular tiene que ser solo 9 digitos");
    }else{
        $(".nombreCel").hide();
        $("#celular1").prop("disabled",true);
    }})








//EJERCICIO 2

$("#btnEnviar2").click(function(){
    $("#msjOk").show();

    if(!$("#nombre").val()){
        $("#msjNombre").show();
        $("#msjNombre").text("Llene el campo NOMBRE");
    }else{
        $("#msjNombre").hide();
        $("#nombre").prop("disabled",true);
    }

    if(!$("#apellido").val()){
        $("#msjApellido").show();
        $("#msjApellido").text("Llene el campo APELLIDO");
    }else{
        $("#msjApellido").hide();
        $("#apellido").prop("disabled",true);
    }

    if(!$("#correo").val()){
        $("#msjCorreo").show();
        $("#msjCorreo").text("Llene el campo CORREO");
    }else{
        $("#msjCorreo").hide();
        $("#correo").prop("disabled",true);
    }

    if($(".form-inputGen").val()){
        $("#msjGen").show();
        $("#msjGen").text("Seleccione su GENERO");
    }else{
        $("#msjGen").hide();
        $(".form-inputGen").prop("disabled",true);
    }

    if(!$("#fechaNac").val()){
        $("#msjFecha").show();
        $("#msjFecha").text("Seleccione su FECHA DE NACIMIENTO");
    }else{
        $("#msjFecha").hide();
        $("#fechaNac").prop("disabled",true);
    }
    });

$("#btnLimpiar2").click(function(){
    $("#msjOk").hide();

$("#nombre").prop("disabled",false);
$("#nombre").val("");

$("#apellido").prop("disabled",false);
$("#apellido").val("");

$("#correo").prop("disabled",false);
$("#correo").val("");

$(".form-inputGen").prop("disabled",false);
$(".form-inputGen").val("0");
$("#msjGen").hide();

$("#fechaNac").prop("disabled",false);
$("#fechaNac").val("");

    });
