import Laivas from "./Laivas";
import Sala from "./Sala";
import seaPlaners from "./SeaPla";
import Valtis from "./Valtis";

function Jura() {
  return seaPlaners.map(
    (a, i) =>
      a.type === "fish" && <div  key={i} className='container'>
       <span className="kv">Jura:{a.name} {a.type}</span>   
        <Laivas></Laivas>
        <Valtis></Valtis>
        <Sala></Sala>    
      </div>)
    
}

export default Jura;
