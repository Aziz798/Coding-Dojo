import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import { useNavigate } from 'react-router-dom';

function App() {
  const [option, setOption] = useState({
    option: '',
    id:''
  });
  const navigate=useNavigate();
  const formHandler=(e)=>{
    e.preventDefault();
    navigate(`/${option.option}/${option.id}`)
    setOption({
      ...option,
      id:''
    })
  }

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <label>Search for : </label>
        <select onChange={(e) => setOption({ ...option, option: e.target.value })} value={option.option}>
          <option value={'people'}>people</option>
          <option value={'planets'}>planet</option>
        </select>
        <label>id</label>
        <input type='number' onChange={(e)=>setOption({ ...option, id: e.target.value })} value={option.id} />
        <button>Search</button>
      </form>
      <Routes>
        <Route path='/:option/:id' element={<Display />}/>
      </Routes>
    </div>
  );
}

export default App;
