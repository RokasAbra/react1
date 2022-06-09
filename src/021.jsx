import { useEffect, useReducer, useRef, useState } from 'react';
import './App.scss';
import numberListReducer from './Reducers/numberListReducer';

function App() {
    const [numberList, dispachNumberList] =useReducer(numberListReducer, []);
    const [number, setNumber] = useState('');
    const [range, setRange] = useState('0');
    const doRange = useRef(true)

const addList = () => {
    const action = {
        type: 'go_list',
    };
    dispachNumberList(action)
}
const group = () => {
    const action = {
        type: 'order',
    };
    dispachNumberList(action);
}
const filt1 = () => {
    const action = { 
        type: 'more',
    };
    dispachNumberList(action);
}
const filt2 = () => {
    const action = { 
        type: 'less',
    };
    dispachNumberList(action);
}
const reset = (n) => {
    const action = { 
        type: 'reset',
        payload: n
    };
    dispachNumberList(action);
}
const defGroup = () => {
    const action = {
        type: 'defGroup'
    };
    dispachNumberList(action);
}
const add = () => {
    const action = {
        type: 'add',
    };
    dispachNumberList(action);
}

const remove = (n) => {
    
    const action = {
        type: 'hide',
        payload: n
    };
    dispachNumberList(action);
}
/*padaryti input laukelį į kurį irašius kvadratuko skaičių ir paspaudus dar vieną sukurtą mygtuką, 
kvadratukas su tuo skaičium išnyksta */
const remByInput = ()=> {
    const action = {
        type: 'hide',
        payload: number
    };
    setNumber('')// istriname inputa po ivedimo
    dispachNumberList(action);
}
useEffect(()=> {
    if (!doRange.current) {
        return;
    };
    doRange.current = false;
    setTimeout(() => doRange.current = true, 20);

    const action = {
        type: 'range',
        payload: range.padStart(4, 0)
    };
   
    dispachNumberList(action);
},[range])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Class 021 Reducer uzdaviniu sprendimas</h1>
       <div className='kvc'>
           {
               numberList.map((o, i) => o.show ? <div key={i} className='kv' onClick={() => remove(o.number)} style={{backgroundColor: o.color}}>{o.number}</div> : null) 
           }
           
       </div>
       
       <input type='number' value={number} onChange={e => setNumber(e.target.value)} ></input>
       <button onClick={remByInput}>Hide Kv</button>
       <div className='kvc'>
           <p>{range.padStart(4, 0)}</p>
       <input type="range" value={range} min='o' max='9999' onChange={e => setRange(e.target.value)} />
       </div>
      
       <div className='kvc'>
       <button onClick={addList}>Push</button>
           <button onClick={group}>Numbers By order</button>
           <button onClick={defGroup}>Numbers By order by default</button>
           <button onClick={filt1}>5000+</button>
           <button onClick={filt2}>4000-</button>
           <button onClick={reset}>Reset</button>
           <button onClick={add}>Add</button>
       </div>
      </header>
    </div>
  );
}

export default App;



//paspaudus migtuka sugeneruoja lista is 10 skaiciu
//pdaryti migtuka kad isrusiuotu nuo didziausio iki maziausio
// kad kiekvienas naujas skaiciu butu objektas su 2 savybem number: kazkoks skaicius {number: '1234', color: '#1234'}
//show ir row metodas skirtas nedestrukciniai filtracijai