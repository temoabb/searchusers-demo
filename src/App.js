import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import UserInDetails from './singleUserDetails/UserInDetails'
import Showroom from './exhibitionUsers/Showroom'
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/domain" exact component={Showroom} />
          <Route path="/domain/:user" component={UserInDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
