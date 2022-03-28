import React from "react";
import Header from "./components/Header";
import AddPlayer from "./components/AddPlayer";
import "./App.css";
import { Hangagch } from "./components/Context";
import PLayerList from "./components/PlayerList";
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
