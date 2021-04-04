let topBtn = document.getElementById('top-btn')

window.onscroll = function () {
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
        topBtn.style.display = 'block'
    } else {
        topBtn.style.display = 'none'
    }
}

function scrollsTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
