import './_tile.scss';

function Tile(props){
  return (
    <div
      id={props.index}
      onClick={(e) => props.tileClicked(e, props.index)}
      className="tile"><p>{props.value}</p>
    </div>
  );
}

export default Tile;
