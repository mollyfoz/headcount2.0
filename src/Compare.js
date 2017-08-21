import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import Container from './Container';

const Compare = ({ districtData, addCompare }) => {

  const districtArray = districtData.map((district, i)=> {
    return <Card key={ districtData[i].props.location } data={districtData[i].props.data} location={districtData[i].props.location} addCompare={addCompare} />
  })

  return (
    <div className='compare-card-container'>
      { districtArray }
    </div>
  )
}

Container.propTypes = {
  districtData: PropTypes.array.isRequired
}

export default Compare;
