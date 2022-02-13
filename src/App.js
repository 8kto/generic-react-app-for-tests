import CounterConnected from './components/CounterConnected'
import CounterHooked from './components/CounterHooked'
import List from './components/List'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Test React app</header>

      <h2>Redux</h2>
      <CounterHooked />
      <CounterConnected />

      <h2>Components</h2>
      <List items={['Test 1', 'Test 2']} />
    </div>
  );
}

export default App;
