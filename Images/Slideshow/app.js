let slideIndex = 0
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slides')
    let dots = document.getElementsByClassName('dot')
    /*
    // Change image every 2 seconds active 16,17 line and disable 19
    // slideIndex++
    // if (slideIndex > slides.length) { slideIndex = 1 }
    */
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
        dots[i].classList.remove('active')
    }

    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].classList.add('active')

    // Change image every 2 seconds
    // setTimeout(showSlides, 2000)
}

