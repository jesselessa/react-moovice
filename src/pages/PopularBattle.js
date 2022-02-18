import React, { Component } from "react";
import Card from "../components/Card";

export default class PopularBattle extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      movies: [],
      currentBattle: 0,
      favorites: localStorage.getItem("favorites") || [],
      // localStorage.getItem : soit le state de "favorites" prend la valeur sauvegardée dans le localStorage si elle existe, soit rien et par défaut création d'un tableau vide
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1074a3c6c0b02758af9cae709f3a0e10"
      // Affiche la liste des 20 films les plus récents classés par popularité
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
    // on crée une copie temporaire du state de "favorites" dans un nouveau tableau à l'aide du spread operator, à l'intérieur duquel on ajoute à la suite l'id du film sélectionné par l'utilisateur
    localStorage.setItem("favorites", JSON.stringify(favoritesTemp));
    // localStorage.setItem : enregistre la valeur de la donnée favoriteTemp sous la clé "favorites" dans le localStorage
    // On a converti favoritesTemp (initialement, un tableau) en string car le localStorage ne peut stocker que des strings
    // JSON.stringify => pour transformer un objet/array JavaScript en une chaîne JSON
    this.setState((prevState) => ({
      currentBattle: prevState.currentBattle + 2,
      favorites: favoritesTemp,
    }));
  }

  render() {
    const movies = this.state.movies,
      selectedMovie1 = movies[this.state.currentBattle],
      selectedMovie2 = movies[this.state.currentBattle + 1];

    if (this.state.currentBattle < movies.length - 1) {
      return (
        <main>
          <h1>Popular Battle</h1>
          {this.state.isLoaded ? (
            <div>
              <Card
                key={selectedMovie1.id}
                picture={selectedMovie1.poster_path}
                title={selectedMovie1.title}
                releaseDate={selectedMovie1.release_date}
                overview={selectedMovie1.overview}
                onClick={() => this.handleClick(selectedMovie1.id)}
              ></Card>
              ;
              <Card
                key={selectedMovie2.id}
                picture={selectedMovie2.poster_path}
                title={selectedMovie2.title}
                releaseDate={selectedMovie2.release_date}
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
    } else {
      return (
        <main>
          <div>
            <h2 className="">Vous avez parcouru tous les films !</h2>
          </div>
        </main>
      );
    }
  }
}
