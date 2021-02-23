import './_score.scss';
//import React, { Fragment } from "react";
import React, { useState, useEffect } from "react";

function Score(props) {
  const [playerXScore, SetPlayerXScore] = useState(0);
  const [player0Score, SetPlayer0Score] = useState(0);

  useEffect(() => {
    if (props.winner === "0") {
      SetPlayer0Score(player0Score + 1);
      console.log(0);
    }
    else if (props.winner === "X") {
      SetPlayerXScore(playerXScore + 1);
      console.log("X");
    }
  }, [props.winner]);

  return (
    <>
    <section className="score-container">
      <h2>Score</h2>
      <div className="players">
        <div className="X">
          <span>X:</span>
          <span className="player__score">{playerXScore}</span>
        </div>
      </div>
      <div className="players">
        <div className="0">
          <span>0:</span>
          <span className="player__score">{player0Score}</span>
        </div>
      </div>
    </section>
    </>
  );
}

export default Score;
