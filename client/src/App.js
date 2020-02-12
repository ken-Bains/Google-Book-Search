import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" Component={""}>Home</Route>
    </Router>
    
  );
}



export default App;
