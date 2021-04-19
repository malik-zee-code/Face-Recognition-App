import "./App.css";
import Navigation from "./Navigation/Navigation";
import React, { Component } from "react";
import Logo from "./Logo/logo";
import ImageLinkForm from "./ImageLinkForm/imagelinkform";
import Rank from "./Rank/rank";
import Clarifai from "clarifai";
import FaceRecognition from "./Facerecognition/facerecognition";
import Signin from "./Signin/signin";
import Register from "./Register/Register";

const app = new Clarifai.App({
  apiKey: "e2ce00f447ab47d1841aa3540e872252",
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
      box: {},
      route: "signin",
      isSignedin: false,
    };
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    console.log(data.outputs[0].data.regions[0].region_info.bounding_box);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };
  displayFacebox = (box) => {
    this.setState({ box: box });
  };
  OninputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayFacebox(this.calculateFaceLocation(response))
      )
      // there was an error
      .catch((err) => console.log(err));
  };
  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedin: false });
    } else if (route === "home") {
      this.setState({ isSignedin: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { imgUrl, box, isSignedin, route } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedin={isSignedin}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              OninputChange={this.OninputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition box={box} imgUrl={imgUrl} />
          </div>
        ) : route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
