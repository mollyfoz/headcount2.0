import React from 'react';

const Card = ({ location, data }) => {
  const keys = Object.keys(data)

  let keyVals = keys.map((key, i) => {
    return <p className='year-data' key={ i }> { key }: { data[key] } </p>
  })

  return (
    <div className='data-card'>
      <h3>{ location }</h3>
        <div>
          { keyVals }
        </div>
    </div>
  )
}

export default Card;
