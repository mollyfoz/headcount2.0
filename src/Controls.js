import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  setInputState(e) {
    this.setState({ input: e.target.value }, () => {
      this.props.searchDistricts(this.state.input)
    })
  }

  render() {

    return (
      <div className='search-container'>
        <input className='user-input'
          placeholder='Search' value={ this.state.input }
          onChange={ this.setInputState.bind(this) } />
      </div>
    )
  }
}

Controls.propTypes = {
  searchDistricts: PropTypes.func.isRequired
}
