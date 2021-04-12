let btnContainer = document.getElementById('btnContainer')
let filterDiv = document.getElementsByClassName('filterDiv')

// defau Active all element
filterSelection('all')

function filterSelection(name) {
    if (name === 'all') name = 'filterDiv'
    for (let i = 0; i < filterDiv.length; i++) {
        if (filterDiv[i].className.indexOf(name) > -1) {
            filterDiv[i].classList.add('show')
        } else {
            filterDiv[i].classList.remove('show')
        }
    }
}

// Add and remove Active class
let btns = btnContainer.getElementsByClassName('btn')
let activeBtn = btnContainer.getElementsByClassName('active')
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        activeBtn[0].classList.remove('active')
        this.classList.add('active')
    })
}
