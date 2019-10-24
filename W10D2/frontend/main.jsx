import React from 'react';
import Tabs from './components/tabs'
import Clock from './components/clock'

class Main extends React.Component{

  constructor (props){
    super(props);
    this.state = {
      title: ["dogs", "cats", "dolphins"],
      content: ["dog is the best", "cats", "I can swim"]
    };

  }
  
  render(){
    return (
      <div id="main">
        <Clock/>
        <div class="interactive">
          <Tabs title = {this.state.title} content = {this.state.content} />
        </div>
      </div>
    )
  }

}


export default Main;