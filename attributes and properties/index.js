let elem = document.getElementById('myId')

let textId = document.createElement('p')
textId.textContent = elem.id
document.body.append(textId)

document.body.myElem = {
    name: 'Cesar',
    title: 'Imperator'
}

console.log(document.body.myElem.title);

document.body.sayTagName = function(){
    console.log(this.tagName);
}

document.body.sayTagName()


let user = {
    name:'Shasha',
    age: 65,
    weight: 90
}

for(let div of document.querySelectorAll('[show-info]')){
    let field = div.getAttribute('show-info')
    div.innerHTML = user[field]
}
alert(document.body.dataset.about);

  // чтение
  alert(order.dataset.orderState); // new

  // изменение
  order.dataset.orderState = "pending"; // (*)