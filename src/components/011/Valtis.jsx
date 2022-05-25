import seaPlaners from "./SeaPla";

function Valtis() {
    return seaPlaners.map((a, i) => a.type === 'man'&&
     <div className="crc" key={i}>{a.name}: {a.type}</div>) 
}

export default Valtis;