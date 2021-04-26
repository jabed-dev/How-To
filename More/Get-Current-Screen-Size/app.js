let demo = document.getElementById('demo')


function getSize() {
    let width = window.innerWidth
    let height = window.innerHeight
    demo.innerHTML = `BrowserWindow width: <span style="color:red">${width}, height: ${height}</span>`
}

getSize()
window.addEventListener("resize", getSize)
