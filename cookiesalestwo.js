'use strict';

//Create our Object template
function StoreLocations (storeName,hourlyMinCustomer,hourlyMaxCustomer,avegCookies) {
  this.storeName = storeName;
  this.hourlyMinCustomer = hourlyMinCustomer;
  this.hourlyMaxCustomer = hourlyMaxCustomer;
  this.avegCookies = avegCookies;
  this.hourlySales = [];
  this.hourlyCookieSales = [];
  this.storeHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
}

//Create first Object Method for StoreLocations, this generates a random number of customers
StoreLocations.prototype.forcastRandomCustomerPerHour = function(){
  return Math.ceil(Math.random() * (this.hourlyMaxCustomer - this.hourlyMinCustomer +1) + this.hourlyMinCustomer);
};

//create second Object Method to calculate number of cookies sold
StoreLocations.prototype.genCookieSales = function() {
  return Math.ceil(Math.random()*(this.avegCookies * this.forcastRandomCustomerPerHour()));
};

//function to generate number of cookies per hour and store them into an array
StoreLocations.prototype.genHourNumberCookie = function(){
  var hourlyCookieSales = [];
  var cookieHourlySales;
  var i;
  for(i = 0; i < this.storeHours.length; i++){
    cookieHourlySales = this.genCookieSales();
    hourlyCookieSales.push(cookieHourlySales);
    // console.log(cookieHourlySales);
  }
  console.log(hourlyCookieSales);
};

//Create function to create a table for us
StoreLocations.prototype.createTable = function() {
  console.log(this.storeName);

  var tableBox = document.createElement('table');
  var tableBoxRow = document.createElement('tr');
  var tableBoxHeading = document.createElement('td');

  tableBoxHeading.textContent = this.storeName;
  tableBoxRow.appendChild(tableBoxHeading);
  tableBox.appendChild(tableBoxRow);
  // var storeName, storeHours, numberOfCookies;

  return tableBox;
};

var displayResult = document.getElementById('body');
var firstAndPike = new StoreLocations('test2', 12, 13, 3.4);
firstAndPike.genHourNumberCookie();
var generateTableBox = firstAndPike.createTable();
displayResult.appendChild(generateTableBox);
console.log(firstAndPike.stor);
