
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

function App() {
  return (
   
    <Router>
      <div> 
          <Route exact path="/" component={Home}></Route>
      </div>
    </Router>
  
  );
}

export default App;
