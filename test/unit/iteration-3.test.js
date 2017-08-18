import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';import React, { Component } from 'react';
import Controls from '../../src/Controls.js';
import { shallow, mount } from 'enzyme';

describe('Searchbar iteration 3', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Controls />)
  })

  test('Controls should exist', () => {
  expect(wrapper).toBeDefined()
  })

  test('it should have a default state', () => {
    expect(wrapper.state().input).toEqual('')
  })

  test('should render an input field', () => {
    const wrapper = shallow(<Controls />)

    expect(wrapper.find('.user-input').length).toEqual(1)
  });

  test('it should call searchDistricts with onChange', () => {
    const mockFn2 = jest.fn()
    const value = 'c'
    const comp = mount(<Controls searchDistricts={mockFn2}/>)
    const inputField = comp.find('.user-input')

      inputField.simulate('change', {target: { value }});
      expect(mockFn2).toBeCalled();

  })

  test('it should update state onChange', () => {
    const mockFn = jest.fn()
    const value = 'c'
    const comp = mount(<Controls searchDistricts={mockFn}/>)
    const inputField = comp.find('.user-input')

      inputField.simulate('change', {target: { value }})
      expect(comp.state().input).toEqual(value)
  })

  test.skip('searchDistricts should return an array of districts containing the search term', () => {

  })

})
