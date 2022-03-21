import React from "react";
import Player from "./Player";
import { Consumer } from "./Context";
import { checkPropTypes } from "prop-types";

const PlayerList = (props) => {
  return (
    <Consumer>
      {(value) => {
        return (
          <>
            {value.players.map((player, index) => (
              <Player
                {...player}
                key={player.id}
                index={index}
                highscore={player.score === props.highscore}
              />
            ))}
          </>
        );
      }}
    </Consumer>
  );
};
export default PlayerList;
