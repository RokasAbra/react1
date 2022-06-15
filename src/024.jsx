import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';


function App() {

    const [trees, setTrees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/medziai')
        .then(res => {
            setTrees(res.data);
        });
    },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Database with react</h1>
        {
            trees.map(t => <div className='kvc' key={t.id}>{t.title}</div>)
        }
      </header>
    </div>
  );
}

export default App;