import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Weekly from "./pages/Weekly";
import WeeklyBattle from "./pages/WeeklyBattle";
import Popular from "./pages/Home";
import PopularBattle from "./pages/PopularBattle";
import Favorites from "./pages/Favorites";

export default class App extends Component {
  render() {
    return (
      <>
        <h1>App</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/weekly" component={Weekly}></Route>
            <Route exact path="/weekly-battle" component={WeeklyBattle}></Route>
            <Route exact path="/popular" component={Popular}></Route>
            <Route
              exact
              path="/popular-battle"
              component={PopularBattle}
            ></Route>
            <Route exact path="/favorites" component={Favorites}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
