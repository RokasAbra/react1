import { useState } from "react";
import "./App.scss";

function App() {
  const [text, setText] = useState("");
  const [select, setSelect] = useState("three");
  const [cb, setCb] = useState({a: false, b: false, c: true, d: true})
  const [radio, setRadio] = useState('c');
  const [color, setColor] = useState('')
  const cbClick = (c) => {
    setCb(checkBox => ({...checkBox, [c] : !checkBox[c]}))
  }
  const inputText = (e) => {
    setText(e.target.value);
  };
  const changeColor = e => {
      setColor(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header" style={{background: color}}>
        <h1>Formos</h1>
        <fieldset >
          <fieldset>
            <legend>TEXT</legend>
          
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          {/* <input type="text" onChange={inputText} value={text} /> */}
          <fieldset>
              <legend>Select</legend>
          <select value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value="one">Vienas</option>
            <option value="two">Du</option>
            <option value="three">Trys</option>
            <option value="four">Keturi</option>
          </select>
          </fieldset>
          </fieldset>
        <fieldset>
          <legend>CHECKBOX</legend>
          A<input type="checkbox" onChange={() => cbClick('a')} checked={cb.a}></input>
          B<input type="checkbox" onChange={() => cbClick('b')} checked={cb.b}></input>
          C<input type="checkbox" onChange={() => cbClick('c')} checked={cb.c}></input>
          D<input type="checkbox" onChange={() => cbClick('d')} checked={cb.d}></input>
        </fieldset>
        <fieldset>
          <legend>RadioButtons</legend>
          A<input type="radio" name="r" value='a' checked={radio === 'a'} onChange={e => setRadio(e.target.value)}></input>
          B<input type="radio" name="r" value='b' checked={radio === 'b'} onChange={e => setRadio(e.target.value)}></input>
          C<input type="radio" name="r" value='c' checked={radio === 'c'} onChange={e => setRadio(e.target.value)}></input>
          D<input type="radio" name="r" value='d' checked={radio === 'd'} onChange={e => setRadio(e.target.value)}></input>
        </fieldset>
        
        <fieldset>
            <legend>Color</legend>
          
          <input
            type="color"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <input type="color" onChange={changeColor} value={text} />
          </fieldset>
          </fieldset>
      </header>
    </div>
  );
}

export default App;
