import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import AllAuthors from './components/AllAuthors';
import Edit from './components/Edit';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/authors' />} />
        <Route path='/authors' element={<AllAuthors />} />
        <Route path='/authors/new' element={<Create />} />
        <Route path='/authors/:id/edit' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
