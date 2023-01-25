// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const htmlContainer = document.getElementById('container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


//loop over the url number, each index number corresponds to a different pokemon

for (let index = 1; index <= 151; index++) {

    const eachPokemon = document.createElement('div');
    eachPokemon.className = 'pokemon'

    const pokemonNumber = document.createElement('span');
    pokemonNumber.innerText = `#${index}`;

    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${index}.png`;

    eachPokemon.appendChild(newImg);
    eachPokemon.appendChild(pokemonNumber);
    htmlContainer.appendChild(eachPokemon)
}