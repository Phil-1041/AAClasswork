import React from 'react';
import Tile from './tile';

class Board extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="board">
        {this.props.board.grid.map((row, rowIdx) =>
          <div className="row" key={rowIdx}>
          {row.map((tile, tileIdx) => 
            <Tile square={tile} func={this.props.move} pos={[rowIdx, tileIdx]} key={[rowIdx, tileIdx]}/>
          )}
          </div>
        )}
      </div>
    )
  }

}

export default Board;