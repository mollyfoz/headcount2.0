import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import Controls from '../../src/Controls.js';
import { shallow, mount } from 'enzyme';

describe('Searchbar iteration 3', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Controls searchDistricts={ this.searchDistricts.bind(this) }/>)
  })

  test('Controls should exist', () => {

  expect(wrapper).toBeDefined()
  })


  test.skip('it should have a default state', () => {
    console.log(this.state)
    const appState = this.state
    // const appState = wrapper.state();

    expect(appState.input).toEqual('')
  })

  test.skip('searchDistricts should return an array of districts containing the search term', () => {
    expect()
  })

})
