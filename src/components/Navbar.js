import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/weekly">Weekly</Link>
          <Link to="/weekly-battle">Weekly Battle</Link>
          <Link to="/popular">Popular</Link>
          <Link to="/popular-battle">Popular Battle</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </header>
    );
  }
}
