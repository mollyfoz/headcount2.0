import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';
// import Controls from './Controls.js';
import Container from './Container'
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        data: []
      }
  }

  searchDistricts() {
    this.setState({
      data: this.districtInfo.findAllMatches()
    })
  }

  componentDidMount() {
    this.districtInfo = new DistrictRepository(kinderData)
    this.searchDistricts();
  }

  render() {

    return (
      <div>
        <h1>HeadCount</h1>
          <Container districtInfo={ this.state.data } />
      </div>
    );
  }
}

export default App;
