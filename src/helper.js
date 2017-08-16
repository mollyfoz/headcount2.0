export default class DistrictRepository {
  constructor(kinderData){
    this.data = this.newData(kinderData)
  }

  newData(data) {
    return data.reduce((acc, elem) => {
      if(!acc[elem.Location]) {
        acc[elem.Location] = {location: elem.Location.toUpperCase(), data: {}, id: this.idGenerator()}
      }
        acc[elem.Location].data[elem.TimeFrame] = Math.round(1000 * elem.Data)/1000 || 0;
      return acc
    }, {})
  }

  idGenerator() {
    let S4 = () => {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

  findByName(name) {
    if (name) {
      let keys = Object.keys(this.data);
      let found = keys.find(location => location.toUpperCase() === name.toUpperCase())
      return this.data[found]
    }
  }

  findAllMatches(name) {
    let allData = Object.keys(this.data);
    let matches = allData.map(location => this.data[location])

      if(name) {
        return matches.filter(distName => distName.location.includes(name.toUpperCase()))
      }
    return matches
  }
}
