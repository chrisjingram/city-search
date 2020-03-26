import React from 'react';
import './App.scss';

import InputSearch from "./components/InputSearch";

function App() {
  return (
    <div className="App">
      <InputSearch searchClicked={searchText => console.log(searchText)}/>
    </div>
  );
}

export default App;
