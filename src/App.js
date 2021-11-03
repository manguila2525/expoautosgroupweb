import { Fragment } from "react";
import React from 'react';
import Navbar from './components/WebSite/Navbar';
import Footer from './components/WebSite/Footer';

// SYSTEM EXPOAUTOSGROUP
import Login from './components/System/Login';
import SystemExpoAutosGroup from './components/System/SystemExpoAutosGroup'

import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {


  return (
    <Fragment>
      <Router>
        <Route path="/" exact>
          <Navbar />
          <Footer />
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/dashboard">
          <SystemExpoAutosGroup></SystemExpoAutosGroup>
        </Route>
      </Router>
    </Fragment>
  );
}

export default App;

