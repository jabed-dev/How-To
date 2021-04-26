let btn = document.getElementById('btn')
let text = document.getElementById('text')

btn.addEventListener('click', () => {
    if (text.innerHTML === 'Hello World') {
        text.innerHTML = 'Swapped text'
    } else {
        text.innerHTML = 'Hello World'
    }
})