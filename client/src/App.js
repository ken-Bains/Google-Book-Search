<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import './assets/css/App.css'
=======

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data.hits }))
      .catch(err => console.log(err));
  };

>>>>>>> 765248d03720d0d193f9a85a5a248db3f284d986
function App() {
  return (
   
    <Router>
      <div className="homePage"> 
          <Route exact path="/" component={Home}></Route>
      </div>
    </Router>
  
  );
}

export default App;
