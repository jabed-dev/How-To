let btn = document.getElementById('btn')
let snackbar = document.getElementById('snackbar')

btn.addEventListener('click', () => {
    snackbar.classList.add('show')
    setTimeout(() => {
        snackbar.classList.remove('show')
    }, 3000)
})