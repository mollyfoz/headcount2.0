import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import React, { Component } from 'react';
import Card from '../../src/Card.js';
import { shallow, mount } from 'enzyme';

const district = new DistrictRepository(kinderData)

describe('Card iteration 2', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card data={district.data.Colorado.data} location={district.data.Colorado.Location}/>)
  })

  test('Card should exist', () => {
    expect(wrapper).toBeDefined()
  })

  test('it should render a card', () => {
    expect(wrapper.find('.data-card').length).toEqual(1)
  })

  test('the card should have a title', () => {
    expect(wrapper.find('h3').length).toEqual(1)
  })

  test('the card should render 11 p tags with class name of year-data', () => {
    expect(wrapper.find('.year-data').length).toEqual(11)
  })

})
