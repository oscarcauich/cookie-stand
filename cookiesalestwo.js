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


var firstAndPike = new StoreLocations('1st and Pike', 12, 13, 3.4);
firstAndPike.genHourNumberCookie();
var generateHeadingRow = firstAndPike.createTableHeading();
var generateTableBox = firstAndPike.createTable();
displayResult.appendChild(generateHeadingRow);
displayResult.appendChild(generateTableBox);

// var displayResult = document.getElementById('tableResults');
var firstAndPike = new StoreLocations('1st', 12, 13, 3.4);
firstAndPike.genHourNumberCookie();
var generateTableBox = firstAndPike.createTable();
displayResult.appendChild(generateTableBox);
console.log(firstAndPike.hourlyCookieSales);

// var displayResult = document.getElementById('tableResults');


var firstAndPike = new StoreLocations('1st', 12, 13, 3.4);
firstAndPike.genHourNumberCookie();
var generateTableBox = firstAndPike.createTable();
displayResult.appendChild(generateTableBox);
console.log(firstAndPike.hourlyCookieSales);


// var displayResult = document.getElementById('tableResults');
var firstAndPike = new StoreLocations('1st', 12, 13, 3.4);
firstAndPike.genHourNumberCookie();
var generateTableBox = firstAndPike.createTable();
displayResult.appendChild(generateTableBox);
console.log(firstAndPike.hourlyCookieSales);
