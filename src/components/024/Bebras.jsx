import { useContext } from "react";
import Duomenys from "../../Contexts/Duomenys";
import randColor from "../../Functions/randColor";

function Bebras() {

    const {counter1, counter2} = useContext(Duomenys);
    return (
        <><div className="kvc" style={{backgroundColor: randColor()}}>
            <h1 className="crc" style={{backgroundColor: randColor()}}>{counter1}</h1>
            <h2 className="crc" style={{backgroundColor: randColor()}}>{counter2}</h2>
            {/* <Duomenys.Consumer>
             
                    {
                        data => <h1>{data.counter1}</h1>
                    }
                    
               
            </Duomenys.Consumer> */}
        </div></>
    )
}
export default Bebras;