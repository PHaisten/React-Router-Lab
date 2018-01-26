import React, { Component } from "react";
import image from "./assets/ghibli.jpg";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    let filmList = this.props.filmList.map(film => {
      return (
        <div
          className="card col-md-5 mx-auto my-2 p-0 justify-content-center"
          key={film.id}
        >
          <img className="card-img-top w-100" src={image} alt="Card cap" />
          <div className="card-block">
            <h4 className="card-title">{film.title}</h4>
            <p className="card-text">{`${film.description.substring(
              0,
              150
            )}...`}</p>
            <p className="card-text">{film.director}</p>
            <Link to={`/films/${film.id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      );
    });
    return <div className="row ">{filmList}</div>;
  }
}
