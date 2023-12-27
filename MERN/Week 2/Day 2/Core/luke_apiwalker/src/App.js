import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people');
      setData(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const formHandler = (e) => {
    e.preventDefault();
    // Do something with the selected ID, for example, fetch data based on the ID
    // You can use the selectedId state here
    console.log('Selected ID:', selectedId);
  };

  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <button type="submit">Fetch Data</button>
        <select>
          {data.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        <label>ID</label>
        <input
          type="number"
          value={selectedId}
          onChange={e => setSelectedId(e.target.value)}
        />
        <button onClick={}>Search</button>
      </form>

      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
