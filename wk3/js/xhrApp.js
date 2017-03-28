
(function(){
// VARIABLES
  // URL, Keys, HTTPRequest *********************************
  var appID = "c8a521d9094a4c22a1c75a4f65c793b6";
  var requestUrl = "https://openexchangerates.org/api/latest.json?app_id=" + appID;
  var httpRequest;

// CALL
  makeRequest();

// MAKE REQUEST function *********************************
  // New XMLHttpRequest instance *********************************
  // Assign Response Listener Method *********************************
  // Open()
  // Send()
  function makeRequest(){
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open("GET", requestUrl);
    httpRequest.send();
  }

// READYSTATECHANGE LISTENER / METHOD
    // If then for readystatechange === 4
        // If state === 200 => updateUiSuccess(httpRequest.responseText);
        // else => updateUiFailure()

  function responseMethod(){
    if(httpRequest.readyState === 4){
      if(httpRequest.status === 200){
        // Success function
        var currencydata = httpRequest.responseText;
        currencyConvertSucess(currencydata);
        console.log("Success! Data is being sent to the handler functions!");
        console.log(currencydata);

      } else{
        // Error function
        currencyConvertFailure();
      }
    }
    console.log("readystate = " + httpRequest.readyState);
  }
// HANDLER FUNCTIONS
    // IE. updateUiSuccess(responseText){Do Something};
    // IE. updateUiFailure(){Do something};
  function currencyConvertSucess(currencydata){
    $('#amountForm').submit(function(submitEvent){
      // What does preventDefault do?
      submitEvent.preventDefault();
      // Set variables from form values and selected currency
      var amount = $('#amount').val();
      var currency = $('#currency').val();
      // Pass values as parameters to the conversion function
      dollarsTo(amount, currency);
    });

    function dollarsTo(amount, currency){
      var response = JSON.parse(currencydata);
      var convertedValue = "";

      switch(currency){
        case "British Pound":
        convertedValue = amount * response.rates.GBP;
        break;
        case "Japanese Yen":
        convertedValue = amount * response.rates.JPY;
        break;
        case "Chinese Yuan":
        convertedValue = amount * response.rates.CNY;
        break;
      }
      $('#convertedList').append('<li class="list-group-item">' + amount + ' US Dollars equals ' + convertedValue + ' ' + currency + '</li>');
      console.log(convertedValue);
    }

  }
  function currencyConvertFailure(){
    console.log("There was an error.");
  }

})();

/********************** Personal NOTES ***************************/
// Don't forget to create a JSON parsed object in the function where the data will be used.
// Place console.log messages for the STATUS ( Not STATE ) to ensure it gets to 4
//
