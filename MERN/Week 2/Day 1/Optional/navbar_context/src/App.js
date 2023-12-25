import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import FormWrapper from './context/FormWrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar/>
        <FormWrapper.Provider/>
      </Wrapper>
    </div>
  );
}

export default App;
