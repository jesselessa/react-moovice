import React, { Component } from "react";
import Card from "../components/Card";

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favIds: this.getStorage(),
    };
    this.getStorage = this.getStorage.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  getStorage() {
    const favList = localStorage.getItem("favorites");
    return JSON.parse(favList);
  }

  getMovie(id) {
    fetch(
      `http://api.themoviedb.org/3/movie/${id}?api_key=1074a3c6c0b02758af9cae709f3a0e10`
    )
      .then((res) => res.json())
      .then((res) => {
        const movie = res;
        const movies = this.state.movies;
        movies.push(movie);
        this.setState({ movies: movies });
      });
  }

  componentDidMount() {
    this.state.favIds.map((id) => this.getMovie(id));
  }

  render() {
    return (
      <main>
        <h1>Favorites</h1>
        {this.state.movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              picture={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              description={movie.overview}
            ></Card>
          );
        })}
      </main>
    );
  }
}
