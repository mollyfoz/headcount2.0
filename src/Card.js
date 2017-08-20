import React, {Component} from 'react';
// import PropTypes from 'prop-types';

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
      if (data[name] >= 0.5) {
        return <li style={ highScore } className='year-data' key={ i }> { name }: { data[name] } </li>
      } else {
        return <li style={ lowScore } className='year-data' key={ i }> { name }: { data[name] } </li>
      }
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
