import React, { Component } from "react";
import image from "./assets/ghibli2.jpg";
import { Link } from "react-router-dom";

export default class People extends Component {
  render() {
    let peopleList = this.props.peopleList.map((people, index) => {
      return (
        <div
          className="card col-md-5 mx-auto my-2 p-0 justify-content-center"
          key={index}
        >
          <img className="card-img-top w-100" src={image} alt="Card cap" />
          <div className="card-block">
            <h4 className="card-title">{people.name}</h4>
            <a
              href={people.url}
              target="_blank"
              className="btn btn-primary active"
            >
              JSON Link
            </a>
            <Link to={`/people/${people.id}`} className="btn btn-primary ml-2">
              Details
            </Link>
          </div>
        </div>
      );
    });
    return <div className="row ">{peopleList}</div>;
  }
}
