let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]

//1. Ordernar los pokemons por base_damage de menor a mayor.

function Ordernarporbase_damage(pokemons){  // => -> se expresa como function
    return pokemons.sort((a, b) => {return a.base_damage - b.base_damage}); // funcion sort -> te ordena de menor a mayor, se realiza una comparacion
}; 

console.log(Ordernarporbase_damage(pokemons));

//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

function Ordenarpokemonspor_argumento(argumento){ // argumento -> atributo de los objetos
    if (typeof pokemons[0][argumento] === "string"){ // typeof -> comparacion de tipos de datos
        return pokemons.sort((a,b) => {return a[argumento].localeCompare(b[argumento])}) // localCompare -> ordena alfabeticamente los string
    } else if (typeof pokemons[0][argumento] === "number"){
        return pokemons.sort((a,b) => {return a[argumento] - b[argumento]}) // que los ordene de menor a mayor 
    } else {
        return "Por favor utiliza un atributo válido"
    }
}
console.log(Ordenarpokemonspor_argumento("type"));

//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.

function Filtrarobjeto_pokemons (arreglo, valordeltype){

    return arreglo.filter(objeto => objeto.type === valordeltype)  
    /* return Object.values(pokemons).filter(function(pokemon) { 
        return pokemon.type.includes(type);
    });*/
    }

/*var Filtrarpokemons = Filtrarobjeto_pokemons(pokemons,'electric')*/
console.log(Filtrarobjeto_pokemons(pokemons,"electric"));

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.

const PokemonMaster = {     
    //  [tipos de datos(string,numbers,booleanos,objetos,array->arreglo] corchetes -> arreglos // {Atributo : valor } -> objetos 
    id: 227, name: "ash", created_date: "31",
    pokemon: [] // pokemon es un atributo del objeto pokemon master
            // valor del atributo pokemon 
};

console.log(PokemonMaster);



//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.

function NewPokemon (pokemons,PokemonMaster){  // funcion  Math.ramdon() -> te genera un arreglo de manera aleatoria  
    let pokemonaleatorio = Math.floor(Math.random() * (pokemons.length - 0) + 0); // nos devuelve un numero ramdon entre 0 y 1 // length -> devuelve el tamaño 
    PokemonMaster.pokemon.push(pokemons[pokemonaleatorio]);  // push -> agrega uno o mal elementos        
};



//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5

function Agregar_atributoaleatorio(pokemons){
    for (const i in pokemons) {                  // utilizamos el for para crear un bucle que recorra el arreglo // i->indice [0]
        let minimo_damage = Math.floor(Math.random() * (3 - 1) + 1); // para que agarre 1y2 le añadimos un numero mas (3)
        let maximo_damage = Math.floor(Math.random() * (6 - 3) + 3); 
        pokemons[i].min_damage = minimo_damage; // i = 0; cumple; i < 10 ; pokemons[0].min_damage = minimo_damage;i+1
        pokemons[i].max_damage = maximo_damage; // i = 1; cumple; 1 < 10 ; pokemons[1].min_damage = minimo_damage;i+1
                                                // i= 9; cumple, 9 < 10; pokemons[9].min_damage = minimo_damage;i+1
    }                                           // i= 10; no cumple;
}

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage

function Dañopokemon (pokemons,eleccion){
    let pokemoneleccion = pokemons.filter(pokemon => pokemon.name === eleccion)
    let daño = ((pokemoneleccion[0].base_damage) + Math.floor(Math.random() * (pokemoneleccion[0].max_damage - pokemoneleccion[0].min_damage) + pokemoneleccion[0].min_damage)); 
    return daño
}

//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.

// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.

function Ordenarmayor_basedamage(PokemonMaster){
    return PokemonMaster.pokemon.sort((a,b) => {return (b.base_damage + b.max_damage) - (a.base_damage + a.max_damage)})   
}


//9. Crear una lista desordenada de Pokemons en nuestro documento HTML

const root = document.getElementById("root")
const lista_desordenada = document.createElement("ul")

root.append(lista_desordenada)

function construirLista(){
    for (const pokemon of pokemons) {
        const li = document.createElement('li');
        li.innerHTML = `${pokemon.name}, ${pokemon.id} , ${pokemon.type},  ${pokemon.base_damage} ,${pokemon.base_hp}, ${pokemon.speed}`
        
        lista_desordenada.appendChild(li);
    }
}
construirLista()

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed

const table = document.createElement("table");
root.append(table);
table.setAttribute('border', '1');

const encabezados = document.createElement("thead");
for (const key in pokemons[0]){
    const th = document.createElement("th")
    th.textContent = key
    th.style.cursor = "pointer"
    th.addEventListener("click", (e) =>{
        ordenarProductosPorAtributo(key)
        table.innerHTML = ""
        table.append(encabezados)
        construirTabla()
    })
    encabezados.append(th);
};
table.append(encabezados);
construirTabla();

function construirTabla(){
    for (const index in pokemons){
        const tr = document.createElement("tr")
            for (const key in pokemons[index]){
                const td = document.createElement("td")
                td.textContent = pokemons[index][key]
                tr.append(td)
            }
        table.append(tr)
    }
};

function capitalizarPalabra(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
};

function ordenarProductosPorAtributo(atributo){
    if (typeof pokemons[0][atributo] === "string"){
        return pokemons.sort((a,b) => {return a[atributo].localeCompare(b[atributo])})
    } else if (typeof pokemons[0][atributo] === "number"){
        return pokemons.sort((a,b) => {return a[atributo] - b[atributo]})
    } else {
        return "Por favor utiliza un atributo válido"
    }
};

//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.

//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name.





