import List from './components/List'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Test app
      </header>
      <List items={['Test 1', 'Test 2']} />
    </div>
  );
}

export default App;
