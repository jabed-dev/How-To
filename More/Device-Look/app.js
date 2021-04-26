function iframeStyle() {
    let iframe = document.getElementById('getIframe')
    let head = iframe.contentWindow.document.getElementsByTagName('head')[0]
    let link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'eframe-style.css'
    head.appendChild(link)
}