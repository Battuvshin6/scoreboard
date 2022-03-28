import React, { useState } from "react";
const AddPlayer = () => {
  const [state, setState] = useState(0);
  const [handleSubmit, stateChange] = useState(1);
  stateChange = (e) => {
    setState({
      value: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(state.value);

    setState({
      value: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={stateChange}
        value={state.value}
        placeholder="Add player name"
      />
      <input type="submit" value="Add player" />
    </form>
  );
};

export default AddPlayer;
