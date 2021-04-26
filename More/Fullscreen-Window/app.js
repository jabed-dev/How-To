let video = document.getElementById('video')
let element = document.getElementById('element')
let videoFullscreenBtn = document.getElementById('video-fullscreen-btn')
let elementFullscreenBtn = document.getElementById('element-fullscreen-btn')

videoFullscreenBtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen()
        // document.exitFullscreen()
    }
})

elementFullscreenBtn.addEventListener('click', () => {
    if (document.fullscreen) {
        document.exitFullscreen()
        elementFullscreenBtn.innerHTML = 'Open Elements Fullscreen mode'
        element.style.padding = '0'
    } else {
        element.requestFullscreen()
        elementFullscreenBtn.innerHTML = 'Exit Elements Fullscreen mode'
        element.style.padding = '10px'
    }
})

