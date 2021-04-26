let caret = document.getElementsByClassName('caret')

for (let i = 0; i < caret.length; i++) {
    caret[i].addEventListener('click', function () {
        this.parentElement.querySelector('.nested').classList.toggle('active')
        this.classList.toggle('caret-down')
    })
}