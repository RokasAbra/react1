import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import ld from './Reducers/ld';

const masyvas = [
    {id:3, name: 'Jhon', bid: 495.86, date: '2022-06-01T16:37'},
    {id:7, name: 'Peter', bid: 250.86, date: '2022-06-01T15:37'},
    {id:5, name: 'Parker', bid: 378.96, date: '2022-06-01T08:37'},
    {id:9, name: 'David', bid: 251.16, date: '2022-06-01T12:37'},
    {id:12, name: 'čęLucįy', bid: 800.86, date: '2022-06-01T10:07'}
];

function App() {

    const [list, dispachtList] = useReducer(ld, masyvas);
    const [select, setSelect] = useState("bid_desc");

    useEffect(() => {
        dispachtList({type: select});
    }, [select])

  return (
    <div className="App">
      <header className="App-header">
        <h2>025 Sort With Reducer</h2>
       <div>
           <div>
               <select value={select} onChange={(e) => setSelect(e.target.value)}>
                   <option value="date_asc">Date ASC</option>
                   <option value="date_desc">Date DESC</option>
                   <option value="bid_asc">Bid ASC</option>
                   <option value="bid_desc">Bid DESC</option>
                   <option value="name_asc">Name ASC</option>
                   <option value="name_desc">Name DESC</option>
                   <option value="name_loacaleCompare()">Name_loacaleCompare</option>
                   <option value="rand">Random</option>
               </select>
           </div>
           {
               list.map(b => (
               <div className='container' style={{height: '60px', padding: '15px'}}>
                   <span>ID: {b.id}</span><br />
                   <span>Name: {b.name}</span><br />
                   <span>Bid: {b.bid}</span><br />
                   <span>Date: {b.date}</span>
               </div>))
           }
       </div>
      </header>
    </div>
  );
}

export default App;