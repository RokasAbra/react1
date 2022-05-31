import { useState } from "react"

function Nums() {
    
const [nr1, setNr1] = useState(50);
const [nr2, setNr2] = useState(100);

const inputNr1 = (e) => {
    setNr1(e.target.value);
    setNr2(e.target.value * 2);
};
const inputNr2 = (e) => {
    setNr2(e.target.value);
    setNr1(e.target.value * 2);
};

return (
    <>
    <fieldset>
        <legend>Numbers * 2 </legend>
        <input type="number" onChange={inputNr1} value={nr1} />
        <input type="number" onChange={inputNr2} value={nr2} />
    </fieldset>
    
    
    
    
    </>
)

}

export default Nums;