let container = document.getElementById('container')
let divheader = document.getElementById('divheader')

function dragElement(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
    if (divheader) {
        divheader.onmousedown = dragMouseDown
    } else {
        element.onmousedown = dragMouseDown
    }
    function dragMouseDown(event) {
        event = event || window.event
        event.preventDefault()
        pos3 = event.clientX
        pos4 = event.clientY
        document.onmousemove = elementDrag
        document.onmouseup = closeDragElement
    }

    function elementDrag(event) {
        event = event || window.event
        event.preventDefault()
        pos1 = pos3 - event.clientX
        pos2 = pos4 - event.clientY
        pos3 = event.clientX
        pos4 = event.clientY
        element.style.top = `${element.offsetTop - pos2}px`
        element.style.left = `${element.offsetLeft - pos1}px`
    }

    function closeDragElement() {
        document.onmousemove = null
        document.onmouseup = null
    }
}

dragElement(container)

