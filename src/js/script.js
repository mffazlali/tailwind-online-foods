const loader = document.querySelector('.loader')
window.addEventListener('load', () => {
    loader.classList.add('hidden')
})

const nav = document.getElementById('nav')
const open = document.getElementById('open')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    nav.classList.add('right-0')
})

close.addEventListener('click', () => {
    nav.classList.remove('right-0')
})

const lightbox = document.querySelector('.lightbox')
const lightboxBody = document.querySelector('.lightbox-body')
const images = document.querySelectorAll('#gallery')

images.forEach((image) => {
    image.addEventListener('click', () => {
        lightbox.classList.add('scale-100')
        const img = document.createElement('img')
        img.classList.add('w-full')
        img.classList.add('h-full')
        img.classList.add('image-cover')
        img.src = image.src
        if (lightboxBody.childElementCount > 0) {
            lightboxBody.removeChild(lightboxBody.children[0])
        }
        lightboxBody.appendChild(img)
    })
})

lightbox.addEventListener('click', (event) => {
    const idName = event.target.getAttribute('id')
    if (idName === 'lightbox') {
        lightbox.classList.remove('scale-100')
    }
})

const year = document.querySelector('.year')
const getYear = new Date().getFullYear()
year.innerHTML = getYear
