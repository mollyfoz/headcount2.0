import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import React, { Component } from 'react';
import Compare from '../../src/Compare.js';
import { shallow, mount } from 'enzyme';

// const district = new DistrictRepository(kinderData)

describe('Compare iteration 5', () => {
  let wrapper;
  let mockFn;
  const mockData = [
  { data:
    {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385, 2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
    location: 'ACADEMY 20',
  },
  { data:
    {2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395, 2008: 0.536, 2009: 0.598, 2010: 0.64, 2011: 0.672, 2012: 0.695, 2013: 0.703, 2014: 0.741},
    location: 'COLORADO',
  }
]

  beforeEach(() => {
    mockFn = jest.fn()
    wrapper = shallow(<Compare districtData={mockData} addCompare={mockFn}/>)
  })

  test.skip('Compare should exist', () => {
    expect(wrapper).toBeDefined()
  })


})
