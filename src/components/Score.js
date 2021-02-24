import './_score.scss';

function Score(props) {
  return (
    <>
    <section className="score-container">
      <h2>Score</h2>
      <div className="players player-X">
        <h3>Player X</h3>
        <p className="players__score">{props.playerX}</p>
      </div>
      <div className="players player-O">
        <h3>Player O</h3>
        <p className="players__score">{props.player0}</p>
      </div>
    </section>
    </>
  );
}

export default Score;
