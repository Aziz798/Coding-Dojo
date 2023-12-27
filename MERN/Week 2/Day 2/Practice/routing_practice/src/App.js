import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Number from "./components/Number";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:id/:text/:color" element={<Number/>}/>
      </Routes>
    </div>
  );
}

export default App;
