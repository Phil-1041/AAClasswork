import React from 'react';

class Tile extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    // }
    // this.whatFlag = this.whatFlag.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    // console.log(e.type);
    this.props.func(this.props.square, e.type);
  }

  whatFlag(){
    if(this.props.square.bombed && this.props.square.explored){ //only show up when clicked
      return 'tile bombed';
    } else if(this.props.square.explored) {
      return 'tile explored';
    } else if(this.props.square.flagged) {
      return 'tile flagged';
    } else {
      return 'tile unexplored';
    }
  }

  render(){
    return (
      <div className={this.whatFlag()} onClick={(e) => this.handleClick(e)} onContextMenu={(e) => this.handleClick(e)}>
        {this.props.square.bombed && this.props.square.explored ? "💣" : " "}
        {this.props.square.explored && !this.props.square.bombed ? this.props.square.adjacentBombCount() : " "}
        {this.props.square.flagged ? "🍕" : " "}
      </div>
    )
  }

}
//jsx have to write className = instead of class = like in HTML
export default Tile;