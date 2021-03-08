// When the user scrolls down 20px from the top of the document, slide down the navbar

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById('navbar').style.top = '0'
    } else {
        document.getElementById('navbar').style.top = '-50px'
    }
}