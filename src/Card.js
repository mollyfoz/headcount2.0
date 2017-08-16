import React from 'react';
import DistrictRepository from './helper'

const Card = ({ data }) =>  {

  return (
    <div className='data-card'>
      { data.Location }
    </div>
  )
}

export default Card;
