import { useState } from "react";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import rand from "./Functions/rand";
import randColor from "./Functions/randColor";

function App() {
  const [avys, setAvys] = useState([]);

  const newA = () => {
    const avis = {
      id: uuidv4(),
      color: randColor(),
      where: "ganykla",
    };
    setAvys((a) => [...a, avis]);
  };
  const go = id => {
    setAvys(a => {
        const avis = a.filter(av => av.id === id)[0];
        avis.where = 'kirpykla'
        const kitos  = a.filter(av => av.id !== id);
        return [...kitos, avis];
    });
    //   setAvys(a => a.map(avis => avis.id === id ? {...avis, where: 'kirpykla'} : avis))
  }
  const goBack = id => {
    setAvys(a => a.map(avis => avis.id === id ? {...avis, where: 'ganykla'} : avis))
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>AVYS</h1>
        <div className="kvc">
          {avys.filter(a => a.where === 'kirpykla').map((a) => (
            <div onClick={() => goBack(a.id)}
              key={a.id}
              className="kv"
              style={{ background: a.color }}
            ></div>
          ))}
        </div>
        
        <div className="kvc">
          {avys.filter(a => a.where === 'ganykla').map((a) => (
            <div onClick={() => go(a.id)}
              key={a.id}
              className="kv"
              style={{ background: a.color }}
            ></div>
          ))}
        </div>
        <button onClick={newA}>Naujas Avinas</button>
      </header>
    </div>
  );
}

export default App;
