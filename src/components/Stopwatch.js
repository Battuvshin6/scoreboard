import React from "react";

class Stopwatch extends React.Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState((prevState) => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - prevState.previousTime),
      }));
    }
  };
  resetTime = () => {
    this.setState({ time: (this.state.elapsedTime = 0), isRunning: false });
  };

  handleStopwatch = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
    if (!this.state.isRunning) {
      this.setState({
        previousTime: Date.now(),
      });
    }
  };
  render() {
    const millis = Math.floor(this.state.elapsedTime / 100);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{millis}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.resetTime}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
