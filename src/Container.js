import React, { Component } from 'react';
import Card from './Card';

export default class Container extends Component {
  constructor() {
    super();

  }
  render () {
    return (
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}
