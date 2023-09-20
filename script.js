let headerMain = document.getElementById('headerID');

function getPokemon(maxPokemonCount) {
    const URLApi = `https://pokeapi.co/api/v2/pokemon/${maxPokemonCount}/` // URL del API para elegir el Pokémon 
    const URLApi2 = `https://pokeapi.co/api/v2/pokemon-species/${maxPokemonCount}` // URL del API para la descripción
    let statsList = document.getElementById('statsList');
    eliminarTodosLosHijos(statsList); // Elimina todos los valores de stats del Pokémon anterior

    //Se que este fetch se puede hacer una sola vez usando "Promise.all" pero para aprender prefiero separar el codigo.

    fetch(URLApi)
        .then(response => {
            //Si la respuesta no es correcta
            if (!response.ok) {
                throw new Error('Algo salio mal en la conexión');
            }
            //Si la respuesta fue correcta, convertimos a JSON el objeto de respuesta
            return response.json();
        })

        .then(data => {
            //Al ser correcta la respuesta ahora el objeto data tiene todos los datos
            // No es necesario hacer JSON.parse(data) ya que response.json() ya lo hace
            let pokemonName = document.getElementById('pokemonName'); //Selecciono el elemento donde voy a completar el nombre
            let pokemonImage = document.getElementById('pokemonImage'); //Selecciono el elemento donde voy a completar la imagen
            pokemonName.textContent = data.name.toUpperCase();

            const urlImagePokemon = data.sprites.other['official-artwork'].front_default; //Guardo la url del sprite en una const
            pokemonImage.src = urlImagePokemon; //Modifico el src de la imagen

            let arrayStats = data.stats; // Creo un array donde guardo todos los valores de stats posibles

            const statClassMap = {
                hp: 'hp',
                attack: 'attack',
                defense: 'defense',
                'special-attack': 'special-attack', //Por el guion hay que usar comillas
                'special-defense': 'special-defense', //Por el guion hay que usar comillas
                speed: 'speed'
            };

            arrayStats.forEach(stat => {
                document.getElementById('secondContainer').style.display = 'flex';//Hago visible el contenedor
                let statName = stat.stat.name; // Busco el nombre de cada stat
                let statValue = stat.base_stat;; //Valor base del stat
                let listItem = document.createElement('li'); // Creo un li
                let statNameUp = statName.charAt(0).toUpperCase() + statName.slice(1); // Paso a mayuscula la primera letra

                listItem.textContent = `${statNameUp}: ${statValue}`; // Agrego al texto dentro del li el nombre y valor del stat
                statsList.appendChild(listItem);

                // Crear una barra para representar el nivel del stat
                let bar = document.createElement('div');
                bar.classList.add('statBar');
                bar.style.width = `${(statValue / 255) * 100}%`; // Ajusta la longitud de la barra según el nivel
                listItem.appendChild(bar);

                statsList.appendChild(listItem);

                if (statClassMap[statName]) {
                    listItem.classList.add(statClassMap[statName]);
                }
                // Clases personalizadas para cada stat - Todo este IF lo refactoricé a un objeto arriba en la constante statClassMap

            });
        })
        //Si hubiera un error, logueo el error en la consola
        .catch(error => {
            console.error('Error:', error);
        })


    fetch(URLApi2)
        .then(response => {
            //Si la respuesta no es correcta
            if (!response.ok) {
                throw new Error('Algo salio mal en la conexión');
            }
            //Si la respuesta fue correcta, convertimos a JSON el objeto de respuesta
            return response.json();
        })

        .then(data => { //Encontrar la descripción en Español
            //Declaro como null para guardar el dato luego
            let descripcionEspañol = null;

            // busco en el array flavor_text_entries para buscar la descripción en español
            for (const entrada of data.flavor_text_entries) {
                if (entrada.language.name === "es") {
                    descripcionEspañol = entrada.flavor_text; // Guardo la descripción en Español
                    break;
                }// Termino el bucle una vez que encontramos la descripción en español
            }

            if (descripcionEspañol) {
                let descUp = descripcionEspañol.charAt(0).toUpperCase() + descripcionEspañol.slice(1); //La paso a mayuscula en la primera letra
                descriptionDetail.textContent = descUp; //Lo modifico en la web
            } else {
                console.error('No se encontró una descripción en español.');
                descriptionDetail.textContent = '¡No se encontró una descripción en español! 😢';
            }

        })
        //Si hubiera un error, logueo el error en la consola
        .catch(error => {
            console.error('Error:', error);
        })
}

const maxPokemonCount = 1008; //Hardcodeo la cantidad de pokemon existentes

let randomButton = document.getElementById('randomPokemon'); //Selecciono el boton para hacer la elección random del pokemon.

randomButton.addEventListener('click', () => {
    const randomPokemonNumber = pokemonRandom(maxPokemonCount);
    getPokemon(randomPokemonNumber);
}); //Ejecuto la funcion getPokemon y randomnumber

function pokemonRandom(maxPokemonCount) { //Hay 1008 Pokemons
    return Math.floor(Math.random() * maxPokemonCount); // Genera un número aleatorio entre 0 (inclusive) y maxPokemonCount (exclusivo)
}


function eliminarTodosLosHijos(parent) { //Lo dejo en español porque me parece demasiado gracioso
    while (parent.firstChild) { // Mientras haya un hijo se va a repetir
        parent.removeChild(parent.firstChild);
    }
}


