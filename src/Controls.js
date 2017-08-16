import React, { Component } from 'react';

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      disabled: true,
    };
  };

  setInputState(e) {
    this.setState({ input: e.target.value, disabled: false }, () => {
      this.props.searchDistricts(this.state.input)
    })
  }

  render() {
    return(
      <div>
        <input
          placeholder='search'
          value={ this.state.input }

          onChange={
            this.setInputState.bind(this)}/>
        </div>
    )
  };
}
