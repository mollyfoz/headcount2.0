import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import Controls from './Controls.js';
import Container from './Container'
import './App.css';

const districtInfo = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();
      this.state = {
        data: districtInfo.findAllMatches()
      }
  }

  searchDistricts(string) {
    this.setState({
      data: districtInfo.findAllMatches(string)
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <header>
          <h1>HeadCount</h1>
            <Controls  searchDistricts={ this.searchDistricts.bind(this) }/>
        </header>
          <Container districtData={ this.state.data } />
      </div>
    );
  }
}

export default App;
