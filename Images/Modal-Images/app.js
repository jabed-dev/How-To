let image = document.getElementById('image')
let modal = document.getElementById('modal')
let modalImg = document.getElementById('modal-img')
let caption = document.getElementById('caption')

image.addEventListener('click', function () {
    modal.style.display = 'block'
    modalImg.src = this.src
    caption.innerText = this.alt
})

let closebtn = document.getElementById('closebtn')
closebtn.addEventListener('click', () => {
    modal.style.display = 'none'
})