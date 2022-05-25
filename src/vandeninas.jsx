import "./App.scss";
import Bala from "./components/011/Bala";
import Jura from "./components/011/Jura";
import Sala from "./components/011/Sala";
import Type from "./components/011/Tipas";
import Tvenkinys from "./components/011/tvenkinys";
import Vandenynas from "./components/011/Vandenynas";
import rand from "./Functions/rand";
const seaPlaners = [
  { id: 1, type: "man", name: "Lina", color: "blue" },
  { id: 2, type: "car", name: "Opel", color: "red" },
  { id: 3, type: "animal", name: "Vilkas", color: "green" },
  { id: 4, type: "fish", name: "Ungurys", color: "yellow" },
  { id: 5, type: "man", name: "Tomas", color: "green" },
  { id: 6, type: "animal", name: "Bebras", color: "red" },
  { id: 7, type: "animal", name: "Barsukas", color: "green" },
  { id: 8, type: "car", name: "MB", color: "blue" },
  { id: 9, type: "car", name: "ZIL", color: "red" },
  { id: 10, type: "man", name: "Teta Toma", color: "yellow" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span style={{backgroundColor: 'yellow'}}>
          <Bala></Bala>
        </span>
        <Tvenkinys seaPlaners={seaPlaners}></Tvenkinys>
        <Jura>
        </Jura>
        <Vandenynas></Vandenynas>
      </header>
    </div>
  );
}

export default App;
