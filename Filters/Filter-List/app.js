let input = document.getElementById('input')
let list = document.getElementById('list').getElementsByTagName('li')

input.addEventListener('keyup', () => {
    let a, name, value = input.value.toUpperCase()
    for (let i = 0; i < list.length; i++) {
        a = list[i].getElementsByTagName('a')[0]
        name = a.innerText
        if (name.toUpperCase().indexOf(value) > -1) {
            list[i].style.display = 'block'
        } else {
            list[i].style.display = 'none'
        }
    }
})