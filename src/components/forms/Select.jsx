import { useState } from "react";

function Select() {
  const [color, setColor] = useState("");
  const [font, setFont] = useState("15");
  const [family, setFamily] = useState("");
  const [text, setText] = useState("");
  const inputText = (e) => {
    setText(e.target.value);
  };
//Spalvoti kvad
  const [kv, setKv] = useState([]);
  const [color1, setColor1] = useState('black');
  const [width, setWidth] = useState('100');
  const [height, setHeight] = useState('100');
  const [ir, setIr] = useState([]);
  const addKv = () =>{
      setKv((k) => [...k, kv]);
  };
  const addIr = () =>{
    setIr([...kv]);
};
  return (
    <>
      <legend>Selects</legend>
      <fieldset>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value={color}>Color</option>
          <option value="red">Red</option>
          <option value="pink">Pink</option>
          <option value="blue">Blue</option>
          <option value="orangered">Orangered</option>
          <option value="grey">Grey</option>
        </select>
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="35">35</option>
          <option value="45">45</option>
        </select>
        <select value={family} onChange={(e) => setFamily(e.target.value)}>
          <option value="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
            Franklin
          </option>
          <option value="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">
            Gill
          </option>
          <option value="Lato">Lato</option>
        </select>
        <input type="text" onChange={inputText} value={text} />
        <div
        //   className="crc"
          style={{
            color: color,
            fontSize: Number(font),
            fontFamily: family,
          }}
        >
          {text}
        </div>
        <p>Spalvoti Kvadratai</p>
          <button onClick={addKv}>Prideti</button>
          <button onClick={addIr}>Issaugoti</button>
          <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)}/>
          <input type="range" min='10' max='250' value={width} onChange={(e) => setWidth(e.target.value)}/>
          <input type="range" min='10' max='250' value={height} onChange={(e) => setHeight(e.target.value)}/>
        

        <div>
            {
                kv.map((k, i) => (
                    <div className="kv" style={{backgroundColor: color1,
                        width: Number(width),
                        height: Number(height),}} key={i}>{k}</div>
                ))
            }
             {ir.map((k, i) => (
              <div
                className="kv"
                style={{
                  backgroundColor: k.background,
                  width: k.width,
                  height: k.height,
                }}
                key={i}
              >
                {i}
              </div>
            ))}
        </div>
      </fieldset>
    </>
  );
}
export default Select;
