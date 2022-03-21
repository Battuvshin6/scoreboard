import React from "react";
import Player from "./components/Player";
import Header from "./components/Header";
import AddPlayer from "./components/AddPlayer";
import "./App.css";
import { Provider } from "./components/Context";
import PLayerList from "./components/PlayerList";
class App extends React.Component {
  state = {
    players: [
      {
        name: "Enkhtuvshin",
        score: 0,
        id: 1,
      },
      {
        name: "Dulam",
        score: 0,
        id: 2,
      },
      {
        name: "Jambal",
        score: 0,
        id: 3,
      },
      {
        name: "Jambal1",
        score: 0,
        id: 4,
      },
      {
        name: "Jambal2",
        score: 0,
        id: 5,
      },
    ],
  };

  lastPlayerID = this.state.players.length - 1;
  playersId = this.state.players[this.lastPlayerID].id;

  changeScore = (delta, index) => {
    this.setState((prevState) => {
      const updatedPlayers = [...prevState.players];
      const updatedPlayer = { ...updatedPlayers[index] };

      updatedPlayer.score += delta;

      updatedPlayers[index] = updatedPlayer;

      return {
        players: updatedPlayers,
      };
    });
  };

  getHighScore = () => {
    const score = this.state.players.map((p) => p.score);
    const highscore = Math.max(...score);
    if (highscore > 0) {
      return highscore;
    } else {
      return null;
    }
  };

  removePlayer = (paraID) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== paraID),
      };
    });
  };

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name: name,
          score: 0,
          id: (this.playersId += 1),
        },
      ],
    });
  };
  render() {
    const highscore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Provider
          value={{
            players: this.state.players,
            action: {
              handleAddPlayer: this.handleAddPlayer,
              editName: this.editName,
              removePlayer: this.removePlayer,
              changeScore: this.changeScore,
            },
          }}
        >
          <Header />
          <PLayerList highscore={highscore} />
          <AddPlayer addPlayer={this.handleAddPlayer} />
        </Provider>
      </div>
    );
  }
}

export default App;
