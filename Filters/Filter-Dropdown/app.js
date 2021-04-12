let dropBtn = document.getElementById('dropbtn')
let dropdown = document.getElementById('dropdown')
let input = document.getElementById('input')

dropbtn.addEventListener('click', () => {
    dropdown.classList.toggle('show')
})

let contentList = dropdown.getElementsByTagName('a')
input.addEventListener('keyup', () => {
    let value = input.value.toUpperCase()
    for (let i = 0; i < contentList.length; i++) {
        if (contentList[i].innerText.toUpperCase().indexOf(value) > -1) {
            contentList[i].style.display = 'block'
        } else {
            contentList[i].style.display = 'none'
        }
    }
})