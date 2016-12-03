import React, { Component } from 'react';
import logo from '../public/favicon.ico';
import './App.css';
import { parseMinutes, parseHour, pastOrTo, timeNow } from './actions/actions'

class App extends Component {
  render() {
    let time = timeNow()
    // let time = new Date(2016, 12, 10, 4, 55)
    let h = parseHour(time)
    let m = parseMinutes(time)
    let pOt = pastOrTo(time)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>YAAAAAAASSSSS</h2>
        </div>
        <div>
          <h1>It is</h1>
          <h1>{m}</h1>
          <h1>{pOt}</h1>
          <h1>{h}</h1>
        </div>
      </div>
    );
  }
}

export default App;
