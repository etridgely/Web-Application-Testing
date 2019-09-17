import React, { useState } from "react";
import "./App.css";
// import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [balls, setBalls] = useState(1);
  const [strikes, setStrikes] = useState(1);
  const [hits, setHits] = useState(1);
  const [fouls, setFouls] = useState(1);

  if (balls > 4) {
    setBalls(0);
  }

  if (strikes > 3) {
    setStrikes(0);
  }

  if (hits > 1) {
    setHits(0) && setStrikes(0);
  }

  // if (fouls > 1) {
  //   setHits(0) && setStrikes(0);
  // }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="bottomRow">
        <div className="quarter">
            <h3 className="quarter__title">Ball</h3>
            <div className="quarter__value">{balls}</div>
          </div>
          <div className="down">
            <h3 className="down__title">Strikes</h3>
            <div className="down__value">{strikes}</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">Hits</h3>
            <div className="toGo__value">{hits}</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Fouls</h3>
            <div className="ballOn__value">21</div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="gameButtons">
          <button
            onClick={() => setBalls(balls + 1)}
            className="gameButtons__changeQuarter"
          >
            Balls
          </button>
        </div>
        <div className="gameButtons">
          <button
            onClick={() => setStrikes(strikes + 1)}
            className="gameButtons__changeQuarter"
          >
            Strikes
          </button>
        </div>
        <div className="gameButtons">
          <button
            onClick={() => setHits(hits + 1)}
            className="gameButtons__changeQuarter"
          >
            Hits
          </button>
        </div>
        <div className="gameButtons">
          <button
            onClick={() => setFouls(fouls + 1)}
            className="gameButtons__changeQuarter"
          >
            Fouls
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
