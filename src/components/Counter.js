import React from "react";
import propTypes from "prop-types";
const Counter = (props) => {
  return (
    <div className="counter">
      <button
        className="counter-action dicrement"
        onClick={() => props.changeScore(-1, props.index)}
      >
        -
      </button>
      <span className="counter-score">{props.score}</span>
      <button
        className="counter-action increment"
        onClick={() => props.changeScore(1, props.index)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

Counter.protoTypes = {
  index: propTypes.number,
  score: propTypes.number,
  changeScore: propTypes.func,
};
export default Counter;
-