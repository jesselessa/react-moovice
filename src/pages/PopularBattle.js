import React, { Component } from "react";
import Card from "../components/Card";

export default class PopularBattle extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      movies: [],
      currentBattle: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1074a3c6c0b02758af9cae709f3a0e10"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          isLoaded: true,
          movies: res.results,
        });
      });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.currentBattle !== this.state.currentBattle) {
      console.log(this.state.movies[this.state.currentBattle].title);
      if (this.state.movies[this.state.currentBattle].title === undefined) {
        const noMoreMovies = document.getElementById("noMoreMovies");
        noMoreMovies.classList.remove("endList");
        return console.log("Done");
      }
    }
  }

  handleClick() {
    this.setState((prevState) => ({
      currentBattle: prevState.currentBattle + 2,
    }));
  }

  render() {
    const movies = this.state.movies,
      selectedMovie1 = movies[this.state.currentBattle],
      selectedMovie2 = movies[this.state.currentBattle + 1];

    return (
      <main>
        <h1>Popular Battle</h1>
        {this.state.isLoaded ? (
          <div>
            <Card
              key={selectedMovie1.id}
              poster_path={selectedMovie1.poster_path}
              title={selectedMovie1.title}
              release_date={selectedMovie1.release_date}
              overview={selectedMovie1.overview}
              onClick={() => this.handleClick()}
            ></Card>
            ;
            <Card
              key={selectedMovie2.id}
              poster_path={selectedMovie2.poster_path}
              title={selectedMovie2.title}
              release_date={selectedMovie2.release_date}
              overview={selectedMovie2.overview}
              onClick={() => this.handleClick()}
            ></Card>
            ;
          </div>
        ) : (
          <p>Is loading...</p>
        )}
      </main>
    );
  }
}
