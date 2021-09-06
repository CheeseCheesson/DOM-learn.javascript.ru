let button = document.querySelector('#btn')
function hideColor(){
    let href = document.querySelectorAll('a[href*="://"]:not(a[href^="http://internal.com"])')
    href.forEach(item => {
    item.style.color = '#000'
})
}
function showLinks(){
    let href = document.querySelectorAll('a[href*="://"]:not(a[href^="http://internal.com"])')
    href.forEach(item => {
    item.style.color = 'red'
    item.style.fontSize = 24 +'px'
})
    setTimeout(()=>{
        button.hidden = !button.hidden ? true : false
    }, 1000)
    setTimeout(hideColor, 2000)

}
button.addEventListener('click', showLinks)