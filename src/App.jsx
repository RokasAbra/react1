import { useEffect, useState } from "react";
import "./App.scss";
import InputNumber from "./components/forms/FormsInput";
import rand from "./Functions/rand";
import Cats from "./components/forms/Cats";
import Nums from "./components/forms/Nums";
import Select from "./components/forms/Select";
/*Sukurti komponentą su mygtuku ir įvedimo laukeliu. Įvedus į laukelį skaičių ir paspaudus 
mygtuką, atsiranda laukelyje nurodytas raudonų kvadratėlių skaičius. Įvedus kitą skaičių ir 
paspaudus mygtuką, prie jau egzistuojančių kvadratėlių papildomai prisideda naujas laukelyje 
nurodytas kvadratėlių kiekis. Kiekvieno kvadratėlio viduryje turi būti pavaizduotas rand 
skaičius 100 - 200. */
function App() {
  const [kvadratukai, setKvadratukai] = useState(null);
  const [vnt, setVnt] = useState("");
  const inputNumber = (e) => {
    setVnt(e.target.value);
  };

  const add = (num) => {
    const nmr = parseInt(num);
    const kvadratukai = [];
    for (let i = 0; i < nmr; i++) {
      kvadratukai.push(rand(100, 200));
    }
    setKvadratukai((k) =>
      null === k ? [...kvadratukai] : [...k, ...kvadratukai]
    );
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Formos Uzdv.</h1>
        <fieldset>
          <fieldset>
            <legend>Kvadratai</legend>
            <div className="kvc">
              {kvadratukai
                ? kvadratukai.map((k, i) => (
                    <div key={i} className="kv">
                      {k}
                    </div>
                  ))
                : null}
              <input type="text" onChange={inputNumber} />
              <button onClick={() => add(vnt)}>Push</button>
            </div>
          </fieldset>
          <fieldset>
            <legend>Katinukai</legend>
            <div className="kvc">
              <input type="text" />
              <input type="text" />
              <button>Push</button>
            </div>
          </fieldset>
          <Cats></Cats>
          <Nums></Nums>
          <Select></Select>
        </fieldset>
      </header>
    </div>
  );
}

export default App;
