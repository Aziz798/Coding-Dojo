import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react';
import './App.css';

function App() {
  const boxes=[
    {
      height:'300',
      width:'200',
      color:'#000000'
    }
  ];
  const [box,boxState]=useState(boxes);
  return (
    <div className="App">
      <Form boxState={boxState} box={box} />
      <Display boxes={box}/>
    </div>
  );
}

export default App;
