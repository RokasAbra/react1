import seaPlaners from "./SeaPla";
function Bala() {
   return seaPlaners.map((a, i) => <div key={i} style={{color: 'blue'}}>{a.name}</div>)
};

export default Bala;