import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';
// import Controls from './Controls.js';
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

  // searchDistricts() {
  //   this.setState({
  //     data: this.districtInfo.findAllMatches()
  //   })
  //   console.log(this.districtInfo.findAllMatches())
  // }

  // componentDidMount() {
  //   // this.searchDistricts();
  //   console.log(this.state.data)
  // }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <h1>HeadCount</h1>
          <Container districtData={ this.state.data } />
      </div>
    );
  }
}

export default App;
