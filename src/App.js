import React, { Component } from 'react';
import DistrictRepository from './helper';
import Controls from './Controls.js';
import Container from './Container'
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>HeadCount</h1>
          <Container />
      </div>
    );
  }
}

export default App;
