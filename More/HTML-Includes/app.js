function includeHTML() {
    let elements = document.querySelectorAll('[data-include]')
    for (let i = 0; i < elements.length; i++) {
        let file = elements[i].getAttribute('data-include')
        if (file) {
            let xhttp = new XMLHttpRequest()
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        elements[i].innerHTML = this.responseText
                    } else if (this.status === 404) {
                        elements[i].innerHTML = 'Page not found'
                    }
                    elements[i].removeAttribute('data-include')
                }
            }
            xhttp.open('GET', file, this)
            xhttp.send()
        }
    }
}


includeHTML()