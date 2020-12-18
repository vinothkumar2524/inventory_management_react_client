import React, {useState} from 'react';
import Device from './components/device'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SideBar from './components/sidebar';
import Employee from './components/employee';


function App() {

  const [name, setName] = useState("poli");
  const changeName = () => {
    setName("vinoth");
    console.log("++");
  }
  return (
    <div>
      <Router>
        <div className="flex h-full bg-blue-400">
          <SideBar/>
          <Switch>
          <Route exact path='/' component={Device}></Route>
          <Route path='/employee' component={Employee}></Route>
          </Switch>
        </div>
      </Router>
    
    </div>
  );
}

export default App;
