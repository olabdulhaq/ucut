import React  from 'react'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/layout/Navbar'


import './App.css'
import BarberList from './components/landing/BarberList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <BarberList />
      </div>
    </BrowserRouter>
  );
}

export default App;
