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

  //not calling mockFn
  test('it should update state onChange', () => {
    const mockFn = jest.fn();
    const value = 'c'
    const comp = shallow(<Controls onChange={mockFn} />);
    const inputField = comp.find('user-input');

      comp.simulate('change', {target: { value }});
      expect(mockFn).toBeCalledWith(value);
      expect(wrapper.state().input).toEqual(value)
  })

  //searchdist function is in the app, will test there
  test.skip('searchDistricts should return an array of districts containing the search term', () => {

  })

})
