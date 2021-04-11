let tab = document.getElementsByClassName('tab')
let prevBtn = document.getElementById('prevBtn')
let nextBtn = document.getElementById('nextBtn')
let regForm = document.getElementById('regForm')
let step = document.getElementsByClassName('step')

let currentTab = 0
showTab(currentTab) // Display the current tab

function showTab(n) {
    tab[n].style.display = 'block'
    if (n === 0) {
        prevBtn.style.display = 'none'
    } else {
        prevBtn.style.display = 'inline'
    }
    if (n === tab.length - 1) {
        nextBtn.innerHTML = 'Submit'
    } else {
        nextBtn.innerHTML = 'Next'
    }

    for (let i = 0; i < step.length; i++) {
        step[i].classList.remove('active')
    }
    step[n].classList.add('active')
}

function nextPrev(n) {
    if (n === 1 && !validateForm()) return
    tab[currentTab].style.display = 'none'
    currentTab = currentTab + n
    if (currentTab >= tab.length) {
        regForm.submit()
        return
    }
    showTab(currentTab)
}

function validateForm() {
    let valid = true
    let input = tab[currentTab].getElementsByTagName('input')
    for (let i = 0; i < input.length; i++) {
        if (input[i].value === '') {
            input[i].classList.add('invalid')
            valid = false
        }
    }

    if (valid) {
        step[currentTab].classList.add('finish')
    }
    return valid
}
