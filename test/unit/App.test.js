import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import App from '../../src/App';
import Container from '../../src/Container';
import Card from '../../src/Card';
import Controls from '../../src/Controls.js';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import Compare from '../../src/Compare';

const districtInfo = new DistrictRepository(kinderData)

describe('App', () => {

  test('it should render components when it mounts', () => {
    const wrapper = mount(<App />)

    expect(wrapper.find('Controls').length).toEqual(1)
    expect(wrapper.find('Container').length).toEqual(1)
    expect(wrapper.find('Card').length).toEqual(181)
  })

  test('should have a default state', () => {
    const wrapper = mount(<App />)

    expect(wrapper.state()).toBeDefined()
    expect(wrapper.state().data).toHaveLength(181)
    expect(wrapper.state().compare).toBeDefined()
    expect(wrapper.state().compare).toEqual([])
  })

  test('should render Compare if and only if array length is 2', () => {
    const wrapper = shallow(<App />)
    const mockData = [
      {location: 'COLORADO', data: {2004: 0.35}},
      {location: 'ARAPAHOE', data: {2004: 0.48}}
    ]

    expect(wrapper.find('Compare').length).toEqual(0)
    wrapper.setState({compare: mockData})
    expect(wrapper.state().compare.length).toEqual(2)
    expect(wrapper.find('Compare').length).toEqual(1)
  })
})
