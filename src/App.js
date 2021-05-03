import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/projects">
          <Header />
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
