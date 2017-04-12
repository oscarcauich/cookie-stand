'use strict';

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

//Create function to create a table for us
StoreLocations.prototype.createTable = function() {

  var rowHours, rowHourDisplay, rowStoreName;
  rowHours = document.createElement('tr');
  rowStoreName = document.createElement('td');
  rowHours.appendChild(rowStoreName);

  rowStoreName.textContent = this.storeName;

  for(var i = 0; i < this.storeHours.length; i++){
    rowHourDisplay = document.createElement('td');
    rowHourDisplay.textContent = this.hourlyCookieSales[i];
    rowHours.appendChild(rowHourDisplay);
    // console.log(rowHours);
  }

  return rowHours;
};
StoreLocations.prototype.createTableHeading = function() {
  var tableHeadingRow = document.createElement('tr');
  var tableHeading = document.createElement('th');
  // tableHeading.textContent = '';
  tableHeadingRow.appendChild(tableHeading);

  for(var i = 0; i < this.storeHours.length; i++){
    var rowHourDisplay = document.createElement('th');
    rowHourDisplay.textContent = this.storeHours[i];
    tableHeadingRow.appendChild(rowHourDisplay);
  }

  return tableHeadingRow;
};


var displayResult = document.getElementById('tableResults');

//First Store
var firstAndPike = new StoreLocations('1st and Pike', 12, 13, 3.4);
firstAndPike.genHourNumberCookie();
var generateHeadingRow = firstAndPike.createTableHeading();
var generateTableBox = firstAndPike.createTable();
displayResult.appendChild(generateHeadingRow);
displayResult.appendChild(generateTableBox);

//Second Store
var seaTacAirport = new StoreLocations('SeaTacAirport', 3, 24, 1.2);
seaTacAirport.genHourNumberCookie();
generateTableBox = seaTacAirport.createTable();
displayResult.appendChild(generateTableBox);

//Third Store
var seattleCenter = new StoreLocations('Seattle Center', 11, 38, 3.7);
seattleCenter.genHourNumberCookie();
generateTableBox = seattleCenter.createTable();
displayResult.appendChild(generateTableBox);


//Fourth Store
var capitolHill = new StoreLocations('Capitol Hill', 20, 38, 2.3);
capitolHill.genHourNumberCookie();
generateTableBox = capitolHill.createTable();
displayResult.appendChild(generateTableBox);

//Fifth Store
var Alki = new StoreLocations('Alki', 2, 16, 4.6);
Alki.genHourNumberCookie();
generateTableBox = Alki.createTable();
displayResult.appendChild(generateTableBox);
