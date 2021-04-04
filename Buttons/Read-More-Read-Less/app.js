function readme() {
    let dots = document.getElementById('dots')
    let moreText = document.getElementById('more')
    let readBtn = document.getElementById('read-btn')
    if (dots.style.display === 'none') {
        dots.style.display = 'inline'
        readBtn.innerText = 'Read more'
        moreText.style.display = 'none'
    } else {
        dots.style.display = 'none'
        readBtn.innerText = 'Read less'
        moreText.style.display = 'inline'
    }
}