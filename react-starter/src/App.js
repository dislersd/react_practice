import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.css";

import Navbar from "./components/Navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Count from "./pages/count";
import CountWithHook from "./pages/countWithHook";
import ListRendering from "./pages/listRendering";


axios.defaults.baseURL =
  "https://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/count" component={Count} />
        <Route exact path="/count-with-hook" component={CountWithHook} />
        <Route exact path="/list-rendering" component={ListRendering} />
      </div>
    </Router>
  );
}

export default App;
