import React, { Component } from "react";
import "../App.css";

export default class Card extends Component {
  render() {
    return (
      <div className="movieBox" onClick={this.props.onClick}>
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
        <h2>{this.props.title}</h2>
        <p>
          <span>Release date : </span>
          {this.props.release_date}
        </p>
        <p>
          <span>Description : </span>
          {this.props.overview}
        </p>
      </div>
    );
  }
}
