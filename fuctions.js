// // console.log('this is function tutorial');




// // let x = "how you doing " + myf(2000, 'af') + " maybe this is your age";
// // // document.getElementById("h1").innerHTML = x;
// // console.log(x);

// // function myf(age, last) {
// //     this.age = age
// //     this.last = last
// //     this.date = new Date()
// //     return this.date.getFullYear() - this.age
// // };
// // const dhee = new myf(23, 'yagami')
// // let dhee1 = myf(2002, "iori")
// // console.log(dhee1);
// // dhee.nation = function () {
// //     return this.age
// // };
// // document.getElementById("h1").innerHTML = dhee.nation();

// // this function expression 
// const x = function (a, ab) { return a - ab };
// console.log(x(10, 13));

// //this is declaration 
// function hela(iss) {
//     return `hela is ${iss} years old.`;
// }

// let a = hela(3);
// (function () {
//     let x = "hello i called myself that amazing";
//     document.getElementById('h1').innerHTML = x;
// })();
// const f = function () { };
// arrow function
// const f = (ab, b) => b * ab;
// let a = f(23, 3);
// console.log(a);


const f = {
    firstname: 'dhheraj',
    lastname: 'tagami',
    fullname: function (a, v) {
        return this.firstname + " " + this.lastname + a + v;
    }
}
const d = {
    firstname: 'seraj',
    lastname: 'tagami'
}
const e = {
    firstname: 'iori',
    lastname: 'yagami'
}
// let a = f.fullname();
// let a = f.fullname.apply(e, [3, 5]);
let a = f.fullname.call(e, 3, 5);
console.log(a);















