let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slides')
    let imgList = document.getElementsByClassName('img-list')
    let captionText = document.getElementById('caption')

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
        imgList[i].classList.remove('active')
    }


    slides[slideIndex - 1].style.display = 'block'
    imgList[slideIndex - 1].classList.add('active')
    captionText.innerText = imgList[slideIndex - 1].alt
}