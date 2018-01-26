import React, { Component } from "react";
import People from "./People";

export default class PeopleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(Response => Response.json())
      .then(object => this.setState({ people: object }));
  }

  render() {
    return (
      <div className="container mt-5">
        <People peopleList={this.state.people} />
      </div>
    );
  }
}
