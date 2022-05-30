
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import rand from './Functions/rand';


/*Sukurti aplikaciją su mygtuku “Pridėti”, kurį paspaudus atsiranda rand 5-10 kvadratukai.
Paspaudus dar kartą dar prisideda rand kvadratukų skaičius. Puslapį perkrovus kvadratukų 
skaičius pasilieka nepakitęs. Padaryti mygtuką “Išvalyti”, kurį paspaudus visi kvadratukai 
dingsta. Padaryti mygtuką “Atgal”, kurį paspaudus kvadratukų skaičius pasidaro lygus 
skaičiui, buvusiam prieš paspaudus mygtuką “Pridėti”, o paspaudus dar kartą grįžtama dar 
vienu žingsniu atgal (t.y. reikia sukurti “undo” funkcionalumą). Puslapiui persikrovus 
istorija yra užmirštama. Saugoma tik istorija iki puslapiui persikraunant. Į istoriją turi 
būti pridedami veiksmai tiek iš “Pridėti” tiek iš “Išvalyti” mygtukų paspaudimo.
 */


function App() {
    const [kv, setKv] = useState(null);
    const istorija = useRef([]);

    const add = () => {
        const kiekis = rand(5, 10);
        const kv = [];
        for (let i = 0; i < kiekis; i++) {
          kv.push("^o^");
        }
        setKv((k) => (null === k ? [...kv] : [...k, ...kv]));
      };

      const back = () => {
        let senas = istorija.current.shift();
        if (!senas) {
          setKv([]);
        } else if (senas.length === kv.length) {
          senas = istorija.current.shift();
          if (!senas) {
            setKv([]);
          } else {
            setKv(senas);
          }
        } else {
          setKv(senas);
        }
      }; 
    const rem = () => {
        setKv([])
    }
      useEffect(() => {
        setKv(JSON.parse(localStorage.getItem("kv"))); // Gali buti null arba kazkoks masyvas
      }, []);
      useEffect(() => {
        if (null == kv) {
          return;
        }
        localStorage.setItem("kv", JSON.stringify(kv));
        istorija.current.unshift(kv);
        // console.log('save', istorija.current);
      }, [kv]);
  return (
    <div className="App">
      <header className="App-header">
        <h1> useRef tasks</h1>
        <div className='kvc'>
            {
              kv ? kv.map((k, i) => <div key={i} className='kv'>{k}</div> ): null
            }
        <button onClick={add}>Prideti</button>
        <button onClick={back}>Atgal</button>
        <button onClick={rem}>Isvalyti</button>
        </div>
        
      </header>
    </div>
  );
}

export default App;