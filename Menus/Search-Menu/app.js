function searchBox() {
    let input, filter, menu, li, a
    input = document.getElementById('search')
    value = input.value.toUpperCase()
    menu = document.getElementById('menu')
    li = menu.getElementsByTagName('li')

    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0]
        if (a.innerHTML.toUpperCase().indexOf(value) > -1) {
            li[i].style.display = ''
        } else {
            li[i].style.display = 'none'
        }
    }
}

