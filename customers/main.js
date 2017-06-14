// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

var customersDiv = document.querySelector('.customers');
console.log(customersDiv);

function buildCustomers(customersArray) {

  console.log(customersArray[0].email);
/*
  customersArray[0].name.first;
  customersArray[0].email;
  customersArray[0].location.street;
  customersArray[0].cell;
  customersArray[0].name;
*/

  var customerIndividual = document.createElement('div');

  var customerEmail = document.createElement('div');
  customerEmail.innerHTML = customersArray[0].email;
  customerIndividual.appendChild(customerEmail);

  customersDiv.appendChild(customerIndividual);


var customerIndividual = document.createElement('div');

var customerCell = document.createElement('div');
customerCell.innerHTML = customerArray[0].cell;
customerIndividual.appendChild(customerCell);

customerDiv.appendChild(customerIndividual);



var customerIndividual = document.createElement('div');

var customerName.first = document.createElement('div');
customerName.first.innerHTML = customerArray[0].name.first;
customerIndividual.appendChild(customerName.first);

customerDiv.appemdChild(customerIndividual);


}

(function () {

  'use strict';

  // Your Code Goes Here

  $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function (data) {

      buildCustomers(data.results);

    }
  });


})();
