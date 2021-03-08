function openNav(icon) {
    let navbar = document.getElementById('navbar')
    if (navbar.className === 'navbar') {
        icon.innerText = 'X'
        // icon.style.color = '#ff0000'
        icon.style.padding = '15.5px 17.5px'
        navbar.classList.add('responsive')
    } else {
        icon.innerHTML = '&#9776;'
        // icon.style.color = '#f2f2f2'
        icon.style.padding = '14px 16px'
        navbar.classList.remove('responsive')
    }
}