export default class DistrictRepository {
  constructor(kinderData) {
    this.data = this.newData(kinderData)
  }

  newData(data) {
    return data.reduce((acc, elem) => {
      if(!acc[elem.Location]) {
        acc[elem.Location] = { location: elem.Location.toUpperCase(), data: {}, id: this.idGenerator() }
      }
        acc[elem.Location].data[elem.TimeFrame] = Math.round(1000 * elem.Data)/1000 || 0;
      return acc
    }, {})
  }

  idGenerator() {
    let S4 = () => {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
  }

  findByName(name) {
    if (name) {
      let keys = Object.keys(this.data)
      let found = keys.find(location => location.toUpperCase() === name.toUpperCase())
      return this.data[found]
    }
  }

  districtAverage(arg) {
    let district = this.findByName(arg)
    let districtArray = Object.values(district.data)
    let counter = districtArray.length
    let districtAVG = districtArray.reduce((sum, value)=>{
      sum = (sum + value)/counter
      sum = Math.round(1000 * value)/1000
      // console.log("sumVAL: ",sum+value)
      return sum
    }, 0);
    // console.log('districtArray: ', districtArray)
    // console.log('counter: ',counter)
    // console.log('distAVG: ', districtAVG);
    return districtAVG;

  }

  compareDistrictAverages(arg1, arg2) {
    let districtOneAverage = this.districtAverage(arg1);
    let districtTwoAverage = this.districtAverage(arg2);
    // console.log("dist1AVG: ", districtOneAverage)
    // console.log("dist2AVG: ", districtTwoAverage)
    // console.log('distsAvg: ', districtOneAverage / districtTwoAverage)
    let districtAverages = districtOneAverage + districtTwoAverage / 2;
    districtAverages = Math.round(1000 * districtAverages)/1000
    console.log('avg: ', districtAverages)
    return

    // console.log(Object.values(districtOne.data));
    // console.log(Object.values(districtTwo.data))
  }

  findAllMatches(name) {
    let allData = Object.keys(this.data);
    let matches = allData.map(location => this.data[location])

      if(name) {
        this.compareDistrictAverages('Academy 20', 'Colorado')
        // this.compareDistrictAverages("Colorado", "Academy 20")
        return matches.filter(distName => distName.location.includes(name.toUpperCase()))
      }
    return matches
  }




}
