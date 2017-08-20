import React, { Component } from 'react';
import Card from './Card';

export default class Compare extends Component {

  constructor() {
    super()
  }

  render() {
    console.log(this.props.compare)
    return(
    <h1> Compare Section </h1>
    )
  }



}
