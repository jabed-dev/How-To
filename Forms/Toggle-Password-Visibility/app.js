let password = document.getElementById('password')
let showPassword = document.getElementById('show-password')

showPassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
})