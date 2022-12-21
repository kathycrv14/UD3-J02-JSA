//La empresa “MULTIPLAN” dedicada al alquiler de vehículos, emite una factura de acuerdo al servicio prestado a sus clientes por la distancia recorrida en el auto alquilado. Si la distancia recorrida no es mayor a los 300 km., se cobra una tarifa fija de S/.250, si la distancia recorrida es mayor a 300 km. y hasta 1000 km. se cobra la tarifa fija más el exceso de kilómetros a razón de S/. 30 por km. y si la distancia recorrida es mayor a 1000 km., la compañía cobra la tarifa fija más los kilómetros recorridos entre 300 hasta 1000 a razón de S/. 30, más S/.20 por Kilómetro de exceso en distancias mayores de 1000 km. Además, por promoción otorga un descuento del 10% del importe a pagar, por importes mayores a 500 soles.

let app = angular.module("myApp",[]);

app.controller("myCtrl",function ($scope) {

//VARIABLES CON $SCOPE

  $scope.tarifaFija = 250;
  $scope.tarifaExceso = 30;
  $scope.tarifaExceso1000 = 20;

  $scope.limiteExceso = 300;
  $scope.limiteExceso1000 = 1000;

  $scope.limiteDescuento = 500;

  $scope.porcentajeDescuento = 0.1;

// FUNCION

$scope.importeAPagar = function (){

  let distanciaRecorridaInput = $scope.distanciaRecorridaInput;
    
  if (distanciaRecorridaInput <= $scope.limiteExceso) {
    return $scope.tarifaFija;
  }else if (distanciaRecorridaInput <= $scope.limiteExceso1000) {
      return $scope.tarifaFija + ($scope.tarifaExceso * (distanciaRecorridaInput - $scope.limiteExceso));
  }else {
    return $scope.tarifaFija + ($scope.tarifaExceso * ($scope.limiteExceso1000 - $scope.limiteExceso)) + ($scope.tarifaExceso1000 * (distanciaRecorridaInput - $scope.limiteExceso1000));
  }
};

// FUNCION
$scope.descuento = function() {

  let importeAPagar = $scope.importeAPagar();

  if (importeAPagar > $scope.limiteDescuento) {
    return importeAPagar * $scope.porcentajeDescuento;
  }else {
    return 0;
    }
};

// FUNCION
$scope.totalAPagar = function() {
  return $scope.importeAPagar() - $scope.descuento();
  };
});

