// console.log('this is callback function');


// function CallFun(na) {
//     console.log('result is ' + na);

// }

// function First(a, b, CallbackFun) {
//     let sum = a * b;
//     // console.log('first function');
//     // return sum;
//     CallbackFun(sum);
// }
// // let re = First(3, 4);
// // CallFun(re);
// First(5, 7, CallFun);

// //lets learn Async its important

// //try set timeout feature
// // setInterval(() => { love("I love You ") }, 11000);
// let txt = '';
// function love(value) { document.getElementById('h1').innerHTML = txt += value }


//lets learn promise
function myDisplay(txt) { document.getElementById('h1').innerHTML = txt };
let myPromise = new Promise(function (myResolve, myIssue) {

    let date1 = new Date();
    let y = date1.getFullYear();
    if (y < 2022) {
        myResolve(`this is ${y} year`);
    } else {
        myIssue('you came from future');
    }
});
myPromise.then(
    function (value) { myDisplay(value); }, //imp ,
    function (error) { myDisplay(error); }
);

// Async and await

