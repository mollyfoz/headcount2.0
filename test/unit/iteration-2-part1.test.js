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

  test('it should default selected to false', () => {
    expect(wrapper.state()).toEqual({ selected: false })
  })

  test('it should update state onClick', () => {
    const mockFn = jest.fn()
    const comp = shallow(<Card data={district.data.Colorado.data} location={district.data.Colorado.Location}selectCard={mockFn}/>)
    const selectedCard = comp.find('.data-card')

      selectedCard.simulate('click', {target: true })
      expect(comp.state().selected).toBeTruthy()
  })

  test('it should call addCompare with onChange', () => {
    const mockFn2 = jest.fn()
    const comp = mount(<Card data={district.data.Colorado.data} location={district.data.Colorado.Location} selectCard={mockFn2}/>)
    const selectedCard = comp.find('.data-card')

      selectedCard.simulate('click', {target: true });
      expect(mockFn2).toBeCalled();

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
