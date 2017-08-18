import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import React, { Component } from 'react';
import Container from '../../src/Container.js';
import { shallow, mount } from 'enzyme';

const district = new DistrictRepository(kinderData)

describe('Container iteration 2', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Container districtData={Object.keys(district.data)} />)
  })

  test('Container should exist', () => {
    expect(wrapper).toBeDefined()
  })

  test('it should render a card container', () => {
    expect(wrapper.find('.card-container').length).toEqual(1)
  })

  test.skip('it should render an array of cards to the page', () => {
    expect(wrapper.find('.data-card').length).toEqual(181)
  })
})
