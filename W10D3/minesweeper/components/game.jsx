import React from 'react';
import ReactDOM from 'react-dom';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 10)
      
    };
    this.updateGame = this.updateGame.bind(this);

  }

  changeDimensions(size, bombs){

  }

  updateGame(tile, type){
    if (type === 'contextmenu') {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({board: this.state.board});
  }

  won(){
    return(
      <div className="modal">
        <div className="modal-screen">
          <div className="modal-content">
            <p>You Won!</p>
            <button onClick= {(e)=> { this.setState({board: new Minesweeper.Board(9,10)})}}>Play Again</button>
          </div>
        </div>
      </div>
    )
  }

  lost(){
    return(
      <div className="modal">
        <div className="modal-screen">
          <div className="modal-content">
            <p>You Lost!</p>
            <button onClick={(e) => { this.setState({ board: new Minesweeper.Board(9, 10) }) }}>Play Again</button>
          </div>
        </div>
      </div>
    )
  }


  render(){
    return (
      <div className="modal">
        <h1>Minesweeper</h1>
        <p className="description">Click to explore a tile.</p>
        <p className="description">Right click to flag a tile.</p>
        <form>
        <br/>
          <label> Grid Size
            <input type="text" name="size"/>
          </label>
        <br/>
          <label> Number of Bombs
            <input type="text" name="bombs"/>
          </label>
        <br/>
          <input type="submit" onClick={(e)=>{
            e.preventDefault();

            let size = document.getElementsByName("size")[0].value;
            document.getElementsByName("size")[0].value = "";
            let bombs = document.getElementsByName("bombs")[0].value;
            document.getElementsByName("bombs")[0].value = "";

            {this.setState({board: new Minesweeper.Board(size, bombs)})}
            }}/>
          <br/>
        </form>
        <Board board={this.state.board} move={this.updateGame}/>
        {this.state.board.lost() ? this.lost() : " "} 
        {this.state.board.won() ? this.won() : " "}
      </div>
    );
  }

}

export default Game;