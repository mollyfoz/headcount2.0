import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import Controls from '../../src/Controls.js';

describe('Searchbar iteration 3', () => {

  test('it should have a default state', () => {
    console.log()
    const appState = this.state
    // const wrapper = shallow(<App />);
    // const appState = wrapper.state();

    expect(appState.input).toEqual('')
  })

  test.skip('searchDistricts should return an array of districts containing the search term', () => {
    expect()
  })

})
