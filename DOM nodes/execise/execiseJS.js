let list = document.querySelectorAll('li')

for(let i of list){
    let p = document.createElement('p')
    p.textContent = i.firstChild.data

    document.body.append(p)
}