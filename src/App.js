import React  from 'react'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/layout/Navbar'


import './App.css'
import BarberList from './components/landing/BarberList';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <BarberList />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