let pokemon = document.getElementById('pokemonName');
pokemon.addEventListener('click', function () {
    nombrarPokemon(pokemon.innerText);
});

//Hace que el navegador diga el nombre del pokemon cuando se pincha sobre el.
function nombrarPokemon(pokemonName) {
    let contador = 0;

    let intervalo = setInterval(function () {
        let texto = pokemonName;
        let instanciaAudio = new SpeechSynthesisUtterance();

        instanciaAudio.text = texto;
        instanciaAudio.voice = window.speechSynthesis.getVoices()[0];

        window.speechSynthesis.speak(instanciaAudio);

        contador++;

        if (contador === 2) {
            clearInterval(intervalo);
        }
    }, 10);

}


//Asigno a una variable el boton de busqueda
let busquedaBoton = document.getElementById('buscaBoton');

//Ejecuto la función cuando se hace el click
busquedaBoton.addEventListener('click', (event) => {
    event.preventDefault() //Esto desactiva la recarga de la web, ya que de forma predeterminada un submit de un form recarga la web.
    //Guardo el nombre ingresado por el usuario
    let inputNombre = document.getElementById('nombre');
    //Paso a minuscula para que siempre encuentre el 
    let valorNombre = inputNombre.value.toLowerCase();
    //Verifico que si esta vacio el campo no se ejecute la función.
    if (valorNombre === '') {
        return
    } else {
        busquedaPokemonPorNombre(valorNombre);
    }
})

function busquedaPokemonPorNombre(nombreIngresado) {
    const URLApi = `https://pokeapi.co/api/v2/pokemon/${nombreIngresado}`
    eliminarTodosLosHijos(statsList); // Elimina todos los valores de stats del Pokémon anterior
    fetch(URLApi)
        .then(response => {
            //Si la respuesta no es correcta
            if (!response.ok) {
                throw new Error('Escribiste mal el pokémon!');
            }
            //Si la respuesta fue correcta, convertimos a JSON el objeto de respuesta
            return response.json();
        })

        .then(data => { //Copio la misma funcion de arriba
            let pokemonName = document.getElementById('pokemonName'); //Selecciono el elemento donde voy a completar el nombre
            let pokemonImage = document.getElementById('pokemonImage'); //Selecciono el elemento donde voy a completar la imagen
            pokemonName.textContent = data.name.toUpperCase();

            const urlImagePokemon = data.sprites.other['official-artwork'].front_default; //Guardo la url del sprite en una const
            pokemonImage.src = urlImagePokemon; //Modifico el src de la imagen

            let arrayStats = data.stats; // Creo un array donde guardo todos los valores de stats posibles

            const statClassMap = {
                hp: 'hp',
                attack: 'attack',
                defense: 'defense',
                'special-attack': 'special-attack', //Por el guion hay que usar comillas
                'special-defense': 'special-defense', //Por el guion hay que usar comillas
                speed: 'speed'
            };

            arrayStats.forEach(stat => {
                document.getElementById('secondContainer').style.display = 'flex';//Hago visible el contenedor
                let statName = stat.stat.name; // Busco el nombre de cada stat
                let statValue = stat.base_stat;; //Valor base del stat
                let listItem = document.createElement('li'); // Creo un li
                let statNameUp = statName.charAt(0).toUpperCase() + statName.slice(1); // Paso a mayuscula la primera letra

                listItem.textContent = `${statNameUp}: ${statValue}`; // Agrego al texto dentro del li el nombre y valor del stat
                statsList.appendChild(listItem);

                // Crear una barra para representar el nivel del stat
                let bar = document.createElement('div');
                bar.classList.add('statBar');
                bar.style.width = `${(statValue / 255) * 100}%`; // Ajusta la longitud de la barra según el nivel
                listItem.appendChild(bar);

                statsList.appendChild(listItem);

                if (statClassMap[statName]) {
                    listItem.classList.add(statClassMap[statName]);
                }
                // Clases personalizadas para cada stat - Todo este IF lo refactoricé a un objeto arriba en la constante statClassMap

            });
        })
        //Si hubiera un error, logueo el error en la consola
        .catch(error => {
            console.error('Error:', error);
            //Agrego un toast rojo para mostrar que el pokemon estaba mal escrito
            //Todo este quilombo de armar un div, ponerle estilo, id y hacer que quede por sobre todo
            //es solo para practicar - todo esto se podía haber reemplazado por un Alert() y listo.
            let toastError = document.createElement('div');
            toastError.textContent = '¡Escribiste mal el pokémon!';
            toastError.classList.add('toast');
            toastError.setAttribute('id', 'toast');
            headerMain.appendChild(toastError);
            //Al hacer click sobre el mensaje elimino el toast
            let toastErrorNot = document.getElementById('toast');

            toastErrorNot.addEventListener('click', function () {
                toastErrorNot.remove();
            })
        })
}


/*TODO Agregar logica que cambie para el pokemon anterior y al siguiente cuando se pulse la flecha */ 
let flechaIzquierda = document.getElementById('leftArrow');
let flechaDerecha = document.getElementById('rightArrow');

function nextPokemon() {
}


/* Esto cambia la fecha del copyright a la del año actual*/
const fecha = new Date();
const añoActual = fecha.getFullYear();
const h4Footer = document.getElementById("copyright").textContent = "©️ Copyright Kaled Emanuel Jaluf" + " " + añoActual;