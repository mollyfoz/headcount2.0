import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import Controls from './Controls.js';
import Container from './Container';
import Topper from './Topper';
import './App.css';

const districtInfo = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();
      this.state = {
        data: districtInfo.findAllMatches(),
        compare: false,
        compDistricts: [],
      }
  }

  searchDistricts(string) {
    this.setState({ data: districtInfo.findAllMatches(string) })
  }

  selectDistricts(district) {
      let compareState = this.state.compDistricts
    if (compareState.length <= 1) {
      compareState.push(district)
    }

    if (compareState.length === 2) {
      compareState = []
    }
  }

  render() {

    return (
      <div>
        <header>
          <h1>HeadCount</h1>
          <Controls searchDistricts={ this.searchDistricts.bind(this) } />
        </header>
          <Topper />
          <Container districtData={ this.state.data } />
      </div>
    )
  }
}

export default App;
