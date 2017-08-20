import React from 'react';
import DistrictRepository from './helper';

const Card = ({ location, data }) => {
  const keys = Object.keys(data)

  let keyVals = keys.map((key, i) => {
    return <p className='year-data' key={ i }> { key }: { data[key] } </p>
  })


  return (
    <div className='data-card'
           onClick={ (e)=> {console.log(e.target)} }>
      <h3>{ location }</h3>
        <div>
          { keyVals }
        </div>

    </div>
  )
}

export default Card;
