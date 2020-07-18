import React from "react";
import "./App.scss";
import randomcolor from "randomcolor";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "",
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    const newColor = randomcolor();
    this.setState({ color: newColor });
  }
  render() {
    return (
      <div style={{ backgroundColor: this.state.color }} className="App">
        <div className="Container">
          <h1>Simple Random Color</h1>
          <button onClick={this.increment}>I'm feeling lucky</button>
        </div>
      </div>
    );
  }
}

export default App;
