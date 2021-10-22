// // console.log('document object model');
// // let a1 = document.getElementById('h1');
// // a1.innerHTML = 'dheeraj sahani925';
// // // a.onclick = function chan() {
// // //     a.innerText = "this text is changed from chan()";
// // // }
// // // console.log(a);
// // // document.createElement(h4) = 'this is h4';
// // let a = document.getElementsByTagName('h1');
// // a.length;
let x = 0;
// console.log(a);
//hi ddhh
// joker
function myf() {
    x++;
    let v = document.getElementById('pp');
    if (x == 1) {
        v.innerHTML = "hello";
        v.style.backgroundColor = 'red';
    } else if (x == 2) {
        v.style.backgroundColor = 'green';

        v.innerHTML = "hello again";
    } else if (x == 3) {
        v.style.backgroundColor = 'black';

        v.innerHTML = "hello again too";
    } else {
        v.style.display = "none"
    }

}
function clink() {
    let a = document.getElementById('alink')
    a.href = "//codewithharry.com";
    a.style.color = 'green';
    a.setAttribute('class', 'alink')
    return console.log(a);

}
// getElementById is method and innerHTML is property
// let str = 'hi this str speaking';
// let element = document.getElementById('h1').innerHTML = str;


let str = 'python'
let links = document.links;
let txt = '';
Array.from(links).forEach(element => {
    txt = element.href;
    if (txt.includes(str)) {
        console.log(element);
    }

});


const neElement = document.createElement("h2");
const txtNode = document.createTextNode("this is created by javascript");
neElement.appendChild(txtNode);
const ele1 = document.getElementById('alink').parentNode;
ele1.appendChild(neElement);

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("f1");
element.appendChild(para);