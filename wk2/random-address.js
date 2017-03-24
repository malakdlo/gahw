
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