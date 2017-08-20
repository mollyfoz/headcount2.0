import React, { Component } from 'react';
import Card from './Card';

const Compare = ({ districtData }) => {

  const compareCards = districtData.map((district, i) => {
      return <Card key={i} data={district.data} location={district.location} />
  })

  return (
    <div className='compare-container'>
      { compareCards }
    </div>
  )
}


export default Compare;


//location name for each card clicked => put into that compare array
//compare averages function will turn data back into an Object
//will then need to object.keys to render comparison card
