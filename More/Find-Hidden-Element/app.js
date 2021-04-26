let btn = document.getElementById('btn')
let content = document.getElementById('content')

btn.addEventListener('click', () => {
    if (window.getComputedStyle(content).display == 'none') {
        content.style.display = 'block'
    }
})