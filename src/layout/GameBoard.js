import Tile from '../components/Tile';
import Score from '../components/Score';
import './_gameBoard.scss';
import React, { useState } from "react";

function GameBoard() {
  const playerX = "X", playerO = "0";
  const tileCount = 9;

  const [winner, setWinner] = useState();
  const [tiles, setTiles] = useState(Array(tileCount).fill(null));
  const [clickCount, setClickCount] = useState(0);

  function checkWinner(player) {
    const possibleLines = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [1,5,9],
      [3,5,9]
    ];

    for (var i = 0; i < possibleLines.length; i++) {
      const row = possibleLines[i];

      if (tiles[row[0] -1] === player && tiles[row[1] -1] === player && tiles[row[2] -1] === player) {
        return true;
      }
    }

    return false;
  }

  function resetGame() {
    setTiles(Array(tileCount).fill(null));
  }

  function isGameOver() {
    return !tiles.some((i) => i === undefined || i === null);
  }

  function tileClicked(e, index) {
    e.preventDefault();
    setClickCount(clickCount + 1)
    tiles[index] = clickCount % 2 ? playerX : playerO;
    setTiles(tiles);

    if (checkWinner(tiles[index])) {
      setWinner(tiles[index]);
      resetGame();
    }

    if (isGameOver()) {
      resetGame();
    }
  }

  return (
    <>
      <Score winner={winner} />
      <section className="game-container">
        <button value="Hello!" onClick={(e) => alert(e.target.value)}>
          New Game
        </button>
        <div className="tiles-container">
          {Array.from(Array(tileCount)).map((value, i) => {
            return <Tile value={tiles[i]} tileClicked={tileClicked} key={i} index={i} />
          })}
        </div>
      </section>
    </>
  );
}

export default GameBoard;
