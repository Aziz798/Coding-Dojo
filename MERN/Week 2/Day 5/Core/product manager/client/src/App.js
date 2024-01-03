import {Routes,Route,Navigate} from 'react-router-dom';
import './App.css';
import Display from './components/Display';
import ShowOne from './components/ShowOne';
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/products'/>}/>
        <Route path='/products' element={<Display/>}/>
        <Route path='/products/:id' element={<ShowOne/>}/>
        <Route path='/products/:id/edit' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
