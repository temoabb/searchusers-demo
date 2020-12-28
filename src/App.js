import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import User from './userDetails/UserDetails'
import Views from './views/Views'
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/domain" exact component={Views} />
          <Route path="/domain/:user" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
