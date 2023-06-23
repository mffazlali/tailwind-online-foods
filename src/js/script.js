const nav = document.getElementById('nav')
const open = document.getElementById('open')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    nav.classList.add('right-0')
})

close.addEventListener('click', () => {
    nav.classList.remove('right-0')
})
