let btn = document.getElementById('btn')
let content = document.getElementById('content')

btn.addEventListener('click', () => {
    if (content.style.display === 'none') {
        content.style.display = 'block'
    } else {
        content.style.display = 'none'
    }
})