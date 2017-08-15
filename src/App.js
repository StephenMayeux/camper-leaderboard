import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      top100: null
    }
  }

  //Get FCC data
getFCCData(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log('this is readyState', this.readyState)
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    console.log(JSON.parse(xhttp.response));
     this.setState({top100: JSON.parse(xhttp.response)});
     console.log(this.state.top100);
    }
  }.bind(this)
  //Set up for the request (directions)
  xhttp.open("GET", url, true);
  //Request fires
  xhttp.send();
}


componentDidMount(){
  this.getFCCData("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
}


  render() {
    return (
      <div className="App">
      <table>
        <caption>Leaderboard</caption>
        <tr>
          <th>#</th>
           <th>Camper Name</th>
            <th>Points in past 30 days</th>
             <th>All Time Points</th>
        </tr>
        <tbody>
            <tr>

        </tr>
          </tbody>

      </table>
      </div>
    );
  }
}

export default App;
