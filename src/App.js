import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import Controls from './Controls.js';
import Container from './Container';
import Compare from './Compare';

import './App.css';

const districtInfo = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();
      this.state = {
        data: districtInfo.findAllMatches(),
        compare: [],
        compareResult: {}
      }
  }

  searchDistricts(string) {
    this.setState({ data: districtInfo.findAllMatches(string)})
  }

  addCompare(district) {
    let compareArray = this.state.compare

    if (compareArray.length >= 2 ) {
        compareArray.shift()
        compareArray.shift()
        this.setState({ compare: [] })
        console.log(this.state.compare)
    } else if (compareArray.length === 1) {
        compareArray.push(district)
        this.setState({ compare: compareArray})
        let districtOne = this.state.compare[0].props.location
        let districtTwo = this.state.compare[1].props.location
        let compareResponse = districtInfo.compareDistrictAverages(districtOne, districtTwo)

        console.log(districtOne)
        console.log(districtTwo)
        this.state.compareResult = compareResponse
        console.log(this.state.compareResult)
    } else if (compareArray.length === 0) {
        compareArray.push(district)
        this.setState({ compare: compareArray})
    }
  }


  render() {

    let compareKeys = Object.keys(this.state.compareResult)
    console.log("keys: ", compareKeys[0])
    return (
      <div>
        <header>
          <h1>HeadCount</h1>
          <Controls searchDistricts={ this.searchDistricts.bind(this) } />
        </header>
        {
          (this.state.compare).length >= 1 && <div className='compare-data'>
          <Compare districtData={ this.state.compare }
                     addCompare={ this.addCompare.bind(this) }/>
                   <h3>{compareKeys[0]}:{this.state.compareResult[compareKeys[0]]}</h3>
                   <h3>
                     {compareKeys[2]}: {this.state.compareResult[compareKeys[2]]}
                   </h3>
                   <h3>{compareKeys[1]}:{this.state.compareResult[compareKeys[1]]}</h3>
          </div>
        }
        <div>
          <Container districtData={ this.state.data }
                     addCompare={ this.addCompare.bind(this) } />
        </div>
      </div>
    )
  }
}

export default App;
