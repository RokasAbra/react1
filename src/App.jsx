import { useState } from 'react';
import './App.css';

//1. Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.

//2. Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys 
//turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo.

//3. Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius apskritime.

//4. Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti).

//5. Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. Skaičius, 
//didesnius nei 6 atvaizduoti žaliai, kitus raudonai.


function App() {
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
    const [dog, setDog] = useState([]);
    dogs.sort((a, b) => a.length - b.length);
    let lyg = 0;
    let neLyg = 0;
    // const vienasDog = () =>
    // { for (let i = 0; i < dogs.length; i++) {
    //   if (dogs % 2 == 0) {
    //     dogs[i] = lyg
    //     return lyg
    //   }if (dogs % 2 !== 0) {
    //     neLyg = i;
    //   }return neLyg;
       
      
    // }
{
    } 
    console.log(lyg, neLyg);
    console.log(dogs);
  return (
    <div className="App">
      <header className="App-header">
        <div className='kvc'>
        {
              dogs.map( (c, i) => <div className='kv' key={i}>{dogs[i]}</div>)
            }

            {
              dogs.map((c, i ) => <div className='crc' key={c}>{dogs[i]} {i + 1}</div> )
            }
            
            {/* <div className='kv'></div>
            <div className='kv'></div>
            <div className='kv'></div>
            <div className='kv'></div>
            <div className='kv'></div> */}
        </div>
      </header>
    </div>
  );
}

export default App;