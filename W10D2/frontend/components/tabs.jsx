import React from 'react';

class Tabs extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      // title: props.title,
      // content: props.content,
      active: 0,
      // display: props.content[0]
    }
  }

  componentDidMount() {
    console.log(this.state.a);
  }

  setActiveTab(tabId) {
    this.setState({active: tabId, display: this.state.content[tabId]}, ++)
    document.getElementById
  }



  render(){
    this.props
    // --> <map name=""></map>

    return (
      <div class="tabs">
        <div class="tab-header">
          <span>
            <span onClick={()=> this.setActiveTab(0)}>{this.state.title[0]}</span>
          </span>
          <span>
            <span
            >{this.state.title[1]}</span>
          </span>
          <span>
            <span>{this.state.title[2]}</span>
          </span>
        </div>

        <div class="tab-content">
          <p>{this.state.display}</p>
        </div>
      </div>
    )
  }
}

export default Tabs;