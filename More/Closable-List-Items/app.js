let closebtn = document.getElementsByClassName('close')

for (let i = 0; i < closebtn.length; i++) {
    closebtn[i].addEventListener('click', function () {
        this.parentElement.remove()
    })
}