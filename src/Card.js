import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  constructor() {
    super();
      this.selectCard = this.selectCard.bind(this)
      this.state = {
        selected: false
      }
  }

  selectCard(e) {
    if (this.state.selected === false) {
      this.setState({ selected: true } )
      this.props.addCompare(this)
    } else {
      this.setState({ selected: false } )
      this.props.addCompare(this)
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // const nextSelected = ( nextState.selected === true ) ? 'border: solid 1px #FF803E' : 'border: none'
    // // const nextStyle = ( nextSelected = true ) ? 'border: solid 1px #FF803E' : 'border: none'
    // return this.div.style = { nextSelected }
    if(nextState.selected === true) {
      this.div.style = 'border: solid 1px #FF803E'
    } else {
      this.div.style = 'border: none'
    }
  }


  render() {
   const { id, location, data } = this.props
   const districtNames = Object.keys(data)

   let highScore = {
     color: '#006666'
   }

   let lowScore = {
     color: '#FF803E'
   }

    let nameVals = districtNames.map((name, i) => {
      const listItem = data[name] >= 0.5 ? highScore : lowScore
      return <li style={ listItem } className='year-data' key={ i }> { name }: { data[name] } </li>
    })



    return (
        <div key={ id } ref={ element => this.div = element } className='data-card' onClick={ this.selectCard.bind(this) }>
          <h3>{ location }</h3>
          <div className='data-list'>
            <ul>
              { nameVals }
            </ul>
          </div>
        </div>
    )
  }
}

Card.propTypes = {
  districtData: PropTypes.func
}
