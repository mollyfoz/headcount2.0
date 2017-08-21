import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import Container from './Container';
import DistrictRepository from './helper';
// import Card from './Card';

const Compare = ({ districtData, addCompare }) => {

  console.log("compareArray: ", districtData[0])

  const districtArray = districtData.map((district, i)=> {
    return <Card key={ districtData[i].props.location } data={districtData[i].props.data} location={districtData[i].props.location} addCompare={addCompare} />
  })

  return (
    <div className='card-container'>
      { districtArray }
    </div>
  )


Container.propTypes = {
  districtData: PropTypes.array.isRequired
}



  // const compareCards = districtData.map((district, i) => {
  //   const years = Object.keys(districtData[i].props.data)
  //   const yearValues = Object.values(years[i].props.data)
  //   const name = districtData[i].props.location
  //   return <li className='year-data' key={ i }> { years[i] } : { yearValues[i] }  </li>
  // })
  //
  // return (
  //   <div className='compare-container'>
  //     <div className='data-card'>
  //             <h3>{ name }</h3>
  //             <ul>
  //               {compareCards}
  //             </ul>
  //           </div>
  //   </div>
  // )
}


export default Compare;


//location name for each card clicked => put into that compare array
//compare averages function will turn data back into an Object
//will then need to object.keys to render comparison card
