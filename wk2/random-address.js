
function getRandomInt(min, max){
    var min = Math.ceil(min), max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
function generateAddress(){
    var streetNum = [2343, 3533, 3523, 353356, 84847], streetName = ["Jackson Pl", "Janetdale St", "27th St", "Braddock Dr", "Unruth Ave"], city = ["Los Angeles", "Chatsworth", "Da'An", "Covina", "Culver City"], state = ["CA", "FL", "NY", "TN", "AL"], zip = [90098, 20398, 30498, 39200, 10009], randomInt = getRandomInt(0, 4);

    var streetAddress = `${streetNum[randomInt]} ${streetName[randomInt]}, ${city[randomInt]}, ${state[randomInt]}, ${zip[randomInt]}`;
    console.log(streetAddress);
};
generateAddress();

// Jonathan's Solution: Implement array.length as a parameter.
/*
//Create arrays
var bldg = [1234, 1900, 1634, 5432, 6789, 2124, 15657];
var street = ["Ocean Street", "Bay Street", "Vine Street", "Olympic Blvd.", "Main Street"];
var city = ["Los Angeles", "New York", "Santa Monica", "Culver City", "Hollywood"];
var state = ["CA", "NY", "FL", "CO"];
var zip = [90028, 90405, 91405, 12345];

//Define a function to select a random value
function getItem(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

//Build a string
var address = "";
address += getItem(bldg) + " ";
address += getItem(street) + " ";
address += getItem(city) + ", ";
address += getItem(state) + " ";
address += getItem(zip);

//Output the string
console.log(address);
*/


/****************************** TEST Multiple Times *********************************/
//testFuncXTimes(generateAddress, 5);
//testFuncArgsXTimes();

//function testFuncArgsXTimes(callback, args, num){
//    for(i = 0; i < num; i++){
//        var result = callback.apply(this, args);
//        console.log(result);
//    };
//};
//function testFuncXTimes(callback, num){
//    for(i = 0; i < num; i++){
//        var result = callback.apply(this);
//        console.log(result);
//    };
//};

// Time 28 min
