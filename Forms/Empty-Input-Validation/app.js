function validateForm() {
    let name = document.querySelector('input[type=text]')
    let password = document.querySelector('input[type=password]')
    if (name.value === '') {
        alert('Name must be filled')
    }
    if (password.value === '') {
        alert('Password must be filled')
    }
}