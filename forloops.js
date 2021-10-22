console.log("lets do loops");
const aple = ['fjalk', 32, 45, 2, 'lewjwf', 324, 54];
console.log(aple);
let k = '';
// aple.fori(value => k += value + "<br>");
// for (let kw of aple) {
// k += kw + "<br>";
// }
// document.getElementById('h1').innerHTML = k;
for (let i = 0; i < 20; i++)    {
    if (i == 12) { continue; }
    k += i + "<br>";
    // break(i == 12);

}
document.getElementById('h1').innerHTML = k;
