let modal = document.getElementById('modal')
let openbtn = document.getElementById('open')
let closebtn = document.getElementById('close')
let cancelbtn = document.getElementById('cancel')
let deletebtn = document.getElementById('delete')

openbtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

closebtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

cancel.addEventListener('click', () => {
    modal.style.display = 'none'
})

deletebtn.addEventListener('click', () => {
    modal.style.display = 'none'
    setTimeout(() => {
        alert('Account deleted successfully')
    }, 100)
})

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
})