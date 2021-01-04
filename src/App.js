import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home/Home.jsx'
import SingleUserDetails from './singleUserDetails/SingleUserDetails.jsx'
import Showroom from './exhibitionUsers/showRoom/Showroom.jsx'

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/domain" exact component={Showroom} />
          <Route path="/domain/:user" component={SingleUserDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
