import Tabs from './components/Tabs';
import './App.css'
const tabsData = [
  {
      label: 'Tab 1',
      content: 'Content for Tab 1',
      
  },
  {
      label: 'Tab 2',
      content: 'Content for Tab 2',
      
  },
  {
      label: 'Tab 3',
      content: 'Content for Tab 3',
      
  }
];

// App component
const App = () => {
  return (
      <div>
          
          <Tabs prop={tabsData} />
      </div>
  );
};

export default App;
