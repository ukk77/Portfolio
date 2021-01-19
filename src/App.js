import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import './App.css';
import Nav from'./Components/Nav'
import Projects from './Components/Projects'
import Contact from "./Components/Contact";
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Resume" exact component={Home}/>
          <Route path="/Projects" exact component={Projects}/>
          <Route path="/Contact" exact component={Contact}/>
        </Switch>

        </Router>
    </div>
  );
}

export default App;
