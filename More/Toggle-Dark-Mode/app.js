// const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)') // dark / light

// if (prefersDarkScheme.matches) {
//     document.body.classList.add('dark-theme')
// } else {
//     document.body.classList.remove('dark-theme')
// }

const btn = document.getElementById('btn')
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

const currentTheme = localStorage.getItem('theme')
if (currentTheme === 'dark') {
    document.body.classList.toggle('dark-theme')
} else if (currentTheme === 'light') {
    document.body.classList.toggle('light-theme')
}

btn.addEventListener('click', function () {
    let theme
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle('light-theme')
        theme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
    } else {
        document.body.classList.toggle('dark-theme')
        theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }
    localStorage.setItem('theme', theme)
})