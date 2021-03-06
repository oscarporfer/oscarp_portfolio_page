import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";
import About from "./About";
import Resume from "./Resume"
import ScrollButton from "./ScrollButton"
import Contact from "./Contact"


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
          <ScrollButton showBelow={1} />
        </Route>
        <Route exact path ="/projects">
          <Projects />
        </Route>
        <Route exact path ="/services">
          <Services />
        </Route>
        <Route exact path ="/about">
          <About />
        </Route>
        <Route exact path ="/resume">
          <Resume />
        </Route>
        <Route exact path ="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
