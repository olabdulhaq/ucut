import React  from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar'


import './App.css'
import BarberList from './components/landing/BarberList';
import Login from './components/registration/Login';
import Signup from './components/registration/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" component={BarberList} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
