'use strict'

//Create Store's Object
var firstAndPike = {
  ownersName: 'Oscar Cauich',
  address: '1100 Sunset Bldv NE',
  city:'Renton',
  state: 'WA',
  zipCode: 98056,
  storeHours: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyCookieSales: [],
  phoneNumber: 2063885908,
  hourlyMinCustomer: 23,
  hourlyMaxCustomer: 65,
  avergHourlyCookieSales: 6.3,
  locationName: '1st and PIke',

  forcastRandomCustomer: function() {
    return Math.ceil(Math.random() * (this.hourlyMaxCustomer - this.hourlyMinCustomer));
  },

  hourlySales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.hourlyCookieSales.push(Math.ceil(Math.random()*(this.avergHourlyCookieSales * this.forcastRandomCustomer())))[i];
      console.log(this.hourlyCookieSales);
    }
  },
}


var getStoreHours = firstAndPike.storeHours;
var generateSalesData = firstAndPike.hourlySales();
var getHourlycookieSales = firstAndPike.hourlyCookieSales;
console.log(getStoreHours);
console.log(getHourlycookieSales);
// for(var i = 0; i < )


var SeaTacAirport = {
  ownersName: 'Michael Wood',
  address: '1100 Sunset Bldv NE',
  city:'Renton',
  state: 'WA',
  zipCode: 98056,
  phoneNumber: 2063885908,
  hourlyMinCustomer: 3,
  hourlyMaxCustomer: 24,
  avergHourlyCookieSales:1.2,
  locationName: '1st and PIke',
}

var SeattleCenter = {
  ownersName: 'Michael Wood',
  address: '1100 Sunset Bldv NE',
  city:'Renton',
  state: 'WA',
  zipCode: 98056,
  phoneNumber: 2063885908,
  hourlyMinCustomer: 11,
  hourlyMaxCustomer: 38,
  avergHourlyCookieSales:3.7,
  locationName: '1st and PIke',
}
var CapitolHill = {
  ownersName: 'Michael Wood',
  address: '1100 Sunset Bldv NE',
  city:'Renton',
  state: 'WA',
  zipCode: 98056,
  phoneNumber: 2063885908,
  hourlyMinCustomer: 20,
  hourlyMaxCustomer: 38,
  avergHourlyCookieSales:2.3,
  locationName: '1st and PIke',
}
var Alki = {
  ownersName: 'Michael Wood',
  address: '1100 Sunset Bldv NE',
  city:'Renton',
  state: 'WA',
  zipCode: 98056,
  phoneNumber: 2063885908,
  hourlyMinCustomer: 2,
  hourlyMaxCustomer: 16,
  avergHourlyCookieSales:4.6,
  locationName: '1st and PIke',
}
// var heading = document.getElementById('title');
// heading.textContent = firstAndPike.ownersName;
