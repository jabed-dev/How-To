function magnify(imgID, zoom) {
    let image = document.getElementById(imgID)
    // Create magnifier glass 
    let glass = document.createElement('biv')
    glass.setAttribute('class', 'img-magnifier-glass')
    // Insert magnifier glass 
    image.parentElement.insertBefore(glass, image)
    // Set background properties for the magnifier glass
    glass.style.backgroundImage = `url("${image.src}")`
    glass.style.backgroundSize = `${image.width * zoom}px ${image.height * zoom}px`

    // Magnifier glass border width remove in Magnifier background position
    // g=glass, h=haাf, w=width, h=height
    let gbw = parseInt(getComputedStyle(glass).borderWidth.match(/[\d]/g))
    let ghw = glass.offsetWidth / 2
    let ghh = glass.offsetHeight / 2
    // Execute a function when someone moves the magnifier glass over the image 
    glass.addEventListener('mousemove', moveMagnifier)
    image.addEventListener('mousemove', moveMagnifier)
    // Move Magnifier function
    function moveMagnifier(event) {
        // Prevent any other actions that may occur when moving over the image
        event.preventDefault()
        // Get the cursor's x and y position 
        let imageClientRect = image.getBoundingClientRect()
        let x = event.clientX - imageClientRect.left
        let y = event.clientY - imageClientRect.top
        // Prevent the magnifier glass from beingpositioned outside the image
        if (x > image.width - (ghw / zoom)) x = image.width - (ghw / zoom)
        if (x < ghw / zoom) x = ghw / zoom
        if (y > image.height - (ghh / zoom)) y = image.height - (ghh / zoom)
        if (y < ghh / zoom) y = ghh / zoom
        // Set the position of the magnifier glass
        glass.style.left = `${x - ghw}px`
        glass.style.top = `${y - ghh}px`
        // Display what the magnifier glass sees
        glass.style.backgroundPosition = `-${(x * zoom) - ghw + gbw}px -${(y * zoom) - ghh + gbw}px`
    }
}

magnify('image', 3)