import React, { useState } from 'react' ;
import './App.css';
import { Multiselect } from 'multiselect-react-dropdown'

function App() {
  const item=[
      {colors: 'Red', id: 1},
      {colors: 'Green', id: 2},
      {colors: 'Blue', id: 3},
      {colors: 'Yellow', id: 4},
      {colors: 'Orange', id: 5},
      {colors: 'Purple', id: 6},
  ]
  const [data] = useState(item);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Navneet's assignment</h1>

        <Multiselect
          options = {data}
          displayValue = 'colors'
          className = "multi"
          
        />
      </header>
    </div>
  );
}

export default App;
