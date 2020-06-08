import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hue: 180,
      saturation: 50,
      lightness: 50
    };
  }

  HueUpdated = event => {
    console.log("updating hue");
    const Hue = event.target.value;
    this.setState({
      hue: Hue
    });
  };

  SaturationUpdated = event => {
    console.log("updating saturation");
    const Saturation = event.target.value;
    this.setState({
      saturation: Saturation
    });
  };

  LightnessUpdated = event => {
    console.log("updating lightness");
    const Lightness = event.target.value;
    this.setState({
      lightness: Lightness
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pick your favorite color!</h1>
        </header>
        <section/>
        <section
          className="Box-style"
          style={{
            backgroundColor: `hsl(${this.state.hue}, ${
              this.state.saturation
            }%, ${this.state.lightness}%)`
          }}
        />
        <section className="hsl-sliders">
          <h1>Hue</h1>
          <input type="range" min="0" max="360" onInput={this.HueUpdated} />
          <h1>Saturation</h1>
          <input type="range" min="0" max="100" onInput={this.SaturationUpdated} />
          <h1>Lightness</h1>
          <input type="range" min="0" max="100" onInput={this.LightnessUpdated} />
        </section>
      </div>
    );
  }
}

export default App;
