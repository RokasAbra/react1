import { useState } from "react";
import "./App.scss";
import rand from "./Functions/rand";
import { v4 as uuidv4 } from 'uuid';
import randColor from "./Functions/randColor";


/*Sukurti tuščią “Ganyklą”. Ją padalinti į dvi dalis su užrašais- Avys ir Karvės. 
Sukurti mygtuką “į ganyklą”, kurį paspaudus dešinė pusė būtų apgyvendinta avimis, 
kurias vaizduoja apskritimai, o kairė pusė karvėmis, kurias vaizduoja keturkampiai. 
Avių ir karvių skaičius rand 5 - 20. Kiekvieno gyvulio viduje yra random identifikacinis
numeris: pvz avim A0254787, karvėm K0007898, kur skaičius yra septynženklis rand 
skaičius. Perkrovus puslapį avių ir karvių skaičius ir jų identifikaciniai numeriai 
turi nekisti (tik patį pirmą kartą “Ganykla” turi būti tuščia). Paspaudus ant avies 
arba karvės ji turi perbėgti į priešingą ganyklos pusę (antrą kartą paspaudus grįžti 
atgal). Perkrovus puslapį perbėgimai turi išlikti nepakitę. Pakartotinai paspaudus 
“į ganyklą”, turi atsirasti nauji gyvuliai, kaip ir pirmą kartą.
Pastaba: karvė avių ganyklos pusėje lieka karve, o avis- avimi. Nemutuojam! Perbėgusios avys ir karvės yra dedamos į bandos galą.
 */



function App() {
  const [karve, setKarve] = useState([]);
  const [avys, setAvys] = useState([]);
  const kiekis = rand(5, 20);
  const newA = () => {
    for (let l = 0; l < kiekis; l++) {
      const avis = {
        id: 'A'.padEnd(2, '0') + rand(10000, 99999),
        color: randColor,
        where: "Aviu",
      };
      const karves = {
        id: 'K'.padEnd(4, '0') + rand(10000, 99999),
        color: randColor,
        where: 'Karviu'
      }
      setKarve((a) => [...a, karves]);
      setAvys((k) => [...k, avis]);
    }
  
  };
  const goBack = id => {
    setAvys(a => a.map(avis => avis.id === id ? {...avis, where: 'aviu'} : avis))
}

  const go = id => {
    setAvys(a => {
      const avis = a.filter(av => av.id === id);
      avis.where = 'Karviu'
      const kitos = a.filter( av => av.id !== id);
      return [...kitos, avis];
    });
    setKarve(s =>{
    const karves = s.filter(av => av.id === id);
    karves.where = 'Aviu'
    const kitos = s.filter( av => av.id !== id);
    return [...kitos, karves];
  });

 
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React useState</h1>
        <div className="kvc">
          <div className="kvc">Karves
          {karve.filter(a => a.where === 'Karviu').map((a) => (
            <div onClick={() => go(a.id)}
              key={a.id}
              className="kv"
              style={{ background: a.color }}
            >{a.id}</div>
          ))}
          </div>
          <div className="kvc">Avys
          {avys.filter(a => a.where === 'Aviu').map((a) => (
            <div onClick={() => goBack(a.id)}
              key={a.id}
              className="crc"
              style={{ background: a.color }}
            >{a.id}</div>
          ))}
          </div>
        </div>
        <button onClick={newA}>I ganykla</button>
      </header>
    </div>
  );
}

export default App;
