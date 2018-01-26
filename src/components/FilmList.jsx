import React, { Component } from "react";
import Cards from "./Cards";

class FilmList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(Response => Response.json())
      .then(object => this.setState({ movies: object }));
  }

  render() {
    return (
      <div className="container mt-5">
        <Cards filmList={this.state.movies} />
      </div>
    );
  }
}

export default FilmList;
