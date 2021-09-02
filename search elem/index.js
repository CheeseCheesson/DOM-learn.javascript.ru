let element = document.getElementById('elem')
element.style.background = 'red'
let windowPElem = document.createElement('p')
windowPElem =  window['elem-content'].innerHTML + ' from JS'
document.body.append(windowPElem)

let chapter = document.querySelector('.chapter'); // LI

alert(chapter.closest('.book')); // UL
alert(chapter.closest('.contents')); // DIV

alert(chapter.closest('h1')); // null (потому что h1 - не предок)