//mision 2
async function fetchCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        const characters = data.results.slice(0, 5); // Obtener los primeros 5 personajes
        console.log(characters);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log('Fetch complete.');
    }
}

fetchCharacters();