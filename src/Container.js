import React from 'react';
import Card from './Card';

const Container = ({ districtInfo }) => {
  const districtArray = districtInfo.map(district => <Card key={district.id} {...district} />)

    return (
      <div className='card-container'>
        { districtArray }
      </div>
    )
}

export default Container;
