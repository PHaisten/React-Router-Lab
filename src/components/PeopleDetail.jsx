import React, { Component } from "react";
import image from "./assets/ghibli2.jpg";

export default class PeopleDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {}
    };
  }
  componentDidMount() {
    fetch(
      "https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id
    )
      .then(response => {
        return response.json();
      })
      .then(obj => {
        this.setState({ person: obj });
      });
  }
  render() {
    return (
      <div className="card mb-3 w-25 mx-auto my-3 justify-content-center">
        <img className="card-img-top" src={image} alt="" />
        <div className="card-body p-3">
          <h5 className="card-title">{this.state.person.name}</h5>
          <p className="card-text">Gender: {this.state.person.gender}</p>
          <p className="card-text">Eye Color: {this.state.person.eye_color}</p>
          <p className="card-text">
            Hair Color: {this.state.person.hair_color}
          </p>
        </div>
      </div>
    );
  }
}
