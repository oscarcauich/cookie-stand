'use strict';
 console.log('test');
//Select the HTML element we will be modifing
var displayResult = document.getElementById('tableResults');

var addNewStore = document.getElementById('newStoreAdd');

addNewStore.addEventListener('submit', createNewStore);

function createNewStore(event) {
  event.preventDefault();

  var getTarget = event.target;
//get Values from form
  var newStoreNameAdd = getTarget.newStoreNameAdd.value;
  var newStoreMinCustomer = getTarget.newStoreMinCustomer.value;
  var newStoreMaxCustomer = getTarget.newStoreMaxCustomer.value;
  var newStoreAverCustomer = getTarget.newStoreAverCustomer.value;

  getTarget.newStoreNameAdd.value = '';
  getTarget.newStoreMinCustomer.value = '';
  getTarget.newStoreMaxCustomer.value = '';
  getTarget.newStoreAverCustomer.value = '';


  if(newStoreNameAdd){
    var addNewStoreName= new StoreLocations(newStoreNameAdd, newStoreMinCustomer, newStoreMaxCustomer, newStoreAverCustomer);
    addNewStoreName.genHourNumberCookie();
    addNewStoreName.createtableRows();

    console.log(newStoreNameAdd, newStoreMinCustomer, newStoreMaxCustomer,newStoreAverCustomer);
  } else {
    alert('All Input fields are Required');
  }
}

//Create our Object template
function StoreLocations (storeName,hourlyMinCustomer,hourlyMaxCustomer,avegCookies) {
  this.storeName = storeName;
  this.hourlyMinCustomer = hourlyMinCustomer;
  this.hourlyMaxCustomer = hourlyMaxCustomer;
  this.avegCookies = avegCookies;
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
  for(var i = 0; i < this.storeHours.length; i++){
    this.hourlyCookieSales.push(this.genCookieSales());
  }
};

//function to create table rows for each store cookie sales per hour
StoreLocations.prototype.createtableRows = function() {

  var rowHours, rowHourDisplay, rowStoreName;
  rowHours = document.createElement('tr');
  rowStoreName = document.createElement('td');
  rowHours.appendChild(rowStoreName);

  rowStoreName.textContent = this.storeName;

  for(var i = 0; i < this.storeHours.length; i++){
    rowHourDisplay = document.createElement('td');
    rowHourDisplay.textContent = this.hourlyCookieSales[i];
    rowHours.appendChild(rowHourDisplay);
  }
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
