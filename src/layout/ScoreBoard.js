import './_scoreBoard.scss';

function ScoreBoard() {
  return (
    <section className="score">
      <h2>Score</h2>
      <div className="players">
        <div className="player__name">
          <span>X:</span>
          <span className="player__score">1</span>
        </div>
      </div>
      <div className="players">
        <div className="player__name">
          <span>O:</span>
          <span className="player__score">3</span>
        </div>
      </div>
    </section>
  );
}

export default ScoreBoard;
