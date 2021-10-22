console.log('here objects are inside the array');
const arrobj = [{ name: 'sahani', age: 25 }, { name: 'dheeraj', age: 23 }, { name: 'iori', age: 22 }]
console.log(arrobj);
displayobj();
// arrobj.sort(function (a, b) { return a.age - b.age });
function myf() {

    arrobj.sort(function (a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    displayobj();
}
function displayobj() {

    document.getElementById('h1').innerHTML = arrobj[0].name + " " + arrobj[0].age + "<br>" +
        arrobj[1].name + " " + arrobj[1].age + "<br>" +
        arrobj[2].name + " " + arrobj[2].age + "<br>"
}

console.log(arrobj);

