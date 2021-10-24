import React, { Component } from 'react';
import './App.css';
import { useState } from "react";
import NavBar from './components/Sidebar';
import Home from './components/Home';
import Hobbies from './components/Hobbies';
import Contactme from './components/Contactme';
import { Sidebardata } from './components/Sidebardata';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';



function App (){

    return (
      <div className = "App">

        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <Redirect to="/Home"/>
            </Route>
            <Route path='/Home' component={Home} />
            <Route path='/Hobbies' component={Hobbies} />
            <Route path='/Contactme' component={Contactme} />
          </Switch>
        </Router>

        
        {/* <div className = "Sidebarproportion">
            <Sidebar/>
        </div>
        <div className = "pages">
          <Sidebardata/>
        </div> */}
    </div>
    ) 
}
  export default App;