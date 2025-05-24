// Misión 1

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        const characters = data.results.slice(0, 5); // get 1st 5 characters
        console.log(characters);
    })
    .catch(error => {
        console.error('Error:', error);
    })
    .finally(() => {
        console.log('Fetch complete.');
    });