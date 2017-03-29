// Get entered value and set to var amount
  // IIFE
$(function(){
  $('#amountForm').submit(function(submitEvent){
    // What does preventDefault do?
    submitEvent.preventDefault();
    // Set variables from form values and selected currency
    var amount = $('#amount').val();
    var currency = $('#currency').val();
    // Pass values as parameters to the conversion function
    dollarsTo(amount, currency);
  });
});

// Conversion function
function dollarsTo(amount, currency){
  var convertedValue = "";
  switch(currency){
    case "British Pound":
    convertedValue = amount * 0.8;
    break;
    case "Japanese Yen":
    convertedValue = amount * 111.1;
    break;
    case "Chinese Yuan":
    convertedValue = amount * 6.88;
    break;
  }
  // Test to see if converted value is int, if not round to two decimal places.
  convertedValue = (Number.isInteger(convertedValue) === true) ? (convertedValue) : convertedValue.toFixed(2);

  // Append converted value to list
  $('#convertedList').append('<li class="list-group-item">' + amount + ' US Dollars equals ' + convertedValue + ' ' + currency + '</li>');
  console.log(convertedValue);
}


/********************** Personal NOTES ***************************/
// JS vs. jQuery get value
  // Initial => var firstValue = document.getElemendById("amount");
  // Updated => $('#amount').val();

// Time 1:13
