import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  constructor() {
    super()

  }

  render() {

   const { location, data } = this.props
   const keys = Object.keys(data)

   let highScore = {
     color: '#006666'
   }
   let lowScore = {
     color: '#FF803E'
   }

    let keyVals = keys.map((key, i) => {
      if (data[key] >= 0.5) {
        return <li style={ highScore } className='year-data' key={ i }> { key }: { data[key] } </li>
      } else {
        return <li style={ lowScore } className='year-data' key={ i }> { key }: { data[key] } </li>
      }
    })

    return (
      <div className='data-card'>
          <h3>{ location }</h3>
        <div className='data-list'>
          <ul>
            { keyVals }
          </ul>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}
