let progressBtn = document.getElementById('progress-btn')
let progressBar = document.getElementById('progress-bar')

let width = 10
progressBtn.addEventListener('click', () => {
    let id = setInterval(frame, 10)
    function frame() {
        if (width >= 100) {
            clearInterval(id)
        } else {
            width++
            progressBar.style.width = width + '%'
            progressBar.innerHTML = width + '%'
            progressBar.style.backgroundImage = `linear-gradient(45deg, #4caf50, #97e297 50 %, #4caf50)`
            progressBar.style.backgroundColor = `rgba(0, ${50 + width}, 0)`
        }
    }

})