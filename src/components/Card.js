import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <>
        {this.props.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300/${this.props.poster_path}`}
            alt="poster"
          />
        ) : (
          <img
            src="https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png"
            alt="poster"
          />
        )}
        <p>{this.props.title}</p>
        <p>{this.props.release_date}</p>
        <p>{this.props.overview}</p>
      </>
    );
  }
}
