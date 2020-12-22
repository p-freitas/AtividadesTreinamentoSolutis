import './App.css';
import Relogio from './components/Relogio';
import Cronometro from './components/Cronometro';
import Temporizador from './components/Temporizador'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Relogio />
        <Temporizador />
      </div>
      <Cronometro />
    </div>
  );
}

export default App;
