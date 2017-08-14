import React, {Component} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      top100: null
    }

  }

  componentDidMount() {
    axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
      .then(({ data }) => {
        this.setState({ top100: data })
      })
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
            <tr></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
