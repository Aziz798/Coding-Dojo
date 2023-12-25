import { useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchSuperHeroes = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(data => {
        setPokemon(data.results);
        console.log(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }

  return (
    <div className="App">
      <button onClick={fetchSuperHeroes}>Fetch Pokémon</button>

      <ul>
        {pokemon.map(pok=><li>{pok.name}</li>)}
        
      </ul>
    </div>
  );
}

export default App;
