let starRating = document.getElementById('star-rating').getElementsByTagName('span')

for (let i = 0; i < starRating.length; i++) {
    starRating[i].addEventListener('click', function () {
        if (this.previousElementSibling) {
            if (this.previousElementSibling.className !== 'fa fa-star') {
                this.classList.toggle('checked')
            }
        } else {
            this.classList.toggle('checked')
        }
        if (this.nextElementSibling) {
            if (this.nextElementSibling.className !== 'fa fa-star') {
                this.classList.toggle('checked')
            }
        }
    })
}

