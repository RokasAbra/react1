import { useState } from "react";
import "./App.scss";
import rand from "./Functions/rand";

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
const ranNr = Math.random().toFixed(7) * 10000000
console.log(ranNr, 'asd');
function App() {
  const [karve, setKarve] = useState([]);
  const [avys, setAvys] = useState([]);
  const gyvunai = ["K000", "A0"];
  // const add = () => {
  //     setKarve(k => [...k, 'karve']);
  // }
  const per = () =>{
    setKarve(gyvunai[0])
  }
  const prideti = () => {
    const kiekis = rand(5, 20);
    for (let i = 0; i < kiekis; i++) {
      setKarve((k) => [...k, gyvunai[0] +rand(1000, 9999)]);
      setAvys((k) => [...k, gyvunai[1] +rand(100000, 999999)]);
    }
  
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>React useState</h1>
        <div className="kvc">
          <div className="container">
            Karves
            {karve.map((a, i) => (
              <div   className="kvv" key={i}>
                {a}
              </div >
            ))}
          </div>
          <div className="container">
            Avys
            {avys.map((a, i) => (
              <button className="crcc"  key={i}>
                {a}
              </button>
            ))}
          </div>
        </div>
        <button onClick={prideti}>I ganykla</button>
      </header>
    </div>
  );
}

export default App;
