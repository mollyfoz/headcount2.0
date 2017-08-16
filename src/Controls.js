import React, { Component } from 'react';
import DistrictRepository from './helper';


export default class Controls extends Component {
  constructor(kinderData) {
    super();
    this.data = DistrictRepository.data;
    this.state = {
      input: '',
    };
  };

  setInput(e) {
    this.setState({ input: e.target.value })
  }


  // searchDistricts(searchTerm) {
  //
  //
  // };

  // render() {
  //   return(
  //
  //   {<input placeholder='search'
  //           value={ this.state.input }
  //           onKeyDown={ e => {
  //            this.handleChange('body', e) }
  //            { this.searchDistricts }/>}
  //           }
  //   )
  // }

};
