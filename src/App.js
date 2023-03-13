import React from 'react';
import './App.css';
import {MyTooltip} from './components/MyTooltip';

function App() {
  return (
    <div className="App">
      <button>Alert</button> 
      <MyTooltip text={"Click this button if you notice any error by the Front-end Developer."}>
           <span class="material-symbols-outlined">info</span>
      </MyTooltip>
      
    </div>
  );
}

export default App;
