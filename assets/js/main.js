
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))
    .finally(() => console.log('Requisição concluída'))


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