import { useState } from "react";
import rand from "../../Functions/rand";

function InputNumber() {
    const [number, setNumber] = useState('');
    const [kv, setKv] = useState(null);
    const inputNumber = e => {
        setNumber(e.target.value);
    }
    const giveNumber = num => {
        const nr = parseInt(num)
        console.log(nr);
        const array = [];
        for (let i = 0; i < nr; i++) {
            array.push(rand(100, 200));
        }
        console.log(array);
        setKv(kv => kv === null ? [...array] : [...kv, ...array]);
    }
    return (
        <>
        <div className="kvc">

            {
                kv === null ? null : kv.map((kv, i) => <div key={i} className='kv' style={{backgroundColor: 'red'}}>{kv}</div>)
            }

        </div>
        <input type="number" min={0} value={number} onChange={inputNumber} />
        <button onClick={() => giveNumber(number)}>Confirm Number</button>
        </>
    )
}

export default InputNumber;