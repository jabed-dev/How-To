let closebtn = document.getElementsByClassName('closebtn')

for (let i = 0; i < closebtn.length; i++) {
    closebtn[i].addEventListener('click', function () {
        this.parentElement.style.opacity = 0
        setTimeout(() => {
            this.parentElement.style.display = 'none'
        }, 500)
    })
}