import React from 'react';
import './App.scss';

import InputSearch from "./components/InputSearch";
import CityCell from "./components/CityCell";

const mockCities = [
  { city: "Abbeville", state: "Louisiana" },
  { city: "Aberdeen", state: "Maryland" }
]

function App() {
  return (
    <div className="App">
      <InputSearch search={searchText => console.log(searchText)}/>
      {mockCities.map(city => <CityCell city={city} />)}
    </div>
  );
}

export default App;
