let video = document.getElementById('video')
let playBtn = document.getElementById('playbtn')

playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play()
        playBtn.innerHTML = 'Pause'
    } else {
        video.pause()
        playBtn.innerHTML = 'Play'
    }
})