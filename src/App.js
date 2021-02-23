import GameBoard from './layout/GameBoard';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>TicTacToe</h1>
      </header>
      <section className="app__container">
        <GameBoard />
      </section>
    </div>
  );
}

export default App;
