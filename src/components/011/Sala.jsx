import seaPlaners from "./SeaPla";

function Sala() {
    return seaPlaners.map((x, i) => x.type === 'animal'&&
     <div key={i} className='crc'>{x.name} {x.type}</div>)
}
export default Sala