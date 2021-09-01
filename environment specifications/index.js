let windowHeigth = window.innerHeight;
let windowWidth = window.innerWidth;
let navigator = window.navigator.userAgent
let platform = window.navigator.platform;
let link = window.location.href;

let arr2 = [];

arr2.push(windowHeigth);
arr2.push(windowWidth);
arr2.push(navigator);
arr2.push(platform);
arr2.push(link);

console.log(arr2);
