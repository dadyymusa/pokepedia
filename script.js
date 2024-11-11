document.addEventListener("DOMContentLoaded", function() {
    // Selecting the button tag
    document.getElementsByTagName("button")[0].addEventListener('click', function() {  
      const name = document.getElementById('name').value.toLowerCase();
      const pokemonImage = document.getElementById('pokemon-image');
      const pokemonData = document.getElementById('pokemon-data');
  
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
          // Display Pokémon image
          pokemonImage.src = data.sprites.front_default;
  
          // Display Pokémon details
          pokemonData.innerHTML = `
            <h3 align = "center">${data.name.toUpperCase()}</h3>
            <p><strong>Type:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
            <p><strong>Height:</strong> ${data.height / 10} m</p>
            <p><strong>Weight:</strong> ${data.weight / 10} kg</p>
          `;
        })
        .catch(error => {
          pokemonImage.src = '';
          pokemonData.innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
    });
  });
  