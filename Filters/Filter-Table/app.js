let input = document.getElementById('input')
let tr = document.getElementById('table').getElementsByTagName('tr')

input.addEventListener('keyup', () => {
    let td, name, value = input.value.toUpperCase()
    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0]
        if (td) {
            name = td.innerText
            if (name.toUpperCase().indexOf(value) > -1) {
                tr[i].style.display = ''
            } else {
                tr[i].style.display = 'none'
            }
        }
    }
})