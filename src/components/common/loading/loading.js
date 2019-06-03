import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "./loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <Loader type="Bars" color="green" height="100" width="100" />
        </div>
      </div>
    );
  }
}

export default Loading;
