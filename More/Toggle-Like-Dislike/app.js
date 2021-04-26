let thumbs = document.getElementById('thumbs')

thumbs.addEventListener('click', function () {
    if (this.className.match('up')) {
        this.className = this.className.replace('up', 'down')
    } else {
        this.className = this.className.replace('down', 'up')
    }
})
