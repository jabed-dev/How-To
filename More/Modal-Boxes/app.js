let modalBtn = document.getElementById('modal-btn')
let modal = document.getElementById('modal')
let close = document.getElementsByClassName('close')[0]

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

close.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
})