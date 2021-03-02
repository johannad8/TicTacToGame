import Tile from '../components/Tile';
import Score from '../components/Score';
import './_gameBoard.scss';
import React, { useState } from "react";

// The Game
function GameBoard() {
  const playerX = "X", playerO = "O";
  const tileCount = 9;

  // useState
  const [tiles, setTiles] = useState(Array(tileCount).fill(null));
  const [clickCount, setClickCount] = useState(0);
  const [playerXScore, setPlayerXScore] = useState(0);
  const [player0Score, setPlayer0Score] = useState(0);
  const [gameInProgress, setGameInProgress] = useState(false);

  // Check the winner
  function checkWinner(player) {
    
    // The winner rows inside the gameboard
    const winnerLines = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [1,5,9],
      [3,5,7]
    ];

    // The loop to get 9 tiles at the gameboard
    for (var i = 0; i < winnerLines.length; i++) {
      const row = winnerLines[i];

      // If one row is a winnerline then show the winner otherwise it's false.
      if (tiles[row[0] -1] === player && tiles[row[1] -1] === player && tiles[row[2] -1] === player) {
        return true;
      }
    }
    return false;
  }

  // Updating the player's score after the win
  function updateScore(player) {
    if (player === playerO) {
      setPlayer0Score(player0Score + 1);
    }
    else if (player === playerX) {
      setPlayerXScore(playerXScore + 1);
    }
  }

  // Start the gameboard
  function startGame() {
    setGameInProgress(true);
  }

  // Reset the gameboard and setting the tiles to null
  function resetGame() {
    setTiles(Array(tileCount).fill(null));
    setClickCount(0);
    setGameInProgress(false);
  }

  // Stop the game if there are no tiles left
  function isGameOver() {
    return !tiles.some((tile) => tile === null);
  }


  function tileClicked(e, index) {
    e.preventDefault();
    setClickCount(clickCount + 1);

    // If tiles are already set then abort
    if (tiles[index] !== null) {
      return;
    }

    // Check which value player is using - X or O
    if (clickCount % 2) {
      tiles[index] = playerX;
    }
    else {
      tiles[index] = playerO;
    }

    setTiles(tiles);

    // If there's a winner line, X or O, then send an update one point to the winner player and reset the game
    if (checkWinner(tiles[index])) {
      updateScore(tiles[index]);
      resetGame();
    }

    // If the game is over then start over the game
    if (isGameOver()) {
      resetGame();
    }
  }

  return (
    <>
      <Score playerX={playerXScore} player0={player0Score} />
      <section className="game-container">

        { gameInProgress ? null :
          <div className="btn-container">
          <button className="btn"value="Hello!" onClick={startGame}>
            New Game
          </button>
          </div>
        }

        { gameInProgress ?
          <div className="tiles-container">
            {Array.from(Array(tileCount)).map((value, i) => {
              return <Tile value={tiles[i]} tileClicked={tileClicked} key={i} index={i} />
            })}
          </div>
        : null
      }
      </section>
    </>
  );
}

export default GameBoard;
