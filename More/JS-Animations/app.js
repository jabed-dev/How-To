let btn = document.getElementById('btn')
let animation = document.getElementById('animation')

let stop = null
btn.addEventListener('click', () => {
    let pos = 0
    clearInterval(stop)
    stop = setInterval(frame, 10)
    function frame() {
        if (pos === 350) {
            clearInterval(stop)
        } else {
            pos++
            animation.style.top = pos + 'px'
            animation.style.left = pos + 'px'
        }
    }
})