import { useState } from 'react';
import './App.scss';
import getId from './Functions/getId';

import rand from "./Functions/rand";

function App() {
    const [kv, setkv] = useState([]);
const add = () => {
    setkv((k) => [...k, {id: getId('kv'), name: 'Jonas'}]);
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD</h1>
        <p>Creat, read, update, delete</p>
        <div className='kvc'>
            {
                kv.map((k) => <div key={k.id} className='kv'>{k.id}</div>)
            }
            
        </div>
        <button onClick={add} className='a'>Add</button>
      </header>
    </div>
  );
}

export default App;