import { useRef, useState } from 'react';
import './App.scss';
import rand from './Functions/rand';

// Sukurti aplikaciją su mygtuku “Pridėti”, kurį paspaudus atsiranda rand 5-10 kvadratukai.
// Paspaudus dar kartą dar prisideda rand kvadratukų skaičius. Puslapį perkrovus kvadratukų
// skaičius pasilieka nepakitęs. Padaryti mygtuką “Išvalyti”, kurį paspaudus visi kvadratukai
// dingsta. Padaryti mygtuką “Atgal”, kurį paspaudus kvadratukų skaičius pasidaro lygus 
// skaičiui, buvusiam prieš paspaudus mygtuką “Pridėti”, o paspaudus dar kartą grįžtama
// dar vienu žingsniu atgal (t.y. reikia sukurti “undo” funkcionalumą). Puslapiui 
// persikrovus istorija yra užmirštama. Saugoma tik istorija iki puslapiui persikraunant. 
// Į istoriją turi būti pridedami veiksmai tiek iš “Pridėti” tiek iš “Išvalyti” mygtukų 
// paspaudimo.



function App() {
    const [kv, setKv] = useState([]);
    const prideti = () => {
        const kiekis = rand(5, 10);
        const kvadratukai = [];
        for (let i = 0; i < kiekis; i++) {
            kvadratukai.push('--^.^--');
        }
        setKv(k => [...k, ...kvadratukai]);
    }
    
  return (
    <div className="App">
      <header className="App-header">
          <h1>Uzdaviniu sprendimas</h1>
          <div className='kvc'>
              {
                  kv.map((k, i) => <div className='kv' key={i}>{k}</div> )
              }
          </div>
          <button onClick={prideti}>Prideti</button>
      </header>
    </div>
  );
}

export default App;