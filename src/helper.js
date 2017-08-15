export default class DistrictRepository {
  constructor(kinderData){
    this.data = this.newData(kinderData)
  }

  newData(data) {
    return data.reduce((acc, elem) => {
      if(!acc[elem.Location]) {
        acc[elem.Location] = {location: elem.Location.toUpperCase(), data: {}}
      }
        acc[elem.Location].data[elem.TimeFrame] = elem.Data;
      return acc
    }, {})
  }
  findByName(name = undefined) {
    let keys = Object.keys(this.data);
    let found = keys.find(location => location === name)
    return this.data[found]
  }
}
