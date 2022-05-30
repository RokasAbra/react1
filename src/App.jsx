import { useEffect, useState } from "react";
import "./bootstrap.css";
import Create from "./components/crud/Create";
// import "./App.scss";
import getId from "./Functions/getId";
import rand from "./Functions/rand";

function App() {
    const [createData, setCreateData] = useState(null);

    //1. Create
    useEffect(() => {
        if (null === createData) {
            return;
        }
        // to localStorage

    }, [createData])

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-4">
                <Create></Create>
            </div>
            <div className="col-8">
                One of three columns
            </div>
        </div>
    </div>
</>
);
}

export default App;
