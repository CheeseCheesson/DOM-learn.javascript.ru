let main = document.querySelector(".main");

let windowHeigth = window.innerHeight;
let windowWidth = window.innerWidth;
let navigator = window.navigator.userAgent;
let platform = window.navigator.platform;
let link = window.location.href;

let arr2 = [];

arr2.push(windowHeigth);
arr2.push(windowWidth);
arr2.push(navigator);
arr2.push(platform);
arr2.push(link);

console.log(arr2);
let childNodes = [];
for (let i = 0; i < document.body.childNodes.length; i++) {
  childNodes.push(document.body.childNodes[i]);
}

for (let key of childNodes) {
  let p = document.createElement("p");
  p.textContent = key;
  main.append(p);
}

console.log(childNodes);
let trueArray = Array.from(childNodes);

console.log(trueArray);


let table = document.body.children[0].children[1].children[1].firstElementChild

for(let i = 0; i < table.rows.length; i++){
    table.rows[i].cells[i].style.background ='blue'
    table.rows[i].cells[i].style.color ='white'
}