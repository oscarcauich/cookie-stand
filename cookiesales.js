'use strict'

//Create Store's Object
var firstAndPike = {
  ownersName: 'Oscar Cauich',
  address: '1100 Sunset Bldv NE',
  city:'Renton',
  state: 'WA',
  zipCode: 98056,
  phoneNumber: 2063885908,
  hourlyMinCustomer: 23,
  hourlyMaxCustomer: 65,
  avergHourlyCookieSales:6.3,
  locationName: '1st and PIke',
}
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
var storesTable = document.getElementById('storelistName');

var storeList = document.createElement('td');
storeList.textContent = firstAndPike.locationName;
var storeHourlyMinCustomer = document.createElement('td');
storeHourlyMinCustomer.textContent = firstAndPike.hourlyMinCustomer;

storesTable.appendChild(storeList);
storesTable.appendChild(storeHourlyMinCustomer);

console.log(storelist);
