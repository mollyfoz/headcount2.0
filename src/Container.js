import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


const Container = ({ districtData, addCompare }) => {


  const districtArray = districtData.map(district=> {
    return <Card key={district.id} data={district.data} location={district.location} addCompare={addCompare} />
  })

  return (
    <div className='card-container'>
      { districtArray }
    </div>
  )
}

Container.propTypes = {
  districtData: PropTypes.array.isRequired
}

export default Container;
