console.log('lets learn set and map');
// const letset = new Set([12, 23, 4234, 532, "efa"]);
// let k = "";
// // let k1 = "sadf";
// // letset.add(k1);
// // for (const iterator of letset) {
// // k += iterator + "<br>";
// // };
// // document.getElementById('h1').innerHTML = k;
// // console.log(typeof(letset));

// const mapp = new Set([23, 34, 'fa', 874, 45, "dsd", 334, 434, 23]);
// mapp.add(34);
let txt = '';
// // mapp.forEach(function (value) { txt += value + "<br>" })
// console.log(mapp);
// const itera = mapp.values();
// for (const x of itera) {
//     txt += x + '<br>'
// }
const mapp = new Map([['weew', 3223], ['fja', 32], ['fjla', 232]]);
mapp.set("afae", 3211);
mapp.set("afae23", 3241);
// mapp.forEach(function ($12, key) { txt += key + "=" + $12 + "<br>" })
for (const iterator of mapp.entries()) {
    txt += iterator + "<br>"
}
document.getElementById('h1').innerHTML = txt;





// console.log('now map');
// const myMap = new Map();
// const k1 = 'this is string', k2 = [], k3 = function w() {  };
// myMap.set(k1, `JASFLHOSDO ${letset}`);
// myMap.set(k2, 223123);
// myMap.set('k423', 223123);
// myMap.set(k3, 'this is k3');
// console.log(myMap);
// // let map = new Map();
// // console.log(map);

// let val;
// val = myMap.get('k423');
// console.log(val);


