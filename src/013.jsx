import { useEffect, useRef, useState } from "react";
import "./App.scss";
import rand from "./Functions/rand";

// Sukurti aplikaciją su mygtuku “Pridėti”, kurį paspaudus atsiranda rand 5-10 kvadratukai.
// Paspaudus dar kartą dar prisideda rand kvadratukų skaičius. Puslapį perkrovus kvadratukų
// skaičius pasilieka nepakitęs. Padaryti mygtuką “Išvalyti”, kurį paspaudus visi kvadratukai
// dingsta. Padaryti mygtuką “Atgal”, kurį paspaudus kvadratukų skaičius pasidaro lygus
// skaičiui, buvusiam prieš paspaudus mygtuką “Pridėti”, o paspaudus dar kartą grįžtama
// dar vienu žingsniu atgal (t.y. reikia sukurti “undo” funkcionalumą). Puslapiui
// persikrovus istorija yra užmirštama. Saugoma tik istorija iki puslapiui persikraunant.
// Į istoriją turi būti pridedami veiksmai tiek iš “Pridėti” tiek iš “Išvalyti” mygtukų
// paspaudimo.
const cats = [
    "Mulkis", 
    "Kakius", 
    "Pilkius", 
    "Balčius"];
    const dog = [

        'Sniego',
    
        'Dingo',
    
        'Atsirado',
    
        'Pifas',
    
        'Bobikas'
    
    ];
function App() {

    const [cat, setCat]= useState([]);
    const addCats = () => {
        setCat(k => [...k, ...cats]);
    };
    const addDogs = () => {
        setCat(dog)
    }

const del = () => {
    setCat([]);
}


  const [kv, setKv] = useState(null);
  const istorija = useRef([]);

  //pirmas uzkrovimas
  useEffect(() => {
    setKv(JSON.parse(localStorage.getItem("kv"))); // Gali buti null arba kazkoks masyvas
  }, []);
  // irasines, issaugos pokycius:
  useEffect(() => {
    if (null == kv) {
      return;
    }
    localStorage.setItem("kv", JSON.stringify(kv));
    istorija.current.unshift(kv);
    // console.log('save', istorija.current);
  }, [kv]);

  const prideti = () => {
    const kiekis = rand(5, 10);
    const kvadratukai = [];
    for (let i = 0; i < kiekis; i++) {
      kvadratukai.push("^o^");
    }
    setKv((k) => (null === k ? [...kvadratukai] : [...k, ...kvadratukai]));
  };

  const isvalyti = () => {
    setKv([]);
  };

  const atgal = () => {
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Uzdaviniu sprendimas</h1>
        <div className="kvc">
          {kv
            ? kv.map((k, i) => (
                <div className="kv" key={i}>
                  {k}
                </div>
              ))
            : null}
        </div>
        <button onClick={prideti}>Prideti</button>
        <button onClick={isvalyti}>Isvalyti</button>
        <button onClick={atgal}>Atgal</button>
        <div className="container">
            <div className="container">
            {
                cat.map((k, i ) => <div key={i}>{k}</div>)
            }
            </div>
            
        <button onClick={addCats}>Cats</button>
        <button onClick={addDogs}>Dog</button>
        <button onClick={del}>Delete</button>
        </div>
        
      </header>
    </div>
  );
}

export default App;
