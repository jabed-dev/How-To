let popup = document.getElementById('popup')
let popupText = document.getElementById('popuptext')

popup.addEventListener('click', () => {
    popupText.classList.toggle('show')
})