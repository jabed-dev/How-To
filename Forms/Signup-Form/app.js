let signup = document.getElementById('signup')
let modal = document.getElementById('modal')
let close = document.getElementById('close')
let cancel = document.getElementById('cancel')

signup.addEventListener('click', () => {
    modal.style.display = 'block'
})

close.addEventListener('click', () => {
    modal.style.display = 'none'
})

cancel.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
})