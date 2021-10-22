console.log("hi there.");
let cars = [
    "BM213", 1223, "FERRARI", "FORD"
];
let cars1 = [
    "BMW1", 231, "FERRARI1", "FORD1"
];
// console.log(cars.length)
// console.log(cars);
cars[4] = "Mclaren";
// console.log(cars.shift())
// console.log(cars.push("dheeraj"))
// let a = cars.join(" "); 
// document.getElementById("h1").innerHTML= a;
// console.log(cars);
// cars.toString("rolls");
// cars.unshift("asd");
// cars[0] = "sheeraj";    
// console.log(cars);  
// cars.splice(5)
// console.log(cars1);
// const cars = cars.concat(cars1);
// console.log(cars);
//  const a = cars.shift();
/// console.log(a);
// console.log(cars.shift());
// console.log(cars.length);
// Sorting array 
const num = [21, 0.102, 543, 20, 1152, 523]
console.log(num);
// num.sort();
// num.sort(function (a, b) { return a - b });
// num.sort(function (a, b) { return 0.5 - Math.random() })
// cars.reverse();
function myMax(arr) {
    // return Math.max.apply(null, num);
    // return Math.min.apply(null, num);
    let len = arr.length-1;
    let max = -Infinity;
    // console.log(arr[]);
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

document.getElementById('h1').innerHTML = myMax(num);
console.log(num);