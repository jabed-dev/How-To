function openCity(evt, cityName) {
    let tabcontent = document.getElementsByClassName('tabcontent')
    let tablinks = document.getElementsByClassName('tablinks')

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
        tablinks[i].classList.remove('active')
    }

    document.getElementById(cityName).style.display = 'block'
    evt.target.classList.add('active')
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click()