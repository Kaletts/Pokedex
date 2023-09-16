
function getPokemon(maxPokemonCount) {
    const URLApi = `https://pokeapi.co/api/v2/pokemon/${maxPokemonCount}/` // URL del API para elegir el Pokémon 
    const URLApi2 = `https://pokeapi.co/api/v2/pokemon-species/${maxPokemonCount}` // URL del API para la descripción
    let statsList = document.getElementById('statsList');
    eliminarTodosLosHijos(statsList); // Elimina todos los valores de stats del Pokémon anterior


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
                document.getElementById('secondContainer').style.display = 'block';
                let statName = stat.stat.name; // Busco el nombre de cada stat
                let statValue = stat.base_stat;; //Valor base del stat
                let listItem = document.createElement('li'); // Creo un li
                let statNameUp = statName.charAt(0).toUpperCase() + statName.slice(1); // Paso a mayuscula la primera letra

                listItem.textContent = `${statNameUp}: ${statValue}`; // Agrego al texto dentro del li el nombre y valor del stat
                statsList.appendChild(listItem);

                if (statClassMap[statName]) {
                    listItem.classList.add(statClassMap[statName]);
                }

                // Clases personalizadas para cada stat - Todo este IF lo refactoricé a un objeto arriba en la constante statClassMap, guardo el codigo de ejemplo

                /*  if (statName === 'hp') { 
                     listItem.classList.add('hp');
                 } else if (statName === 'attack') {
                     listItem.classList.add('attack');
                 } else if (statName === 'defense') {
                     listItem.classList.add('defense');
                 } else if (statName === 'special-attack') {
                     listItem.classList.add('special-attack');
                 } else if (statName === 'special-defense') {
                     listItem.classList.add('special-defense');
                 } else if (statName === 'speed') {
                     listItem.classList.add('speed');
                 } */
                // Logueo los valores para saber que estan bien
                console.log(statName);
                console.log(statValue);
            });
            console.log(data);
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

        .then(data => {
            let pokemonDescription = document.getElementById('descriptionDetail'); //Selecciono el elemento donde voy a completar la descripción
            let desc = data.flavor_text_entries[1].flavor_text; //Guardo toda la descripción
            let descUp = desc.charAt(0).toUpperCase() + desc.slice(1); // Paso a mayuscula la primera letra
            descriptionDetail.textContent = descUp // Completo la descripción
            console.log(data);
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







