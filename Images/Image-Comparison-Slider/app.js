function compareImage(imgID) {
    let img = document.getElementById(imgID)
    // get the width and height of the img element
    // iw = img width, ih = img height
    let iw = img.offsetWidth
    let ih = img.offsetHeight
    // set the width of the img element of 50%
    img.style.width = `${iw / 2}px`
    // create sliides
    let slider = document.createElement('div')
    slider.setAttribute('class', 'img-comp-slider')
    // insert slider
    img.parentElement.insertBefore(slider, img)
    // position the slider in the middle
    slider.style.top = (ih / 2) - (slider.offsetHeight / 2) + 'px'
    slider.style.left = (iw / 2) - (slider.offsetWidth / 2) + 'px'

    // clicked is to count the clicks
    let clicked = 0
    // execute a function when the mouse button is pressed
    slider.addEventListener('mousedown', (event) => {
        // prevent any other aactions that may occur when omving over the image
        event.preventDefault()
        // the slider is now clicked and ready to move
        clicked = 1
        // execute a function when the slider is moved
        window.addEventListener('mousemove', slideMove)
    })
    // and another function when the mouse button is released
    window.addEventListener('mouseup', () => clicked = 0)

    function slideMove(event) {
        // if the slider is no longer clicked, exit thes function
        if (clicked === 0) return false
        // calculate the cursor's x coordinate, relative to the image
        let imgClientRect = img.getBoundingClientRect()
        // cpx = cursor x position 
        let cpx = event.clientX - imgClientRect.left
        // prevent the slider from being positioned outside the image
        if (cpx < 0) cpx = 0
        if (cpx > iw) cpx = iw
        // resize the image width
        img.style.width = cpx + 'px'
        // change position the slider
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + 'px'
    }
}

compareImage('img-comp-overlay')
