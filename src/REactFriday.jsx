import { useState } from 'react';
import './App.scss';
import Animals from './components/Animals/Animals';


function App() {
    

  return (
    <div className="App">
        <header className="App-header">
      <div><Animals></Animals></div>
      </header>
    </div>
    
  );
}

export default App;