import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Register from "./pages/Register";
import RecoveryPassword from "./components/RecoveryPassword/Recoverypassword"
function App() {
  return (
    <> 
      <Router>
        <Switch>
          <Route  exact path = "/" component = {Login} />
          <Route  exact path = "/register" component = {Register} />
          <Route  exact path = "/dashboard" component = {Dashboard} />
          <Route exact path = "/recovery-password" component = {RecoveryPassword}/>
        </Switch>
      </Router>
    </>
  )
    
  
}

export default App;
