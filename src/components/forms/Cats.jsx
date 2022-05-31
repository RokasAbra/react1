//// Cats

import { useEffect, useState } from "react";

/*Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui ir svoriui įvesti. Rodyti visų įvestų 
katinukų sąrašą. Puslapiui persikrovus, katinukų sąrašas turi išlikti nepakitęs. Katinukus sąraše rūšiuoti 
nuo storiausio iki ploniausio. Skaičiuoti ir atvaizduoti bendrą katinukų svorį. */
function Cats(){
const [list, setList] = useState([]);
const [name, setName] = useState([]);
const [weigth, setWeigth] = useState([]);

const inputName = (e) => {
    setName(e.target.value);
};
const inputWeigth = (e) => {
    setWeigth(e.target.value);
};

const addCat = () => {
    setList((k) => [...k, [name, weigth]]);
};
list.sort((a, b) => a[1] - b[1]);
let totalWeigth = 0;
for (let i = 0; i < list.length; i++) {
    totalWeigth = totalWeigth + Number(list[i][1]);
    
};
useEffect(() => {
    setList(JSON.parse(localStorage.getItem('list') ?? '[]'));
}, []);
useEffect(() => {
    if (null === list) {
        return;
    }
    localStorage.setItem('list', JSON.stringify(list));
});
const remCats = () => {
    setList([]);
}
return (

    <>
    <fieldset>
    <div className="kvc">
        <legend>Cats</legend>
        <input type="text" placeholder="cats name" 
        onChange={inputName} value={name}/>
        <input type="number" placeholder="cats weigth" onChange={inputWeigth} value={weigth} />
        <button onClick={addCat}>Add new cat</button>
        <ul className="cats list">
            {
                list ? list.map((c, i) => <li className="cat" key={i}>{c[0]} weigth: {c[1]} kg</li>) : null
            }
        </ul>
        <span>Total weigth: {totalWeigth}kg. </span>
        <button onClick={remCats}>Reset</button>
    </div>
    </fieldset>
    </>
)
} 
                
export default Cats;