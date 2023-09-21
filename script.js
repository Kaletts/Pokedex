let headerMain = document.getElementById('headerID');
//Array con todos los pokemons posibles para usar en la busqueda
const allPokemons = ["abomasnow", "abra", "absol", "accelgor", "aegislash", "aerodactyl", "aggron", "aipom", "alakazam", "alcremie", "alomomola", "altaria", "amaura", "ambipom", "amoonguss", "ampharos", "annihilape", "anorith", "appletun", "applin", "araquanid", "arbok", "arboliva", "arcanine", "arceus", "archen", "archeops", "arctibax", "arctovish", "arctozolt", "ariados", "armaldo", "armarouge", "aromatisse", "aron", "arrokuda", "articuno", "audino", "aurorus", "avalugg", "axew", "azelf", "azumarill", "azurill", "bagon", "baltoy", "banette", "barbaracle", "barboach", "barraskewda", "basculegion", "basculin", "bastiodon", "baxcalibur", "bayleef", "beartic", "beautifly", "beedrill", "beheeyem", "beldum", "bellibolt", "bellossom", "bellsprout", "bergmite", "bewear", "bibarel", "bidoof", "binacle", "bisharp", "blacephalon", "blastoise", "blaziken", "blipbug", "blissey", "blitzle", "boldore", "boltund", "bombirdier", "bonsly", "bouffalant", "bounsweet", "braixen", "brambleghast", "bramblin", "braviary", "breloom", "brionne", "bronzong", "bronzor", "brute bonnet", "bruxish", "budew", "buizel", "bulbasaur", "buneary", "bunnelby", "burmy", "butterfree", "buzzwole", "cacnea", "cacturne", "calyrex", "camerupt", "capsakid", "carbink", "carkol", "carnivine", "carracosta", "carvanha", "cascoon", "castform", "caterpie", "celebi", "celesteela", "centiskorch", "ceruledge", "cetitan", "cetoddle", "chandelure", "chansey", "charcadet", "charizard", "charjabug", "charmander", "charmeleon", "chatot", "cherrim", "cherubi", "chesnaught", "chespin", "chewtle", "chi-yu", "chien-pao", "chikorita", "chimchar", "chimecho", "chinchou", "chingling", "cinccino", "cinderace", "clamperl", "clauncher", "clawitzer", "claydol", "clefable", "clefairy", "cleffa", "clobbopus", "clodsire", "cloyster", "coalossal", "cobalion", "cofagrigus", "combee", "combusken", "comfey", "conkeldurr", "copperajah", "corphish", "corsola", "corviknight", "corvisquire", "cosmoem", "cosmog", "cottonee", "crabominable", "crabrawler", "cradily", "cramorant", "cranidos", "crawdaunt", "cresselia", "croagunk", "crobat", "crocalor", "croconaw", "crustle", "cryogonal", "cubchoo", "cubone", "cufant", "cursola", "cutiefly", "cyclizar", "cyndaquil", "dachsbun", "darkrai", "darmanitan", "dartrix", "darumaka", "decidueye", "dedenne", "deerling", "deino", "delcatty", "delibird", "delphox", "deoxys", "dewgong", "dewott", "dewpider", "dhelmise", "dialga", "diancie", "diggersby", "diglett", "ditto", "dodrio", "doduo", "dolliv", "dondozo", "donphan", "dottler", "doublade", "dracovish", "dracozolt", "dragalge", "dragapult", "dragonair", "dragonite", "drakloak", "drampa", "drapion", "dratini", "drednaw", "dreepy", "drifblim", "drifloon", "drilbur", "drizzile", "drowzee", "druddigon", "dubwool", "ducklett", "dudunsparce", "dugtrio", "dunsparce", "duosion", "duraludon", "durant", "dusclops", "dusknoir", "duskull", "dustox", "dwebble", "eelektrik", "eelektross", "eevee", "eiscue", "ekans", "eldegoss", "electabuzz", "electivire", "electrike", "electrode", "elekid", "elgyem", "emboar", "emolga", "empoleon", "enamorus", "entei", "escavalier", "espathra", "espeon", "espurr", "eternatus", "excadrill", "exeggcute", "exeggutor", "exploud", "falinks", "farfetch'd", "farigiraf", "fearow", "feebas", "fennekin", "feraligatr", "ferroseed", "ferrothorn", "fidough", "finizen", "finneon", "flaaffy", "flabébé", "flamigo", "flapple", "flareon", "fletchinder", "fletchling", "flittle", "floatzel", "floette", "floragato", "florges", "flutter mane", "flygon", "fomantis", "foongus", "forretress", "fraxure", "frigibax", "frillish", "froakie", "frogadier", "froslass", "frosmoth", "fuecoco", "furfrou", "furret", "gabite", "gallade", "galvantula", "garbodor", "garchomp", "gardevoir", "garganacl", "gastly", "gastrodon", "genesect", "gengar", "geodude", "gholdengo", "gible", "gigalith", "gimmighoul", "girafarig", "giratina", "glaceon", "glalie", "glameow", "glastrier", "gligar", "glimmet", "glimmora", "gliscor", "gloom", "gogoat", "golbat", "goldeen", "golduck", "golem", "golett", "golisopod", "golurk", "goodra", "goomy", "gorebyss", "gossifleur", "gothita", "gothitelle", "gothorita", "gourgeist", "grafaiai", "granbull", "grapploct", "graveler", "great tusk", "greavard", "greedent", "greninja", "grimer", "grimmsnarl", "grookey", "grotle", "groudon", "grovyle", "growlithe", "grubbin", "grumpig", "gulpin", "gumshoos", "gurdurr", "guzzlord", "gyarados", "hakamo-o", "happiny", "hariyama", "hatenna", "hatterene", "hattrem", "haunter", "hawlucha", "haxorus", "heatmor", "heatran", "heliolisk", "helioptile", "heracross", "herdier", "hippopotas", "hippowdon", "hitmonchan", "hitmonlee", "hitmontop", "ho-oh", "honchkrow", "honedge", "hoopa", "hoothoot", "hoppip", "horsea", "houndoom", "houndour", "houndstone", "huntail", "hydreigon", "hypno", "igglybuff", "illumise", "impidimp", "incineroar", "indeedee", "infernape", "inkay", "inteleon", "iron bundle", "iron hands", "iron jugulis", "iron leaves", "iron moth", "iron thorns", "iron treads", "iron valiant", "ivysaur", "jangmo-o", "jellicent", "jigglypuff", "jirachi", "jolteon", "joltik", "jumpluff", "jynx", "kabuto", "kabutops", "kadabra", "kakuna", "kangaskhan", "karrablast", "kartana", "kecleon", "keldeo", "kilowattrel", "kingambit", "kingdra", "kingler", "kirlia", "klang", "klawf", "kleavor", "klefki", "klink", "klinklang", "koffing", "komala", "kommo-o", "koraidon", "krabby", "kricketot", "kricketune", "krokorok", "krookodile", "kubfu", "kyogre", "kyurem", "lairon", "lampent", "landorus", "lanturn", "lapras", "larvesta", "larvitar", "latias", "latios", "leafeon", "leavanny", "lechonk", "ledian", "ledyba", "lickilicky", "lickitung", "liepard", "lileep", "lilligant", "lillipup", "linoone", "litleo", "litten", "litwick", "lokix", "lombre", "lopunny", "lotad", "loudred", "lucario", "ludicolo", "lugia", "lumineon", "lunala", "lunatone", "lurantis", "luvdisc", "luxio", "luxray", "lycanroc", "mabosstiff", "machamp", "machoke", "machop", "magby", "magcargo", "magearna", "magikarp", "magmar", "magmortar", "magnemite", "magneton", "magnezone", "makuhita", "malamar", "mamoswine", "manaphy", "mandibuzz", "manectric", "mankey", "mantine", "mantyke", "maractus", "mareanie", "mareep", "marill", "marowak", "marshadow", "marshtomp", "maschiff", "masquerain", "maushold", "mawile", "medicham", "meditite", "meganium", "melmetal", "meloetta", "meltan", "meowscarada", "meowstic", "meowth", "mesprit", "metagross", "metang", "metapod", "mew", "mewtwo", "mienfoo", "mienshao", "mightyena", "milcery", "milotic", "miltank", "mime jr.", "mimikyu", "minccino", "minior", "minun", "miraidon", "misdreavus", "mismagius", "moltres", "monferno", "morelull", "morgrem", "morpeko", "mothim", "mr. mime", "mr. rime", "mudbray", "mudkip", "mudsdale", "muk", "munchlax", "munna", "murkrow", "musharna", "nacli", "naclstack", "naganadel", "natu", "necrozma", "nickit", "nidoking", "nidoqueen", "nidoran♀", "nidoran♂", "nidorina", "nidorino", "nihilego", "nincada", "ninetales", "ninjask", "noctowl", "noibat", "noivern", "nosepass", "numel", "nuzleaf", "nymble", "obstagoon", "octillery", "oddish", "oinkologne", "omanyte", "omastar", "onix", "oranguru", "orbeetle", "oricorio", "orthworm", "oshawott", "overqwil", "pachirisu", "palafin", "palkia", "palossand", "palpitoad", "pancham", "pangoro", "panpour", "pansage", "pansear", "paras", "parasect", "passimian", "patrat", "pawmi", "pawmo", "pawmot", "pawniard", "pelipper", "perrserker", "persian", "petilil", "phanpy", "phantump", "pheromosa", "phione", "pichu", "pidgeot", "pidgeotto", "pidgey", "pidove", "pignite", "pikachu", "pikipek", "piloswine", "pincurchin", "pineco", "pinsir", "piplup", "plusle", "poipole", "politoed", "poliwag", "poliwhirl", "poliwrath", "polteageist", "ponyta", "poochyena", "popplio", "porygon", "porygon-z", "porygon2", "primarina", "primeape", "prinplup", "probopass", "psyduck", "pumpkaboo", "pupitar", "purrloin", "purugly", "pyroar", "pyukumuku", "quagsire", "quaquaval", "quaxly", "quaxwell", "quilava", "quilladin", "qwilfish", "raboot", "rabsca", "raichu", "raikou", "ralts", "rampardos", "rapidash", "raticate", "rattata", "rayquaza", "regice", "regidrago", "regieleki", "regigigas", "regirock", "registeel", "relicanth", "rellor", "remoraid", "reshiram", "reuniclus", "revavroom", "rhydon", "rhyhorn", "rhyperior", "ribombee", "rillaboom", "riolu", "roaring moon", "rockruff", "roggenrola", "rolycoly", "rookidee", "roselia", "roserade", "rotom", "rowlet", "rufflet", "runerigus", "sableye", "salamence", "salandit", "salazzle", "samurott", "sandaconda", "sandile", "sandshrew", "sandslash", "sandy shocks", "sandygast", "sawk", "sawsbuck", "scatterbug", "sceptile", "scizor", "scolipede", "scorbunny", "scovillain", "scrafty", "scraggy", "scream tail", "scyther", "seadra", "seaking", "sealeo", "seedot", "seel", "seismitoad", "sentret", "serperior", "servine", "seviper", "sewaddle", "sharpedo", "shaymin", "shedinja", "shelgon", "shellder", "shellos", "shelmet", "shieldon", "shiftry", "shiinotic", "shinx", "shroodle", "shroomish", "shuckle", "shuppet", "sigilyph", "silcoon", "silicobra", "silvally", "simipour", "simisage", "simisear", "sinistea", "sirfetch'd", "sizzlipede", "skarmory", "skeledirge", "skiddo", "skiploom", "skitty", "skorupi", "skrelp", "skuntank", "skwovet", "slaking", "slakoth", "sliggoo", "slither wing", "slowbro", "slowking", "slowpoke", "slugma", "slurpuff", "smeargle", "smoliv", "smoochum", "sneasel", "sneasler", "snivy", "snom", "snorlax", "snorunt", "snover", "snubbull", "sobble", "solgaleo", "solosis", "solrock", "spearow", "spectrier", "spewpa", "spheal", "spidops", "spinarak", "spinda", "spiritomb", "spoink", "sprigatito", "spritzee", "squawkabilly", "squirtle", "stakataka", "stantler", "staraptor", "staravia", "starly", "starmie", "staryu", "steelix", "steenee", "stonjourner", "stoutland", "stufful", "stunfisk", "stunky", "sudowoodo", "suicune", "sunflora", "sunkern", "surskit", "swablu", "swadloon", "swalot", "swampert", "swanna", "swellow", "swinub", "swirlix", "swoobat", "sylveon", "tadbulb", "taillow", "talonflame", "tandemaus", "tangela", "tangrowth", "tapu bulu", "tapu fini", "tapu koko", "tapu lele", "tarountula", "tatsugiri", "tauros", "teddiursa", "tentacool", "tentacruel", "tepig", "terrakion", "thievul", "throh", "thundurus", "thwackey", "timburr", "ting-lu", "tinkatink", "tinkaton", "tinkatuff", "tirtouga", "toedscool", "toedscruel", "togedemaru", "togekiss", "togepi", "togetic", "torchic", "torkoal", "tornadus", "torracat", "torterra", "totodile", "toucannon", "toxapex", "toxel", "toxicroak", "toxtricity", "tranquill", "trapinch", "treecko", "trevenant", "tropius", "trubbish", "trumbeak", "tsareena", "turtonator", "turtwig", "tympole", "tynamo", "type: null", "typhlosion", "tyranitar", "tyrantrum", "tyrogue", "tyrunt", "umbreon", "unfezant", "unown", "ursaluna", "ursaring", "urshifu", "uxie", "vanillish", "vanillite", "vanilluxe", "vaporeon", "varoom", "veluza", "venipede", "venomoth", "venonat", "venusaur", "vespiquen", "vibrava", "victini", "victreebel", "vigoroth", "vikavolt", "vileplume", "virizion", "vivillon", "volbeat", "volcanion", "volcarona", "voltorb", "vullaby", "vulpix", "wailmer", "wailord", "walking wake", "walrein", "wartortle", "watchog", "wattrel", "weavile", "weedle", "weepinbell", "weezing", "whimsicott", "whirlipede", "whiscash", "whismur", "wigglytuff", "wiglett", "wimpod", "wingull", "wishiwashi", "wo-chien", "wobbuffet", "woobat", "wooloo", "wooper", "wormadam", "wugtrio", "wurmple", "wynaut", "wyrdeer", "xatu", "xerneas", "xurkitree", "yamask", "yamper", "yanma", "yanmega", "yungoos", "yveltal", "zacian", "zamazenta", "zangoose", "zapdos", "zarude", "zebstrika", "zekrom", "zeraora", "zigzagoon", "zoroark", "zorua", "zubat", "zweilous", "zygarde"];

