let dropdown = document.getElementById('dropdown')

dropdown.addEventListener('click', function () {
    this.classList.toggle('active')
    let dropdownContent = this.nextElementSibling
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none'
    } else {
        dropdownContent.style.display = 'block'
    }
})


