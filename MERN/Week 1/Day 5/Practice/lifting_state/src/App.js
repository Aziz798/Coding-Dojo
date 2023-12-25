import Form from './components/Form';
import Box from './components/Box';
import './App.css';
import { useState } from 'react';

function App() {
  const boxes = [
    {
      height:'250px',
      width:'200px',
      color:'black'
    }
  ];
  const [element,setElement]=useState(boxes)


  return (
    <div className="App">
      <Form data={setElement}/>
      <Box box={element}/>
    </div>
  );
}

export default App;
