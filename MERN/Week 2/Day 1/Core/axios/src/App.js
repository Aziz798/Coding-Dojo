import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchSuperHeroes = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => setPokemon(response.data.results))
      .catch(error => console.error("Error fetching data:", error));
  }

  return (
    <div className="App">
      <button onClick={fetchSuperHeroes}>Fetch Pokémon</button>

      <ul>
        {pokemon.map((pok,idx) => <li key={idx}>{pok.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
