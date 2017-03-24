for (var i = 99; i > 0; i--){
    // Vars
    var singular = "bottle", plural = "bottles";
    var pluralBottles = `${i} ${plural} of beer on the wall, ${i} ${plural} of beer. Take one down and pass it around, ${i-1} ${plural} of beer on the wall.`;
    var singularBottle = `${i} ${singular} of beer on the wall, ${i} ${singular} of beer. Take one down and pass it around, ${i-1} ${plural} of beer on the wall.`;
    
    // Filter out 1
    var bottles = (i <= 1) ? singularBottle : pluralBottles;
    console.log(bottles);
}

// Time 8:46 sec