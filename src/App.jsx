import { useEffect, useRef, useState } from 'react';
import './App.scss';

import rand from "./Functions/rand";
function App() {
    const [count, setCount] = useState(null);
    const panda = useRef();
    const mano = useRef(0); // tiesiog kaip plain javaScript kintamasis https://dmitripavlutin.com/react-useref-guide/

    useEffect(() => {
        setCount(parseInt(localStorage.getItem('count') ?? 0 ));// A = B ?? 0 ,  du klaustukai reiskia, kad jeigu B yra null turime dafaultine reiksmia kuria galime priskirti A default ==> 0
    }, []);

    useEffect(() => {
        if (null == count) {
            return;
        }
        localStorage.setItem('count', count);
    }, [count]);


    const [kv, setKv] = useState(null);
    const addKv = () => {
        setKv(k => [...k, 'red']);
    }

    const remKv = () => {
        setKv(k => k.slice(1));
    }

    useEffect(() => {
        setKv(JSON.parse(localStorage.getItem('kv') ?? '[]'));
    }, []);

    useEffect(() => {
        if (null === kv) {
            return;
        }
        localStorage.setItem('kv', JSON.stringify(kv));
    }, [kv]);


    const add = () => {
        setCount(c =>  c + 1);
        mano.current = mano.current + 3;
        // mano = mano + 3;
        console.log(mano.current);
        const p = panda.current;
        // console.log(p.dataset.panda);
    }

    const addDog = () => {
        localStorage.setItem('Dog', JSON.stringify(['Reksas', 'Lese'])); // JSON.stringify leidzia i local storage ideti masyva kaip masyva ne  stringa
    }
    const getDog = () => {
        console.log(JSON.parse(localStorage.getItem('Dog')));// jei bandome paimti tai ko nera gauname null
    } //JSON.parse leidzia i console isloginti masyva vietoj stringo
    const remDog = () => {
        localStorage.removeItem('Dog');
    }


  return (
    <div className="App">
      <header className="App-header">
        <h1> useRef LocalStorage {count}</h1>
        <button onClick={add}>+</button>
        <button onClick={addDog}>Add Dog</button>
        <button onClick={getDog}>Get Dog</button>
        <button onClick={remDog}>Rem Dog</button>
        <button onClick={addKv}>Add [kvadratas]</button>
        <button onClick={remKv}>Rem [kvadratas]</button>
        <div className="kvC">
       { 
          kv ? kv.map( (_, i) => <div className='kv' key={i} > {i + 1}</div>) : null
       }
       </div>
        <div  ref={panda} data-panda='miega'></div>

      </header>
    </div>
  );
}

export default App;