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
  StoreName: '1st and Pike',

  forcastRandomCustomerPerHour: function() {
    return Math.ceil(Math.random() * (this.hourlyMaxCustomer / this.hourlyMinCustomer));
  },

  hourlyStoreSales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.hourlyCookieSales.push(Math.ceil(Math.random()*(this.avergHourlyCookieSales * this.forcastRandomCustomerPerHour())))[i];
      // console.log(this.hourlyCookieSales);
    }
  },
}

var getStoreHours = firstAndPike.storeHours;
var generateSalesData = firstAndPike.hourlyStoreSales();
var getHourlycookieSales = firstAndPike.hourlyCookieSales;

var StoreName = document.getElementById('StoreName');
StoreName.textContent = firstAndPike.StoreName;

var storeHours = document.getElementById('CookieHourlySales');

var storeHoursLi;
for (var i = 0; i < getStoreHours.length; i++ ){

  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = getStoreHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Second Location Object

var SeaTacAirport = {
  ownersName: 'Michael Wood',
  address: '1100 Sunset Bldv NE',
  city:'Renton',
  state: 'WA',
  storeHours: ['6am', '7am','8am','19am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyCookieSales: [],
  zipCode: 98056,
  phoneNumber: 2063885908,
  hourlyMinCustomer: 3,
  hourlyMaxCustomer: 24,
  avergHourlyCookieSales:1.2,
  StoreName: 'SeaTac Airport ',

  forcastRandomCustomerPerHour: function() {
    return Math.ceil(Math.random() * (this.hourlyMaxCustomer / this.hourlyMinCustomer));
  },

  hourlyStoreSales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.hourlyCookieSales.push(Math.ceil(Math.random()*(this.avergHourlyCookieSales * this.forcastRandomCustomerPerHour())))[i];
      // console.log(this.hourlyCookieSales);
    }
  },
}

var getStoreHours = SeaTacAirport.storeHours;
var generateSalesData = SeaTacAirport.hourlyStoreSales();
var getHourlycookieSales = SeaTacAirport.hourlyCookieSales;

var StoreName = document.getElementById('StoreNameTwo');
StoreName.textContent = SeaTacAirport.StoreName;

var storeHours = document.getElementById('CookieHourlySalesSecondStore');

var storeHoursLi;
for (var i = 0; i < getStoreHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = getStoreHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Third Location

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
