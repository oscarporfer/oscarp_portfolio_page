import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path ="/projects">
          <Projects />
        </Route>
        <Route exact path ="/services">
          <Services />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
