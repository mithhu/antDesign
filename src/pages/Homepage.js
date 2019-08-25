import React, { Component } from "react";
import ImageCard from "../component/ImageCard";
import ProgressBar from "../component/ProgressBar";
import WrappedNormalLoginForm from "../component/NormalLoginForm";
import LayOutContainer from "../component/LayOutContainer";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        {/* <ImageCard />
        <ProgressBar /> */}
        {/* <WrappedNormalLoginForm /> */}
        <LayOutContainer />
      </div>
    );
  }
}
