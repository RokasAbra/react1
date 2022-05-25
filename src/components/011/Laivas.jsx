import seaPlaners from "./SeaPla";

function Laivas() {
    return seaPlaners.map((a, i ) => a.type === 'car' ? <div className="crc" key={i} style={{color: 'red'}}>{a.name}: {a.type}</div> 
    : <div key={i}></div>);

}

export default Laivas;