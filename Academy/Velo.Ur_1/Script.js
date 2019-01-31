// var time = 3;
// var speedOfFirstCyclist = 12;
// var speedOfSecondCyclist = 14;

// var distanceOfFirstCyclist = speedOfFirstCyclist * time;
// var distanceOfSecondCyclist = speedOfSecondCyclist * time;

// var totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;

// console.log(totalDistance);

// var t = 3;
// var sfc = 12;
// var ssc = 14;

// var calculateDistance = function() {
//     var dfc = sfc * t;
//     var dsc = ssc * t;
//     var td = dfc + dsc;
//     return td;
// };

// console.log(calculateDistance() + 22);

var CD = function(t, v1 , v2) {
    var d1 = v1 * t;
    var d2 = v2 * t;
    var x = d1 + d2;
    return x;
};

var f1 = CD(3, 12, 4);
var f2 = CD(5, 10 , 3);

console.log(f1, f2);

