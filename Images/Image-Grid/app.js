let column = document.getElementsByClassName('column')
let active = document.getElementsByClassName('active')[0]

function responsive(event, size) {
    for (let i = 0; i < column.length; i++) {
        column[i].style.flex = `${size}%`
    }

    // Add active class to the current button (highlight is)
    active.classList.remove('active')
    event.target.classList.add('active')
    active = event.target
}
