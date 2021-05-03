import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home"


function App() {
  return (
    <Router>
      <Route path="/">
        <Header/>
        <Home/>
      </Route>
    </Router>
  );
}

export default App;
