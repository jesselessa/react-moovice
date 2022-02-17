import React, { Component } from "react";
import Card from "../components/Card";

export default class PopularBattle extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      movies: [],
      currentBattle: 0,
      favorites: localStorage.getItem("favorites") || [], // soit récupération localStorage, soit par défaut création d'un tableau vide
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

  handleClick(id) {
    const favoritesTemp = [...this.state.favorites, id];
    // on crée une copie temporaire de this.state.favorites dans un nouveau tableau en utilisant le spread opérateur on ajoute à l'intérieur de ce tableau à la suite l'id du film sélectionné par l'utilisateur
    localStorage.setItem("favorites", JSON.stringify(favoritesTemp));
    this.setState((prevState) => ({
      currentBattle: prevState.currentBattle + 2,
      favorites: favoritesTemp,
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
              onClick={() => this.handleClick(selectedMovie1.id)}
            ></Card>
            ;
            <Card
              key={selectedMovie2.id}
              poster_path={selectedMovie2.poster_path}
              title={selectedMovie2.title}
              release_date={selectedMovie2.release_date}
              overview={selectedMovie2.overview}
              onClick={() => this.handleClick(selectedMovie2.id)}
            ></Card>
            ;
          </div>
        ) : (
          <p>Content is loading...</p>
        )}
      </main>
    );
  }
}
