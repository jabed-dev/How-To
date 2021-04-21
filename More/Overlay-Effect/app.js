let overlay = document.getElementById('overlay')
let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    overlay.style.display = 'block'
})

overlay.addEventListener('click', () => {
    overlay.style.display = 'none'
})