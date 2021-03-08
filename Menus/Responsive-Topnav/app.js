function menuOpen() {
    let topnav = document.getElementById('topnav')
    if (topnav.className === 'topnav') {
        topnav.classList.add('responsive')
    } else {
        topnav.classList.remove('responsive')
    }
}