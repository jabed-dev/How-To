function openPage(pageName, elmnt, color) {
    let tabcontent = document.getElementsByClassName('tabcontent')
    let tablinks = document.getElementsByClassName('tablink')

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
        tablinks[i].style.backgroundColor = ''
    }

    document.getElementById(pageName).style.display = 'block'
    elmnt.style.backgroundColor = color
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();