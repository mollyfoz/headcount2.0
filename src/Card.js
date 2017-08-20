import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  constructor() {
    super();
      this.selectCard = this.selectCard.bind(this)
      this.state = {
        selected: false,
      }
  }

  selectCard(e) {
    console.log(this.props)
    if (this.state.selected === false) {
      this.setState({ selected: true },  () => console.log('clicked', this.state.selected) )
    } else {
      this.setState({ selected: false },  () => console.log('clicked', this.state.selected) )
    }
  }


  componentWillUpdate(nextProps, nextState) {
    if(nextState.selected === true) {
      // this.props.addCompare(this)
      console.log(this)
      console.log(this.props.addCompare, "boom!")

      this.div.style = 'border: solid 1px #FF803E'
    } else {
      this.div.style = 'border: none'
    }
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

   let selectedCard = {
     border: 'solid 2px black',
   }

    let keyVals = keys.map((key, i) => {
      if (data[key] >= 0.5) {
        return <li style={ highScore } className='year-data' key={ i }> { key }: { data[key] } </li>
      } else {
        return <li style={ lowScore } className='year-data' key={ i }> { key }: { data[key] } </li>
      }
    })

    return (
      <div ref={element => this.div = element} className='data-card' onClick={this.selectCard.bind(this)}>
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
