import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useState } from 'react';
import './App.css';
import rand from "./Functions/rand";
function App() {


    const [kvToCircle, setKvToCircle] = useState('kv');
    const change = () => {
        setKvToCircle(circle => circle ===  'kv' ? 'crc' : 'kv');
        console.log('kazka');
    }
    const [staciakampis, setStaciakampis] = useState('crc')
    const changeTo = () => {
        setStaciakampis(stat => stat === 'crc' ? 'stat' : 'crc')
    }
    const [random, setRandom] = useState(0);
    const randd = () => {
        setRandom(rand(5,25))
    }
    const [skaicius, setSkaicius] = useState(0);
    const skaiciuotuvas = (ka) => setSkaicius ( s => s + ka) ;

    const [kvad, setKvad] = useState([]);
    const addRed = () => {
        setKvad(k => [...k, 'red'])
    }
    const addBlue = () => {
        setKvad(k => [...k, 'blue'])
    }
    const rem = () => {
        setKvad(k => k.slice(1))
    }

    
  return (
    <div className="App">
      <header className="App-header">
      <div className='kvc'>
          <div className={kvToCircle}> 
          </div>
          <button onClick={change} className='button'>Change</button>
        </div>
        <div className='kvc'>
        <div className={staciakampis}>
          {random} 
        </div>
            <button onClick={changeTo}>change</button>
            <button onClick={randd}>random</button>
        </div>
        <div className='kvc'>
        <div>Skaicius: {skaicius}</div>
        <button onClick={() => skaiciuotuvas(1)}>+</button>
        <button onClick={() => skaiciuotuvas (-3)}>-</button>
        </div>
        <div className='kvc'>
            {
                kvad.map( (c, i) => <div className='kv' style={{backgroundColor: c}} key={i}></div>)
            }
            <button onClick={addRed}>Add red</button>
            <button onClick={addBlue}>Add blue</button>
            <button onClick={rem}>Remove</button>
        </div>
      </header>
    </div>
  );
}

export default App;