let checkBox = document.getElementById('checkbox')
let text = document.getElementById('text')

checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
        text.style.display = 'block'
    } else {
        text.style.display = 'none'
    }
})