import { useEffect, useState } from "react";
import "./bootstrap.css";
import "./crud.scss";
import Create from "./components/crud/Create";
// import "./App.scss";
import getId from "./Functions/getId";
import { create, edit, remove } from "./Functions/localStorage";
import rand from "./Functions/rand";
import List from "./components/crud/List";
import { read } from "./Functions/localStorage";
import Edit from "./components/crud/Edit";

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null); // Create
  const [exes, setExes] = useState(null); // Read
  const [deleteData, setDeleteData] = useState(null); //Delete
  const [editData, setEditData] = useState(null); //Edit

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
    setExes(read());
  }, [lastUpdate]);

  //Delete
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    remove(deleteData);
    setLastUpdate(Date.now());
    // to localStorage
  }, [deleteData]);
  //Edit
  useEffect(() => {
    if (null === editData) {
      return;
    }
    edit(editData);
    setLastUpdate(Date.now());
    // to localStorage
  }, [editData]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create setCreateData={setCreateData}></Create>
          </div>
          <div className="col-8">
            <List
              exes={exes}
              setDeleteData={setDeleteData}
              setModalData={setModalData}
            ></List>
          </div>
        </div>
      </div>
      <Edit modalData={modalData} setModalData={setModalData} setEditData={setEditData}></Edit>
    </>
  );
}

export default App;
