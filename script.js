
function getPokemon(maxPokemonCount) {
    const URLApi = `https://pokeapi.co/api/v2/pokemon/${maxPokemonCount}/` // URL del API para elegir el Pokémon 
    const URLApi2 = `https://pokeapi.co/api/v2/pokemon-species/${maxPokemonCount}` // URL del API para la descripción

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
            descriptionDetail.textContent = data['flavor_text_entries']['flavor_text']; // Completo la descripción
        })
        //Si hubiera un error, logueo el error en la consola
        .catch(error => {
            console.error('Error:', error);
        })
}


//Esto funciona, ahora hay que modificar el DOM usando los datos de la respuesta.


const maxPokemonCount = 1008; //Hardcodeo la cantidad de pokemon existentes

let randomButton = document.getElementById('randomPokemon'); //Selecciono el boton para hacer la elección random del pokemon.

randomButton.addEventListener('click', () => {
    const randomPokemonNumber = pokemonRandom(maxPokemonCount);
    getPokemon(randomPokemonNumber);
}); //Ejecuto la funcion getPokemon y randomnumber

function pokemonRandom(maxPokemonCount) { //Hay 1008 Pokemons
    return Math.floor(Math.random() * maxPokemonCount); // Genera un número aleatorio entre 0 (inclusive) y maxPokemonCount (exclusivo)
}







