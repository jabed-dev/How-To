let btn = document.getElementById('btn')
let writeText = document.getElementById('writeText')

btn.addEventListener('click', typeWriter)

let i = 0, speed = 50
let text = 'Lorem ipsum dummy text blabla. Lorem ipsum dummy text blabla.'
function typeWriter() {
    if (i < text.length) {
        writeText.innerHTML += text.charAt(i)
        i++
        setTimeout(typeWriter, speed)
    }
}
