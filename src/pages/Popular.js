import React, { Component } from "react";
import Card from "../components/Card";

export default class Popular extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1074a3c6c0b02758af9cae709f3a0e10"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          movies: res.results,
        });
        console.log(res);
      });
  }

  render() {
    return (
      <main>
        <h1>Popular</h1>
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
