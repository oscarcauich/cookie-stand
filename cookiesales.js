'use strict'

//Create Store's Object
var firstAndPike = {

  storeHours: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyCookieSales: [],
  hourlyMinCustomer: 23,
  hourlyMaxCustomer: 65,
  avergHourlyCookieSales: 6.3,
  storeName: '1st and Pike',

  forcastRandomCustomerPerHour: function() {
    return Math.ceil(Math.random() * (this.hourlyMaxCustomer / this.hourlyMinCustomer));
  },

  hourlyStoreSales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.hourlyCookieSales.push(Math.ceil(Math.random()*(this.avergHourlyCookieSales * this.forcastRandomCustomerPerHour())))[i];
    }
  },
};

var getStoreHours = firstAndPike.storeHours;
var generateSalesData = firstAndPike.hourlyStoreSales();
var getHourlycookieSales = firstAndPike.hourlyCookieSales;

var StoreName = document.getElementById('StoreName');
StoreName.textContent = firstAndPike.storeName;

var storeHours = document.getElementById('CookieHourlySales');

var storeHoursLi;
for (var i = 0; i < getStoreHours.length; i++ ){

  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = getStoreHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Second Location Object

var SeaTacAirport = {

  storeHours: ['6am', '7am','8am','19am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyCookieSales: [],
  hourlyMinCustomer: 3,
  hourlyMaxCustomer: 24,
  avergHourlyCookieSales:1.2,
  storeName: 'SeaTac Airport ',

  forcastRandomCustomerPerHour: function() {
    return Math.ceil(Math.random() * (this.hourlyMaxCustomer / this.hourlyMinCustomer));
  },

  hourlyStoreSales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.hourlyCookieSales.push(Math.ceil(Math.random()*(this.avergHourlyCookieSales * this.forcastRandomCustomerPerHour())))[i];
      // console.log(this.hourlyCookieSales);
    }
  },
};

getStoreHours = SeaTacAirport.storeHours;
generateSalesData = SeaTacAirport.hourlyStoreSales();
getHourlycookieSales = SeaTacAirport.hourlyCookieSales;
StoreName = document.getElementById('StoreNameTwo');
StoreName.textContent = SeaTacAirport.storeName;
storeHours = document.getElementById('CookieHourlySalesSecondStore');

storeHoursLi;
for (i = 0; i < getStoreHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = getStoreHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Third Location

var SeattleCenter = {

  storeHours: ['6am', '7am','8am','19am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyCookieSales: [],
  hourlyMinCustomer: 11,
  hourlyMaxCustomer: 38,
  avergHourlyCookieSales:3.7,
  storeName: 'Seattle Center',

  forcastRandomCustomerPerHour: function() {
    return Math.ceil(Math.random() * (this.hourlyMaxCustomer / this.hourlyMinCustomer));
  },

  hourlyStoreSales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.hourlyCookieSales.push(Math.ceil(Math.random()*(this.avergHourlyCookieSales * this.forcastRandomCustomerPerHour())))[i];
    }
  },
};

getStoreHours = SeattleCenter.storeHours;
generateSalesData = SeattleCenter.hourlyStoreSales();
getHourlycookieSales = SeattleCenter.hourlyCookieSales;

StoreName = document.getElementById('StoreNameThree');
StoreName.textContent = SeattleCenter.storeName;

storeHours = document.getElementById('CookieHourlySalesThirdStore');

for ( i = 0; i < getStoreHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = getStoreHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Fourth STore
var CapitolHill = {
  storeHours: ['6am', '7am','8am','19am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyCookieSales: [],
  hourlyMinCustomer: 20,
  hourlyMaxCustomer: 38,
  avergHourlyCookieSales:2.3,
  storeName: 'Capitol Hill',

  forcastRandomCustomerPerHour: function() {
    return Math.ceil(Math.random() * (this.hourlyMaxCustomer / this.hourlyMinCustomer));
  },

  hourlyStoreSales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.hourlyCookieSales.push(Math.ceil(Math.random()*(this.avergHourlyCookieSales * this.forcastRandomCustomerPerHour())))[i];
    }
  },
};

getStoreHours = CapitolHill.storeHours;
generateSalesData = CapitolHill.hourlyStoreSales();
getHourlycookieSales = CapitolHill.hourlyCookieSales;

StoreName = document.getElementById('StoreNameFourth');
StoreName.textContent = CapitolHill.storeName;

storeHours = document.getElementById('CookieHourlySalesFourthStore');


for( i = 0; i < getStoreHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = getStoreHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Fifth Location
var Alki = {
  storeHours: ['6am', '7am','8am','19am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyCookieSales: [],
  hourlyMinCustomer: 2,
  hourlyMaxCustomer: 16,
  avergHourlyCookieSales:4.6,
  storeName: 'Alki',

  forcastRandomCustomerPerHour: function() {
    return Math.ceil(Math.random() * (this.hourlyMaxCustomer / this.hourlyMinCustomer));
  },

  hourlyStoreSales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.hourlyCookieSales.push(Math.ceil(Math.random()*(this.avergHourlyCookieSales * this.forcastRandomCustomerPerHour())))[i];
    }
  },
};

getStoreHours = Alki.storeHours;
generateSalesData = Alki.hourlyStoreSales();
getHourlycookieSales = Alki.hourlyCookieSales;

StoreName = document.getElementById('StoreNameFifth');
StoreName.textContent = Alki.storeName;

storeHours = document.getElementById('CookieHourlySalesFifthStore');


for (i = 0; i < getStoreHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = getStoreHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}
