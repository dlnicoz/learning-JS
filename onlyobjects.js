// const person = {
//     name1: "dheeraj",
//     age: 19,
//     get lam() { return `${this.name1} age is ${this.age}` },
//     set laa1(ag) { this.age = ag },
//     fullname() {
//         return `${this.name1} age is ${this.age}`
//     },
// }
// let txt = '';
// // for (const i in person.numbers) {
// //     txt += "<h1>" + person.numbers[i].cars + "</h1>" + "";
// //     for (let j in person.numbers[i].models) {
// //         txt += person.numbers[i].models[j] + "<br>";
// //     }
// // }
// // person.fullname.toString();
// // const a = JSON.;
// for (const key in person) {
//     txt += person[key] + "<br>"
// }        
// person.laa1 = 32;
// document.getElementById('h1').innerHTML = person.age;
// // console.log(a);
const Mac = { order: 0 };
Object.defineProperty(Mac, "reset", {
    get: function () { this.order = 0 }
});
Object.defineProperty(Mac, "pls", {
    get: function () { this.order++ }
});
Object.defineProperty(Mac, "sub", {
    get: function () { this.order-- }
});
Object.defineProperty(Mac, "mins", {
    set: function (value) { this.order -= value }
});
Object.defineProperty(Mac, "add", {
    set: function (value) { this.order += value }
});
console.log(Mac.order);
Mac.add = 7;
console.log(Mac.order);
Mac.mins = 4;
console.log(Mac.order);
Mac.pls;
console.log(Mac.order);
Mac.sub;
console.log(Mac.order);
Mac.reset;
console.log(Mac.order);

// const obj = { counter: 0 };
// // Define setters
// Object.defineProperty(obj, "reset", {
//     get: function () { this.counter = 0; }
// });
// Object.defineProperty(obj, "increment", {
//     get: function () { this.counter++; }
// });
// Object.defineProperty(obj, "decrement", {
//     get: function () { this.counter--; }
// });
// Object.defineProperty(obj, "add", {
//     set: function (value) { this.counter += value; }
// });
// Object.defineProperty(obj, "subtract", {
//     set: function (value) { this.counter -= value; }
// });

// // Play with the counter:
// obj.reset;
// console.log(obj.counter);
// obj.add = 5;
// console.log(obj.counter);
// obj.subtract = 1;
// console.log(obj.counter);
// obj.increment;
// console.log(obj.counter);
// obj.decrement;
// console.log(obj.counter);














// // delete person.age
// // person.height = 6.2
// // console.log(person);
// // console.log(person.numbers.b);
// // // console.log(person.fname());
// // let txt = '';
// // for (let x in person) {
// //     txt += person[x] + ' ';
// // }
// // document.getElementById('h1').innerHTML = txt;
// // const person = {
// //     fname: "John",
// //     lname: "Doe",
// //     age: 25
// // };

// // let txt = "";
// // for (let x in person) {
// //     txt += person[x] + " ";
// // }

// // document.getElementById("h1").innerHTML = txt;