import './_tile.scss';

function Tile(props){
  return (
    <div
      id={props.index}
      onClick={(e) => props.tileClicked(e, props.index)}
      className="tile"><h2>{props.value}</h2>
    </div>
  );
}

export default Tile;
