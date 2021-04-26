let btn = document.getElementById('btn')
let demo = document.getElementById('demo')

btn.addEventListener('click', () => {
    if (navigator.onLine) {
        demo.className = demo.className.replace('offline', '')
        demo.classList.add('online')
        demo.innerHTML = 'Is the browser online'
    } else {
        demo.className = demo.className.replace('online', '')
        demo.classList.add('offline')
        demo.innerHTML = 'Is the browser offline'
    }
})