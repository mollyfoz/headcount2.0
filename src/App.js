import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import Controls from './Controls.js';
import Container from './Container';
import Compare from './Compare';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './App.css';

const districtInfo = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();
      this.state = {
        data: districtInfo.findAllMatches(),
        compare: [],
      }
  }

  searchDistricts(string) {
    this.setState({ data: districtInfo.findAllMatches(string)})
  }


  compareDistrictAverages() {
    let districtOne = this.state.compare[0]
    let districtTwo = this.state.compare[1]
    let districtOneAverage = districtInfo.findAverage(districtOne);
    let districtTwoAverage = districtInfo.findAverage(districtTwo);
    let districtAverages = Math.round(1000 * (districtOneAverage / districtTwoAverage))/1000;

    }

  addCompare(district) {
    let compareArray = this.state.compare

    if (compareArray.length >= 2 ) {
        compareArray.shift()
        compareArray.push(district)
        this.compareDistrictAverages()
    } else if (compareArray.length === 1) {
        console.log('length1')

        compareArray.push(district)
        this.compareDistrictAverages()

    } else if (compareArray.length === 0) {
        compareArray.push(district)
      }
    this.setState({ compare: compareArray})
  }


  render() {

    return (
      <div>
        <header>
          <h1>HeadCount</h1>
          <Controls searchDistricts={ this.searchDistricts.bind(this) } />
        </header>

        {
          (this.state.compare).length >= 2 && <div className='compare-data'>
          <Compare districtData={ this.compareDistrictAverages }
                     addCompare={ this.addCompare.bind(this) }/>
                  <div className='compared-vals'>
                      <h3 className='compare-title'>COMPARISON</h3>
                     <h4>{this.compareDistrictAverages.districtOne} : {this.compareDistrictAverages.districtOneAverage}</h4>
                    <h4>{this.compareDistrictAverages.districtTwo} : {this.compareDistrictAverages.districtTwoAverage}</h4>
                     <h4>'Compared' : {this.compareDistrictAverages.districtAverages}</h4>
                  </div>
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
