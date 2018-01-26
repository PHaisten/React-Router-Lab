import React, { Component } from "react";
import image from "./assets/logo.png";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <img className="w-50" src={image} alt="" />
        </div>
      </div>
    );
  }
}

export default Jumbotron;
