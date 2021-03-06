'use strict';

//Select the HTML elements we will be modifing
var displayResult = document.getElementById('tableResults');
var addNewStore = document.getElementById('newStoreAdd');

//Add an Event Lisnter
addNewStore.addEventListener('submit', createNewStore);

//Create the listner handler function
function createNewStore(event) {
  event.preventDefault();
  var getTarget = event.target;

//get Values from form inputs
  var newStoreNameAdd = getTarget.newStoreNameAdd.value;
  var newStoreMinCustomer = getTarget.newStoreMinCustomer.value;
  var newStoreMaxCustomer = getTarget.newStoreMaxCustomer.value;
  var newStoreAverCustomer = getTarget.newStoreAverCustomer.value;

  var addNewStoreName= new StoreLocations(newStoreNameAdd, newStoreMinCustomer, newStoreMaxCustomer, newStoreAverCustomer);
  addNewStoreName.genHourNumberCookie();
  addNewStoreName.createtableRows();

  getTarget.reset();

}

//Create our Object template
function StoreLocations (storeName,hourlyMinCustomer,hourlyMaxCustomer,avegCookies) {
  this.storeName = storeName;
  this.hourlyMinCustomer = hourlyMinCustomer;
  this.hourlyMaxCustomer = hourlyMaxCustomer;
  this.avegCookies = avegCookies;
  this.hourlyCookieSales = [];
  this.totalNumberCookies = 0;
  this.storeHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
}

//Create first Object Method for StoreLocations, this generates a random number of customers
StoreLocations.prototype.forcastRandomCustomerPerHour = function(){
  return Math.ceil(Math.random() * (this.hourlyMaxCustomer - this.hourlyMinCustomer +1) + this.hourlyMinCustomer);
};

//create second Object Method to calculate number of cookies sold
StoreLocations.prototype.genCookieSales = function() {
  var test = Math.ceil(Math.random()*(this.avegCookies * this.forcastRandomCustomerPerHour()));
  return test;
};

//function to generate number of cookies per hour and store them into an array
StoreLocations.prototype.genHourNumberCookie = function(){
  for(var i = 0; i < this.storeHours.length; i++){
    var generatedNumberOfCookies = this.genCookieSales();
    this.hourlyCookieSales.push(generatedNumberOfCookies);
    this.totalNumberCookies += generatedNumberOfCookies;
  }
};

//function to create table rows for each store cookie sales per hour
StoreLocations.prototype.createtableRows = function() {

  var rowHours, rowHourDisplay, rowStoreName, rowTotals;
  rowHours = document.createElement('tr');
  rowStoreName = document.createElement('td');
  rowStoreName.className = 'bold-txt';
  rowHours.appendChild(rowStoreName);

  rowStoreName.textContent = this.storeName;

  for(var i = 0; i < this.storeHours.length; i++){
    rowHourDisplay = document.createElement('td');
    rowHourDisplay.textContent = this.hourlyCookieSales[i];
    rowHours.appendChild(rowHourDisplay);
  }

  rowTotals = document.createElement('td');
  rowTotals.textContent = this.totalNumberCookies;
  rowTotals.className = 'bold-txt';
  rowHours.appendChild(rowTotals);
  displayResult.appendChild(rowHours);
};

StoreLocations.prototype.createTableHeading = function() {
  var tableHeadingRow = document.createElement('tr');
  var tableHeading = document.createElement('th');
  tableHeading.textContent = 'Store Name';
  tableHeadingRow.appendChild(tableHeading);

  for(var i = 0; i < this.storeHours.length; i++){
    var rowHourDisplay = document.createElement('th');
    rowHourDisplay.textContent = this.storeHours[i];
    tableHeadingRow.appendChild(rowHourDisplay);
    displayResult.appendChild(tableHeadingRow);
  }
  var tableHeadingTotals = document.createElement('th');
  tableHeadingTotals.textContent = 'Totals: ';
  tableHeadingRow.appendChild(tableHeadingTotals);
};

//First Store
var firstAndPike = new StoreLocations('1st and Pike', 12, 13, 3.4);
firstAndPike.genHourNumberCookie();
firstAndPike.createTableHeading();
firstAndPike.createtableRows();

//Second Store
var seaTacAirport = new StoreLocations('SeaTacAirport', 3, 24, 1.2);
seaTacAirport.genHourNumberCookie();
seaTacAirport.createtableRows();

//Third Store
var seattleCenter = new StoreLocations('Seattle Center', 11, 38, 3.7);
seattleCenter.genHourNumberCookie();
seattleCenter.createtableRows();

//Fourth Store
var capitolHill = new StoreLocations('Capitol Hill', 20, 38, 2.3);
capitolHill.genHourNumberCookie();
capitolHill.createtableRows();

//Fifth Store
var Alki = new StoreLocations('Alki', 2, 16, 4.6);
Alki.genHourNumberCookie();
Alki.createtableRows();
