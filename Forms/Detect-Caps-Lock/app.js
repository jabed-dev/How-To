let input = document.getElementById('input')
let text = document.getElementById('text')

input.addEventListener('keyup', (event) => {
    if (event.getModifierState('CapsLock')) {
        text.style.display = 'block'
    } else {
        text.style.display = 'none'
    }
})