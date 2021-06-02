import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Login from './pages/Login';
import Register from  './pages/Register'


function App() {
  return (
    <> 
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route  exact path = "/Servicios" component = {Servicios} />
          <Route  exact path = "/Login" component = {Login} />
          <Route exact path = "/Register" component = {Register} />
        </Switch>
        <Footer/>
      </Router>
    </>
  )
    
  
}

export default App;
