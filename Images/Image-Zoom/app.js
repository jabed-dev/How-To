function imageZoom(imgID, viewID) {
    let image = document.getElementById(imgID)
    let preview = document.getElementById(viewID)
    // Create lens 
    let lens = document.createElement('div')
    lens.setAttribute('class', 'zoom-lens')
    // Insert lens
    image.parentElement.insertBefore(lens, image)

    // Calculate the ratio between preview DIV and lens
    let cx = preview.offsetWidth / lens.offsetWidth
    let cy = preview.offsetHeight / lens.offsetHeight
    // Set background properties the preview DIV
    preview.style.backgroundImage = `url("${image.src}")`
    preview.style.backgroundSize = `${image.width * cx}px ${image.height * cy}px`
    // execute a function when someone moves the cursor over the image, or the lens
    lens.addEventListener('mousemove', moveLens)
    image.addEventListener('mousemove', moveLens)

    // Moving Lens function
    function moveLens(event) {
        // Prevent any other actions that may occur when moving over the image
        event.preventDefault()
        // Get the cursor's x and y position
        let imageClientRect = image.getBoundingClientRect()
        let x = event.clientX - imageClientRect.left
        let y = event.clientY - imageClientRect.top
        // calculate the position of the lens
        x = x - (lens.offsetWidth / 2)
        y = y - (lens.offsetHeight / 2)
        // Prevent the lens from being positioned outside the image
        let cpx = image.width - lens.offsetWidth
        let cpy = image.height - lens.offsetHeight
        if (x > cpx) x = cpx
        if (x < 0) x = 0
        if (y > cpy) y = cpy
        if (y < 0) y = 0
        // Set the position of the lens
        lens.style.left = `${x}px`
        lens.style.top = `${y}px`
        // Display what the lens sees
        console.log(x, y)
        preview.style.backgroundPosition = `-${x * cx}px -${y * cy}px`
    }
}

imageZoom('image', 'preview')