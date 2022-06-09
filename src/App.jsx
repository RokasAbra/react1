import axios from 'axios';
import { useEffect, useReducer } from 'react';
import './App.scss';
import BooksReducer from './Reducers/BooksReducer';


function App() {
    
    const [books, dispachBooks] = useReducer(BooksReducer, []);

    useEffect(() => {
        console.log('Ready');// signalas Ready, pranesa kad komponentas yra pasiruoses darbui, paleidzia tiktai tada kai viskas uzsikrauna
        axios.get('https://in3.dev/knygos/')
        .then( res => {
            console.log(res.data);
            const action = {
                type: 'books',
                payload: res.data,
                
            }
            dispachBooks(action)
           
        });
    }, []); // [] masyve useefecto valdymas,  jei tuscias pasileidzia tiktai viena vieninteli karta
    const sort = () =>{
        const action = {
            type: 'sort',
            
        };
        dispachBooks(action);
    }
    const sortDef = ()=> {
        const action = {
            type: 'sortDef',
        };
        dispachBooks(action)
    }
    const byPirce = ()=> {
        const action = {
            type: 'byPirce',
        };
        dispachBooks(action)
    }

 

  return (
    <div className="App">
      <header className="App-header">
          <h1>Class 022</h1>
          <div>
              {
                books.length ? books.map((b) => <div key={b.id}>{b.title} <i>kaina: {b.price}eu</i></div>) : <h2>loading...</h2>
              }
          </div>
          <button onClick={sort}>Sort Abc</button>
          <button onClick={sortDef}>Sort by default</button>
          <button onClick={byPirce}>By price</button>
      </header>
    </div>
  );
}

export default App;