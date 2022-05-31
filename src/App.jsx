import { useEffect, useState } from "react";
import "./bootstrap.css";
import Create from "./components/crud/Create";
// import "./App.scss";
import getId from "./Functions/getId";
import { create } from "./Functions/localStorage";
import rand from "./Functions/rand";
import List from "./components/crud/List";
import { read } from "./Functions/localStorage";

function App() {
    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [createData, setCreateData] = useState(null); // Create
    const [exes, setExes] = useState(null); // Read
    


    //1. Create
    useEffect(() => {
        if (null === createData) {
            return;
        }
        create(createData);
        setLastUpdate(Date.now());
        // to localStorage

    }, [createData]);

    //2. Read
    useEffect(() => {
        setExes(read())
    }, [lastUpdate])
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-4">
                <Create setCreateData={setCreateData}></Create>
            </div>
            <div className="col-8">
               <List exes={exes}></List>
            </div>
        </div>
    </div>
</>
);
}

export default App;
