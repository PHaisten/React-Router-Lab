import React, { Component } from "react";
import image from "./assets/ghibli.jpg";

export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      film: {}
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
      .then(response => {
        return response.json();
      })
      .then(obj => {
        this.setState({ film: obj });
      });
  }

  render() {
    return (
      <div className="card mb-3 w-50 p-auto mx-auto my-3 justify-content-center">
        <img className="card-img-top" src={image} alt="" />
        <div className="card-body p-3">
          <h5 className="card-title">{this.state.film.title}</h5>
          <p className="card-text">{this.state.film.description}</p>
          <p className="card-text">{this.state.film.director}</p>
        </div>
      </div>
    );
  }
}
