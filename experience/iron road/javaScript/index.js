let links = document.querySelectorAll('a')

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
    })
})