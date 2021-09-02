let chatDiv = document.querySelector('.chat')
let outer = document.querySelector('.outer')
let myData = document.querySelector('.myData')

chatDiv.innerHTML += "<div>Добавим ещё один привет <img src='./smile.png' width='20px'/>!</div>";
chatDiv.innerHTML += "Как у вас дела?";
chatDiv.innerHTML += "<div>Нужно добавлять элементы с осторожностью</div>";
chatDiv.innerHTML += "<div>Нужно добавлять элементы с осторожностью</div>";
chatDiv.innerHTML += "<div>Нужно добавлять элементы с осторожностью</div>";
chatDiv.innerHTML += "<div>Нужно добавлять элементы с осторожностью</div>";

outer.outerHTML = '<div>Outer from JavaScript</div>'


console.log(myData.nodeValue);

