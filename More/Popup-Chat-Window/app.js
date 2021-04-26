let chatBtn = document.getElementsByClassName('chat-btn')[0]
let cancelBtn = document.getElementsByClassName('cancel')[0]
let chatContainer = document.getElementById('chat-container')

chatBtn.addEventListener('click', () => {
    chatContainer.style.display = 'block'
})

cancelBtn.addEventListener('click', () => {
    chatContainer.style.display = 'none'
})