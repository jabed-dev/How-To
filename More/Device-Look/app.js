function iframeStyle() {
    let iframe = document.getElementById('getIframe')
    let head = iframe.contentWindow.document.getElementsByTagName('head')[0]
    let style = document.createElement('style')
    let styleNode = document.createTextNode(`
        ::-webkit-scrollbar {
            display: none;
        }
    `)
    style.appendChild(styleNode)
    head.appendChild(style)
}

window.addEventListener('load', iframeStyle)