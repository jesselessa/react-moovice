import React, { Component } from "react";
import Card from "../components/Card";
import moment from "moment";

export default class Weekly extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const lastWeek = moment().add(-7, "days").format("YYYY-MM-DD"),
      today = moment().format("YYYY-MM-DD");

    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=1074a3c6c0b02758af9cae709f3a0e10`
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
        <h1>Weekly</h1>
        {this.state.movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              overview={movie.overview}
            ></Card>
          );
        })}
      </main>
    );
  }
}
