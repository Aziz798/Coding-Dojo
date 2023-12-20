import SaleItem from './components/SaleItem';
import './App.css';

function App() {
  const person1={
    firstName:'Jane',
    lastName:'Doe',
    age:45,
    hairColor:'Black'
  }
  const person2={
    firstName:'John',
    lastName:'Smith',
    age:88,
    hairColor:'Brown'
  }
  const person3={
    firstName:'Millard',
    lastName:'Fillmore',
    age:50,
    hairColor:'Brown'
  }
  const person4={
    firstName:'Maria',
    lastName:'Smith',
    age:62,
    hairColor:'Brown'
  }
  return (
      <div className="App">
          <SaleItem prop1={ person1 } />
          <SaleItem prop1={ person2 } />
          <SaleItem prop1={ person3 } />
          <SaleItem prop1={ person4 } />
      </div>
  );
}

export default App;
