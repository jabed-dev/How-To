window.onscroll = function () {
    let navbar = document.getElementById('navbar')
    let logo = document.getElementById('logo')

    if (document.documentElement.scrollTop > 80) {
        navbar.style.padding = '20px 10px'
        logo.style.fontSize = '25px'
        logo.style.top = '-4px'
    } else {
        navbar.style.padding = '70px 10px'
        logo.style.fontSize = '35px'
        logo.style.top = '-10px'
    }
}