import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import Navbar from "./components/navbar";
import { BookContextProvider } from "./utils/bookProvider";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="jumbotron text-center">
        <h1 className="display-4">React Google Book Search</h1>
        <p className="lead">Search for and Save Books of Interest.</p>
      </div>
      <BookContextProvider>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
        </Switch>
      </BookContextProvider>
    </BrowserRouter>
  );
}

export default App;
