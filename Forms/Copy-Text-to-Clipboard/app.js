let inputtext = document.getElementById('inputtext')
let tooltiptext = document.getElementById('tooltiptext')
let copybtn = document.getElementById('copybtn')

copybtn.addEventListener('click', () => {
    inputtext.select()
    inputtext.setSelectionRange(0, 9999)
    document.execCommand('copy')
    tooltiptext.innerHTML = `Copied: ${inputtext.value}`
    // let selectionText = window.getSelection().toString()
})

copybtn.addEventListener('mouseout', () => {
    tooltiptext.innerHTML = 'Copy to clipboard'
})

// window.addEventListener('select', () => {
//     console.log(window.getSelection().toString())
// })

// function empty() {
//     window.getSelection().empty()
//     console.log(window.getSelection().toString())
// }