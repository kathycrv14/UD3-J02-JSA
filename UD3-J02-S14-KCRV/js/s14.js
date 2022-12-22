// Se lee por teclado el código del empleado, número de horas trabajadas, tarifa por hora. Calcular el salario básico, considerando la siguiente tabla de descuento.
//Crear una aplicación web que permita calcular el básico, descuento y salario neto.

let app = angular.module("myApp",[]);

app.controller("myCtrl",function ($scope) {

// FUNCION




$scope.sueldoBasico = function () {

  let horasTrabajadas = $scope.horasTrabajadas;
  let tarifaPorHora = $scope.tarifaPorHora;

  let sueldoB = horasTrabajadas * tarifaPorHora;

  return sueldoB;
};

$scope.descuento = function () {

  let sueldoBasico = $scope.sueldoBasico();

  $scope.sbum = 500;
  $scope.sbdois = 1000;
  $scope.sbtres = 4000;
  $scope.sbquatro = 8000;
  $scope.sbcinco = 10000;

  $scope.dum = 0;
  $scope.ddois = 0.02;
  $scope.dtres = 0.08;
  $scope.dquatro = 0.15;
  $scope.dcinco = 0.21;
  $scope.dseis = 0.30;


  if(sueldoBasico <= $scope.sbum){
    let descuento = sueldoBasico * $scope.dum;
    return descuento;
  }else if (sueldoBasico > $scope.sbum && sueldoBasico <= $scope.sbdois){
    let descuento = sueldoBasico * $scope.ddois;
    return descuento;
  }else if (sueldoBasico > $scope.sbdois && sueldoBasico <= $scope.sbtres){
    let descuento = sueldoBasico * $scope.dtres;
    return descuento;
  }else if (sueldoBasico > $scope.sbtres && sueldoBasico <= $scope.sbquatro){
    let descuento = sueldoBasico * $scope.dquatro;
    return descuento;
  }else if (sueldoBasico > $scope.sbquatro && sueldoBasico <= $scope.sbcinco){
    let descuento = sueldoBasico * $scope.dcinco;
    return descuento;
  }else{
    let descuento = sueldoBasico * $scope.dseis;
    return descuento;
  }
};

$scope.salarioNeto = function () {
  let salarioNeto = $scope.sueldoBasico() - $scope.descuento();

  return salarioNeto;

}


});

