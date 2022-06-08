import { useReducer, useState } from "react";
import "./App.scss";
import colorReducer from "./Reducers/colorReducer";
import nrReducer from "./Reducers/nrReducer";
import rand from "./Functions/rand";
import kvReducer from "./Reducers/kvReducer";

//Reduceris labiau fancy budas keisti state'a
// reducer(state, action)
// turi butinai grazinti state 
// return state (state tiesiogiai modifikuoti negalime)
function App() {
    // const [color1, setColor1] = useState('crimson');
    const [color, dispachColor] = useReducer(colorReducer, 'violet');
    const [nr, dispachNr] = useReducer(nrReducer, '0000');
    const [colorInput, setColorInput] = useState('#fdb212');
    const [textInput, setTextInput] = useState('');
    const [h2, setH2] = useState('');
   
    const [kv, dispachKv] = useReducer(kvReducer, []);
    
//  const changeColor = () =>{
//         setColor('yellow');
//     };
    const changeColor = () =>{
        const action = {
            type: 'go_pink',
        };
        dispachColor(action);
    };
    const GoYellow = () =>{
        const action = {
            type: 'GoYellow',
        };
        dispachColor(action);
    };
    const chColor = () =>{
        const action = {
            type: 'chColor',
        };
        dispachColor(action);
    };
    const randNr = () => {
        const action = {
            type: 'goRand'
        };
        dispachNr(action)
    }
    const randNr2 = () => {
        const action = {
            type: 'goRand2',
            payload: rand(0, 100)
        };
        dispachNr(action)
    }
    // const stateColor = () => {
    //     const action = {
    //         type: 'color',
    //         payload: color1
    //     };
    //     dispachColor(action);
    // }
    const goChangeTo = () => {
        const action = {
            type: 'change_color_to',
            payload: colorInput
        };
        dispachColor(action)
    }
    const addText = () => {
        setH2(textInput);
        const action = {
            type: 'add_text',
            payload: textInput
        }
        dispachNr(action)
    }
    const addKv = () =>{
        const action = {
            type: 'add_kv'
        }
        dispachKv(action)
    }
  return (
    <div className="App">
      <header className="App-header">
          <h2>{h2}</h2>
        <h1 style={{backgroundColor: color}}>Class 020 Reducer
        <span> {nr} </span></h1>
        <div className="kvc">
        <button onClick={changeColor}>Change color to pink</button>
        <button onClick={GoYellow}>Change color to yellow</button>
        <button onClick={chColor}>Change color</button>
        <input type="color" value={colorInput} onChange={e => setColorInput(e.target.value)}/>
        <button onClick={goChangeTo}>Go and Change to this </button>
        <button onClick={randNr}>Random nr</button>
        <button onClick={randNr2}>Nr Random</button>
        
        </div>
        <div className="kvc">
        <input type="text" value={textInput} onChange={e => setTextInput(e.target.value)}/>
        <button onClick={addText}>Add text</button>
        </div>
        <div className="kvc">
        {
                    kv.map((_, i) => <div className="kv" key={i}></div>)
                }
            <button onClick={addKv}>Prideti kvadratuka</button>
        </div>
      </header>
    </div>
  );
}

export default App;
