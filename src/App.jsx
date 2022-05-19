
import './App.css';
import Labas from "./components/009/Labas";
import Sveiki from "./components/009/Sveiki";
import Props from "./components/009/Props";
import Trys from "./components/009/Trys";
import rand from "./Functions/rand";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Labas  tekstas="Siandien yra treciadienis!"/>
        <Sveiki a= {rand(1,2)} /> 
        <Props a='tekstas' b='kazkoks tekstas'/>
        <Trys a='belekas' b='kazkas' c='grey'/>
      </header>
    </div>
  );
}

export default App;
