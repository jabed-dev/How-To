let closebtn = document.getElementsByClassName('closebtn')

for (let i = 0; i < closebtn.length; i++) {
    closebtn[i].addEventListener('click', function () {
        this.parentElement.style.display = 'none'
    })
}