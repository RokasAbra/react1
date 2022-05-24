import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Books from './components/011/Books';
import rand from "./Functions/rand";
import axios from 'axios';

function App() {
    const [count, setCount] = useState(1);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        console.log('Yes');// signalas Ready, pranesa kad komponentas yra pasiruoses darbui, paleidzia tiktai tada kai viskas uzsikrauna
        axios.get('https://in3.dev/knygos/')
        .then( res => {
            console.log(res.data);
            setBooks(res.data)
            
        })
    }, [count]); // [] masyve useefecto valdymas,  jei tuscias pasileidzia tiktai viena vieninteli karta
    
     const [user, setUser] = useState([]);
     useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users').then( resz => {
            setUser(resz.data)

        })
     })

 

  return (
    <div className="App">
      <header className="App-header">
          <h1>{count}</h1>
          <button onClick={() => setCount(c => c + 1)}>+1</button>
          <Books books={books}></Books>
          {
              user.map(b => <div key={b.id}>{b.username}: {b.name}</div>)
          }
      </header>
    </div>
  );
}

export default App;