import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import Controls from './Controls.js';
import Container from './Container';
import Compare from './Compare'

import './App.css';

const districtInfo = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();
      this.state = {
        data: districtInfo.findAllMatches(),
        compare: []
      }
  }

  searchDistricts(string) {
    this.setState({ data: districtInfo.findAllMatches(string)})
  }

  addCompare(district) {
    console.log("App Boom!")
    let compareArray = this.state.compare.push(district)
    this.setState({ compare: compareArray})
  }

  render() {

    return (
      <div>
        <header>
          <h1>HeadCount</h1>
          <Controls searchDistricts={ this.searchDistricts.bind(this) } />
        </header>
          <Compare/>
          <Container districtData={ this.state.data}
                     addCompare={ this.addCompare.bind(this)}
            />
      </div>
    )
  }
}

export default App;
