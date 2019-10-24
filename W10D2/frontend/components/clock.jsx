import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
      intervalId: ""
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState ({time: new Date()});
  }

  componentDidMount() {
    this.setState ({intervalId: setInterval(this.tick, 1000)});
    
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
//this is so dumb
//SUPPOSED TO BE Date.prototype.toDateString()!!!!!!!!!!!!!!!!!!!!!!!!!
  monthDisplay(num){
    let months ={
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Aug',
      8: 'Sept',
      9: 'Oct',
      10: 'Nov',
      11: 'Dec'
    }
    return months[num];
  }

  render() {
    const { time } = this.state;
    // const { hour, minutes, seconds } = time;
    // console.log(time.getHours());
    var options = { weekday: 'short'};
    // console.log(new Intl.DateTimeFormat('en-US', options).format(time));
    return (
      <div class="clock">
        <p>
          <span>Time: </span>
          <span>
            <span>{time.getHours()}</span>
            <span>:</span>
            <span>{time.getMinutes()}</span>
            <span>:</span>
            <span>{time.getSeconds()}</span>
            <span>  PDT</span>
          </span>
        </p>

        <p>
          <span>Date: </span>
          {/* <span>{new Intl.DateTimeFormat('en-US', options).format(time)} {time.getDate()} {time.getFullYear()}</span> */}
          <span>{new Intl.DateTimeFormat('en-US', options).format(time)} {this.monthDisplay(time.getMonth())} {time.getDate()} {time.getFullYear()}</span>
        </p>
       
      </div>
      
    )
  }
}

export default Clock;