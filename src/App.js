import React from "react";
import "./App.css";
import FancyDisplay from "./components/FancyDisplay";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    };
  }

  componentDidMount() {
    this.setState({
      clicks: Math.floor(Math.random() * 10)
    });
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      clicks: this.state.clicks - 1
    });
  };

  render() {
    const { clicks } = this.state;
    return (
      <>
        <div className="container-fluid h-100">
          <div className="center-box h-75 w-75 border border-light rounded">
            <div className="centered">
              <h1 className="text-light text-center">Simple Clicker App</h1>
              <h3 className="text-light text-center m-3">
                {clicks > 0
                  ? `You have clicked ${clicks} time${clicks === 1 ? "" : "s"}`
                  : "You have not clicked yet!"}
              </h3>
              <div className="d-flex flex-row justify-content-center mx-auto w-50">
                {clicks > 0 ? (
                  <button
                    className="btn btn-outline-warning mr-3"
                    onClick={this.handleDecrease}
                  >
                    Decrease
                  </button>
                ) : (
                  ""
                )}
                <button
                  className={`btn btn-outline-${
                    clicks > 5 ? "danger" : "success"
                  }`}
                  onClick={this.handleClick}
                >
                  {clicks > 0 ? "Increase!" : "Click Me!"}
                </button>
              </div>
              <FancyDisplay
                text={
                  clicks > 0
                    ? "Thanks for clicking me!"
                    : "Go ahead and give me a click!"
                }
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
