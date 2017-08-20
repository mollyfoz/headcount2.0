import React from 'react';
// import Card from './Card';

const Compare = ({ districtData }) => {

  const compareCards = districtData.map((district, i) => {
    const years = Object.keys(districtData[i].props.data)
    const yearValues = Object.values(years[i].props.data)
    const name = districtData[i].props.location
    return <li className='year-data' key={ i }> { years[i] } : { yearValues[i] }  </li>
  })

  return (
    <div className='compare-container'>
      <div className='data-card'>
              <h3>{ name }</h3>
              <ul>
                {compareCards}
              </ul>
            </div>
    </div>
  )
}


export default Compare;


//location name for each card clicked => put into that compare array
//compare averages function will turn data back into an Object
//will then need to object.keys to render comparison card
