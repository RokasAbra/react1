import { useState } from "react";
import "./App.scss";
import Sunys from "./components/uzdv/Rbl";

//1. Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.

//2. Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys
//turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo.

//3. Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius apskritime.

//4. Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti).

//5. Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. Skaičius,
//didesnius nei 6 atvaizduoti žaliai, kitus raudonai.

function App() {
  const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];
  const [dog, setDog] = useState([]);
  dogs.sort((a, b) => a.length - b.length);

  console.log(dogs);
  return (
    <div className="App">
      <header className="App-header">
        <div className="kvc">
          {dogs.map(
            (dog, i) => i % 2 === 0 && <div className={"kv"} key={i}> {dog}</div>
          )}
          {dogs.map(
            (dog, i) => i % 2 !== 0 && <div className={"crc"} key={i}> {dog}</div>
          )}
          {
            dogs.map(
              (dog,i) => dog[0] !== dog[0].toUpperCase() && <div className={"crc"} style={{color: 'black'}} key={i} >{dog}</div>
            )
          }
          {
            dogs.map(
              (dog,i) => dog.length < 6 ? <div className="kv" style={{backgroundColor: "white", color: 'red'}} key={i}>{dog.length} {dog}</div> : <div className="kv" style={{backgroundColor: "green"}} key={i}>{dog.length} {dog}</div> )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
