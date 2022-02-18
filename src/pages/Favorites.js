import React, { Component } from "react";
import Card from "../components/Card";

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: {},
      favIds: this.getStorage(),
    };
    this.getStorage = this.getStorage.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  getStorage() {
    const favMovies = localStorage.getItem("favorites");
    return JSON.parse(favMovies);
  }

  // getMovie(id) {
  //   fetch(
  //     `http://api.themoviedb.org/3/movie/${id}?api_key=1074a3c6c0b02758af9cae709f3a0e10`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const mov = this.state.fetchedMovie;
  //       mov.push(res);
  //       this.setState({ movies: mov });
  //     });
  // }

  render() {
    return (
      <>
        <h1>Favorites</h1>
      </>
    );
  }
}
