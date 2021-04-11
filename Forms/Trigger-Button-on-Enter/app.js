let input = document.getElementById('input')
let button = document.getElementById('button')

function click() { alert('Hello World!') }

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault()
        click()
    }
})

button.addEventListener('click', click)
