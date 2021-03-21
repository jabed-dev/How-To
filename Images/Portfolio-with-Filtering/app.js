filterSelection('all')

function filterSelection(c) {
    let element = document.getElementsByClassName('column')
    if (c === 'all') c = ''
    for (let i = 0; i < element.length; i++) {
        if (element[i].className.indexOf(c) > -1) {
            element[i].classList.add('show')
        } else {
            element[i].classList.remove('show')
        }
    }
}

// Add active class to the current button (highlight it)
let btns = document.getElementsByClassName('btn')
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        document.getElementsByClassName('active')[0].classList.remove('active')
        this.classList.add('active')
    })
}