//Variable global donde voy a guardar el ID del pokemon
let pokemonIDGLOBAL;

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
            pokemonIDGLOBAL = data.id;

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

const maxPokemonCount = 1021; //Hardcodeo la cantidad de pokemon existentes

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



//Busqueda de pokemon por el nombre
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
        pokemonMasParecido(valorNombre, allPokemons);
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

        //Simplemente ejecuto la funcion getPokemon usando el ID tomado del nombre ingresado
        .then(data => {
            let pokemonID = data.id;
            pokemonIDGLOBAL = data.id;
            getPokemon(pokemonID);
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



//TODO Agregar logica que cambie para el pokemon anterior y al siguiente cuando se pulse la flecha
let flechaIzquierda = document.getElementById('leftArrow');
let flechaDerecha = document.getElementById('rightArrow');

flechaDerecha.addEventListener('click', nextPokemon);
flechaIzquierda.addEventListener('click', previousPokemon);

//Funcion para proximo pokemon
function nextPokemon() {
    const URLApi = `https://pokeapi.co/api/v2/pokemon/${pokemonIDGLOBAL}/`
    fetch(URLApi)
        .then(response => {
            if (!response.ok) {
                throw new Error('Algo salio mal');
            }
            return response.json();
        })
        .then(data => {
            let pokemonID = data.id;
            pokemonID++;
            getPokemon(pokemonID);
        })
        .catch(error => {
            console.error('Error:', error);
        })
}

//Funcion para el anterior pokemon
function previousPokemon() {
    const URLApi = `https://pokeapi.co/api/v2/pokemon/${pokemonIDGLOBAL}/`
    fetch(URLApi)
        .then(response => {
            if (!response.ok) {
                throw new Error('Algo salio mal');
            }
            return response.json();
        })
        .then(data => {
            let pokemonID = data.id;
            pokemonID--;
            getPokemon(pokemonID);
        })
        .catch(error => {
            console.error('Error:', error);
        })
}

//Funcion que busca el pokemon mas parecido, recibe el input y la lista de pokemons del array global - Voy a comentar todo para que se entienda mejor
function pokemonMasParecido(input, pokemonNames) {
    //Guardo dos variables una para el nombre más parecido y otra para usar de indice de parecido
    let nombreMasParecido = '';
    let maximaSimilaridad = 0;
    //Loop for que se ejecuta por cada pokemon tomado del array global con todos los pokemons
    for (const pokemon of pokemonNames) {
        //Establezco la similaridad a 0
        let similaridad = 0;

        //Otro loop for para poder sumar 1 cada vez que sea igual una letra de cada pokemon
        //(esto compara desde la primera letra del pokemon por eso 0 y se repite por todo el largo del nombre)
        //El i++ hace que se incremente el valor leido osea pasamos a la segunda letra, tercera y asi sucesivamente
        for (let i = 0; i < pokemon.length; i++) {
            //Esto compara la primera letra del pokemon ingresado con la primera de cada pokemon del array si coincide se suma similaridad al indice sino se cancela el if
            if (input[i] === pokemon[i]) {
                similaridad++;
            } else {
                break;
            }
        }
        //Finalmente se compara la similaridad con la maxima similaridad
        if (similaridad > maximaSimilaridad) {
            maximaSimilaridad = similaridad;
            nombreMasParecido = pokemon;
        }
    }
    busquedaPokemonPorNombre(nombreMasParecido);
}



//Esto cambia la fecha del copyright a la del año actual
const fecha = new Date();
const añoActual = fecha.getFullYear();
const h4Footer = document.getElementById("copyright").textContent = "©️ Copyright Kaled Emanuel Jaluf" + " " + añoActual;






