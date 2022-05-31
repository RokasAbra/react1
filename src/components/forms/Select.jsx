import { useState } from "react"

function Select() {
    
    const [color, setColor] = useState('');
    const [font, setFont] = useState('20');
    const [family, setFamily] = useState('');
    const [text, setText] = useState('');
    const inputText = (e) => {
        setText(e.target.value);
      };
    
    return (
        <>
        <legend>Selects</legend>
        <fieldset>
            <select value={color} onChange={(e) => setColor(e.target.value)}>
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
            <select value={family}></select>
            <option value="Gill Sans">Gill</option>
            <option value="Open Sans">Open</option>
            <option value="Lato">Lato</option>
        </fieldset>
        
        </>
    )
}
export default Select;