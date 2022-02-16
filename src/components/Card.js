import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w300/${this.props.poster_path}`}
          alt="poster"
        />
        <p>{this.props.title}</p>
        <p>{this.props.release_date}</p>
        <p>{this.props.overview}</p>
      </>
    );
  }
}
