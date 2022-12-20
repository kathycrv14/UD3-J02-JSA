// CREATE
let users = [
  {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z",update_at:""}
]

// VARIABLES DEL DOM
const codigo = document.getElementById("txtid");
const btncrear = document.getElementById("btncrear");
const txtnombre = document.getElementById("txtnombre");
const txtapellido = document.getElementById("txtapellido");
const txtedad = document.getElementById("txtedad");
const txtprofesion = document.getElementById("txtprofesion");
const root = document.getElementById("root");
const table = document.createElement("table");
const encabezados = document.createElement("thead");


// TABLA
root.append(table);
table.setAttribute('border', '1');
codigo.disabled = true;
table.append(encabezados);



function crearObjeto(...atributosValores) { // parametro REST (...) ["nombre",txtnombre, "apellido",dato3]
  let objeto = {};
  for (let i = 0; i < atributosValores.length; i += 2) {
    let atributo = atributosValores[i]; //atributosValores[0] atributosValores[2] atributosValores[4]
    let valor = atributosValores[i + 1];// atributosValores[1]
    objeto[atributo] = valor; // objeto[nombre]=txtnombre.value
  }
  return objeto;
} 
function agregarObjeto(users,objeto) {
      users.push(objeto);   
}
function mostrarContenidoTabla(users) {
  table.append(encabezados)
  for (const index in users){
  const tr = document.createElement("tr")
      for (const key in users[index]){
          const td = document.createElement("td")
          td.textContent = users[index][key]
          tr.append(td)
      }
  table.append(tr)
} 
}
let estado = "ascendente";
for (const key in users[0]){
  const th = document.createElement("th")
  th.textContent = key
  th.style.cursor = "pointer"
  th.addEventListener("click", (e) =>{
     if (estado== "ascendente"){
        ordenarUsuariosDescendiente(key)
        estado = "descendente"
     }
     else if(estado== "descendente")
     { ordenarUsuariosAscendente(key)
      estado = "ascendente"
    }
    
      table.innerHTML = ""
      table.append(encabezados)
      mostrarContenidoTabla(users)
  })
  encabezados.append(th)
}
table.append(encabezados)
mostrarContenidoTabla(users)
//------------------Boton crear---------------------------------------------
btncrear.addEventListener("click",()=>{
  const fecha = new Date().toISOString();
  table.innerHTML=""
  codigo.value++;
  let usuarionuevo= crearObjeto("id",parseInt(codigo.value),"nombre",txtnombre.value,"apellido", txtapellido.value,"edad",parseInt(txtedad.value),"profesion",txtprofesion.value,"created_at",fecha);
  agregarObjeto(users,usuarionuevo)
  mostrarContenidoTabla(users)
  txtnombre.value = "";
  txtapellido.value = "";
  txtedad.value = "";
  txtprofesion.value = "";
})


function Modificar_registro(users){
 const idaCambiar = prompt("Ingrese id del Registro a Modificar");
 let indiceusuario=0;
  for (const user in users) {
    
      if(users[user].id=== parseInt(idaCambiar) ){
          indiceusuario=user;
      }
  }
  let datosnuevos = prompt("ingrese los datos nuevos separados por ,") // [aron,ruiz,23,dasda]
  datosnuevos = datosnuevos.split(',')
  const fecha = new Date().toISOString();
   users[indiceusuario].nombre=datosnuevos[0]  // user[3].nombre = 
   users[indiceusuario].apellido=datosnuevos[1]
   users[indiceusuario].edad=datosnuevos[2]
   users[indiceusuario].profesion=datosnuevos[3]
   users[indiceusuario].update_at=fecha
}
const btnupdate = document.getElementById("btnupdate")

btnupdate.addEventListener("click",()=>{
  table.innerHTML=""
  Modificar_registro(users)
  mostrarContenidoTabla(users)
})
 
function deleteRecord(users, id) {
  

  // Buscar el índice del usuario con el id especificado
  const userIndex = users.findIndex(user => user.id === id);

  // Si el usuario no existe, mostrar un mensaje al usuario 
  if (userIndex === -1) {
    alert("No se ha encontrado un registro con el id especificado");
    return;
  }

  // Si el usuario existe, eliminarlo del arreglo
  users.splice(userIndex, 1);

  // Mostrar un mensaje de confirmación al usuario
  alert("Registro eliminado exitosamente");
}


const btndelete = document.getElementById("btndelete")
btndelete.addEventListener("click",()=>{
  // Pedir al administrador que ingrese el id del registro que quiere eliminar
  const id = prompt("Ingresa el id del registro que quieres eliminar");

  // Si el administrador no ingresa ningún id, volver a la página inicial
  if (!id) {
    return;
  }
  if (isNaN(id)) {
    alert("Por favor ingresa un id válido (debe ser un número)");
    return;
  }
  if (confirm("¿Estás seguro de que quieres eliminar el registro?")) {
  deleteRecord(users, parseInt(id));}
  table.innerHTML = "";
  mostrarContenidoTabla(users);

 
})


function ordenarUsuariosAscendente(atributo){
  if (typeof users[0][atributo] === "string"){
      return users.sort((a,b) => {return a[atributo].localeCompare(b[atributo])}) //localcomare es para ordenar strings cadenas de texto
  } else if (typeof users[0][atributo] === "number"){
      return users.sort((a,b) => {return a[atributo] - b[atributo]}) // esto es para numeros
  } else {
      return "Por favor utiliza un atributo válido"
  }
}
function ordenarUsuariosDescendiente(atributo){
  if (typeof  users[0][atributo] === "string"){
      return  users.sort((a,b) => {return b[atributo].localeCompare(a[atributo])})
  } else if (typeof  users[0][atributo] === "number"){
      return  users.sort((a,b) => {return b[atributo] - a[atributo]})
  } else {
      return "Por favor utiliza un atributo válido"
  }
}



//14. TRABAJO GRUPAL
//Elaborar un programa que permita al admin a traves de prompts y alerts lo siguiente:

// CREATE

// El admin debe poder crear un nuevo registro de usuario utilizando la funcion 10. (Pueden utilizar un boton que diga "Crear Usuario")


//14. TRABAJO GRUPAL
//Elaborar un programa que permita al admin a traves de prompts y alerts lo siguiente:

// CREATE

// El admin debe poder crear un nuevo registro de usuario utilizando la funcion 10. (Pueden utilizar un boton que diga "Crear Usuario")

//Crear una funcion que te permita ingresar en un prompt la informacion de un usuario de la siguiente manera:
// "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)"
// El usuario digitara: Andres, Perez, 28, ingeniero.
// La informacion debe ser guardada como objeto dentro del array users asignadole un id unico a cada registro.
// READ
// El admin debe poder visualizar en pantalla los registros que estan siendo creados.
// UPDATE
// El admin, al presionar un boton: "Modificar registro" en la parte inferior de la lista de registros, debe
// ver un prompt que le pida que ingrese el id del registro que desea modificar, en caso no ingrese ninguno,
// debe volver a la pagina inicial. Si elige modificar alguno, debe aparecer nuevamente el prompt del ejercicio 10
// OJO: Cuando el admin modifique el registro, no se debe modificar la fecha de creacion, en su lugar debe aparecer
// un nuevo campo de fecha de modificacion.
// DELETE
// El admin, al presionar un boton: "Borrar registro" en la parte inferior de la lista de registros, debe ver
// un prompt que le pida ingresar el id del registro que desea borrar. Al dar click, debe aparecer un prompt
// que le pregunte: "Esta usted seguro? Si/No" y al escribir Si, deberia borrarlo. En cualquier otro caso
// deberia volver a la pagina inicial sin que se haya borrado ningun registro.

// ADICIONAL1: Añadir a la tabla la funcionalidad de ordenar los registros al hacer click en los encabezados
// (como en el caso de Pokemon). Sin embargo, al momento de hacer click nuevamente en el encabezado, los datos
// deben ordenarse de manera inversa. Ejemplo: Si al hacer click se ordenan de menor a mayor, al volver a hacer
// click deben ordenarse de mayor a menor.

// OPCIONAL: Crear un selector que permita filtrar los datos por fecha.
const date = document.getElementById("date")
const btnfiltrar = document.getElementById("btnfiltrar")

function filtrarPorFecha(arr, fechaInput) {
  return arr.filter(item => {
    // Obtiene solo el año, mes y día de la fecha del elemento del arreglo
    const fechaItem = item.created_at.substring(0, 10); // 2022-09-26
    // Compara la fecha del elemento con la fecha del input
    return fechaItem === fechaInput;
  });
}


btnfiltrar.addEventListener("click",()=>{
  table.innerHTML=""
  let resultado = filtrarPorFecha(users,date.value); //resultado [{id:}]

  mostrarContenidoTabla(resultado)
})
