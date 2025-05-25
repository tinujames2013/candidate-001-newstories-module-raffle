import './App.css';
import RaffleWidget from './components/RaffleWidget';

function App() {
  const userId = 123; // Simulated user ID

  return (
    <div className="App">
      <h1>NewStories Raffle</h1>
      <RaffleWidget userId={userId} />
    </div>
  );
}

export default App;
