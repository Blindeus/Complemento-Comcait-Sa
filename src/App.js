import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
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
        <Routes>
          <Route path = "/" element = {<Login/>} />
          <Route   path = "/register" element = {<Register/>} />
          <Route   path = "/dashboard" element = {<Dashboard/>} />
          <Route  path = "/recovery-password" element = {<RecoveryPassword/>}/>
        </Routes>
      </Router>
    </>
  )
    
  
}

export default App;
