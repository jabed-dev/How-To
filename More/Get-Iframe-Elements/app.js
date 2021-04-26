function styleIframe() {
    let iframe = document.getElementById('getiframe')
    let body = iframe.contentWindow.document.getElementsByTagName('body')[0]
    body.style.backgroundColor = 'red'
    body.style.color = 'blue'
    let h2 = body.getElementsByTagName('h2')[0]
    h2.style.backgroundColor = 'gold'
    h2.style.color = 'white'
}