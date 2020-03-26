import React from 'react';
import './App.scss';

import InputSearch from "./components/InputSearch";
import CityList from "./components/CityList";

const mockCities = [
  { city: "Abbeville", state: "Louisiana" },
  { city: "Aberdeen", state: "Maryland" }
]

function App() {
  return (
    <div className="App">
      <InputSearch />
      <CityList />
    </div>
  );
}

export default App;
