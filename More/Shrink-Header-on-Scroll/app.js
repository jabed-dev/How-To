let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.fontSize = '40px'
    } else {
        header.style.fontSize = '90px'
    }
})