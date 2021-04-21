let range = document.getElementById('range')
let value = document.getElementById('value')

range.addEventListener('input', () => {
    value.innerHTML = range.value
})

value.innerHTML = range.value