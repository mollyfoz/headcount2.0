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

  findByName(name) {
    if(name) {
    let keys = Object.keys(this.data);
    let found = keys.find(location => location.toUpperCase() === name.toUpperCase())
    return this.data[found]
  }
  }
}
