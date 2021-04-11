let password = document.getElementById('password')
let message = document.getElementById('message')
let letter = document.getElementById('letter')
let capital = document.getElementById('capital')
let number = document.getElementById('number')
let length = document.getElementById('length')

password.onfocus = () => { message.style.display = 'block' }
password.onblur = () => { message.style.display = 'none' }

password.addEventListener('keyup', () => {
    // Validate lowercase letters
    let lowerCaseLetters = /[a-z]/g
    passwordValidation(letter, lowerCaseLetters)

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g
    passwordValidation(capital, upperCaseLetters)

    // Validate number
    let numberspattern = /[0-9]/g
    passwordValidation(number, numberspattern)

    // Validate length
    passwordValidation(length, 8)
})

function passwordValidation(name, pattern) {
    let x = password.value.match(pattern)
    if (pattern === 8) x = password.value.length >= 8
    if (x) {
        name.classList.remove('invalid')
        name.classList.add('valid')
    } else {
        name.classList.remove('valid')
        name.classList.add('invalid')
    }
}