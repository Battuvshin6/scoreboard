import React from "react";
import Player from "./components/Player";
import Header from "./components/Header";
import AddPlayer from "./components/AddPlayer";
import "./App.css";
import { Hangagch } from "./components/Context";
import PLayerList from "./components/PlayerList";
import Crown from "./components/Crown";

const App = () => {
  return (
    <div className="scoreboard">
      <Hangagch>
        <Header />
        <PLayerList />
        <AddPlayer />
      </Hangagch>
    </div>
  );
};

export default App;
