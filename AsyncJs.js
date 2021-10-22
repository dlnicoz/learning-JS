console.log('dhehreaj 1 log');

//this is normal JS behaviour
// setTimeout(() => {
//     console.log("dheeraj is stuck in timeout");

// }, 1000);

// console.log('dhehreaj 2 log');
// console.log('dhehreaj 3 log');
// console.log('dhehreaj 4 log'); setTimeout(() => {
//     console.log("dheeraj is stuck in timeout 2");

// }, 200);
// console.log('dhehreaj 5 log');
// console.log('dhehreaj 6 log');
// console.log('dhehreaj 7 log');
// async function ASY(num) {
function myDis(a, b) {
    let txt = `${a} is ${b} years old`;
    window.document.getElementById('h1').innerHTML = txt;
}
function mt(naam, age) {
    let a = naam.toUpperCase();
    // let element = element.childnodes;
    return myDis(a, age)
}

mt('alex', 19);





