
window.onscroll = function () {
    let navbar = document.getElementById('navbar')
    if (window.pageYOffset) {
        navbar.style.top = '-50px'
    } else {
        navbar.style.top = '0'
    }
}