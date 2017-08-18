import React from 'react';
import Card from './Card';

const Container = ({ districtData }) => {
  const districtArray = districtData.map(district=> {
    return <Card key={district.id} data={district.data} location={district.location}/>
  })

  return (
    <div className='card-container'>
      { districtArray }
    </div>
  )
}

export default Container;
