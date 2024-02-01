
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');
pokemonList.innerHTML += '<li>Teste</li>'


/*
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon  = pokemonList[i];
            console.log(convertPokemonToHtml(pokemon));  
            
            document.getElementsById('pokemonList')
        }

    })
    .catch((error) => console.error(error))
    .finally(() => console.log('Requisição concluída'))

*/

/* O CÓDIGO ABAIXO FAZ O MESMO QUE O DE CIMA.PORÉM, NÃO DE FORMA ORGANIZADA/ELEGANTE

fetch( url )
    .then( function( response ){
        response
            .json()
            .then( function( responseBody ){
                console.log( responseBody );
            }) 
    })
    .catch( function( error ){
        console.log( error );
    })
    .finally( function() {
        console.log( 'Requisição concluída' );
    })
*/