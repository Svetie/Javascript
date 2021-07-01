// download JSON formatter
console.log("connected");

//async function does processes in the background
// allows to run processes in order
async function getPokemon(name){
    // using a promise: wait for it. Code can run faster than the info from the internet
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+name); 
    // console.log(response);
    
    // when the rosponse is received - proceed
    // need json to access data
    let data = await response.json();
    // console.log(data);
    // console.log(data.types[0].type.name);

    // copy the url to the image
    // console.log(data.sprites.front_shiny);


    let image = document.getElementById('pkmn');
    image.src = data.sprites.front_shiny;
    image.alt = name;
    // image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png";

}

// getPokemon("bulbasaur");

function searchForPokemon(){
    let inp = document.getElementById('searcPok');
    let name = inp.value;

    getPokemon(name);

}


