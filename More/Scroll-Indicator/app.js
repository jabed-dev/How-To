let progressBar = document.getElementById('progress-bar')

window.addEventListener('scroll', () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrollend = (winScroll / height) * 100
    progressBar.style.width = scrollend + '%'
})
