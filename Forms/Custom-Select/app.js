
let customSelector = document.getElementsByClassName('custom-select')[0]
let select = customSelector.getElementsByTagName('select')[0]

let div1 = document.createElement('div')
div1.setAttribute('class', 'select-selected')
div1.innerHTML = select.options[select.selectedIndex].innerHTML
customSelector.appendChild(div1)
let div2 = document.createElement('div')
div2.setAttribute('class', 'select-items select-hide')

for (let i = 1; i < select.length; i++) {
    let div3 = document.createElement('div')
    div3.innerHTML = select.options[i].innerHTML
    div3.addEventListener('click', function () {
        for (let j = 0; j < select.length; j++) {
            if (select.options[j].innerHTML === this.innerHTML) {
                select.selectedIndex = j
                div1.innerHTML = this.innerHTML
                let y = this.parentNode.getElementsByClassName('same-as-selected')[0]
                if (y) {
                    y.removeAttribute('class')
                }
                this.setAttribute('class', 'same-as-selected')
                break
            }
        }
        div1.click()
    })
    div2.appendChild(div3)
}
customSelector.appendChild(div2)
div1.addEventListener('click', function (e) {
    e.stopPropagation()
    closeAllSelect(this)
    this.nextSibling.classList.toggle('select-hide')
    this.classList.toggle('select-arrow-active')
})


function closeAllSelect(element) {
    let arrOn = true
    let selectItems = document.getElementsByClassName('select-items')[0]
    let selectSelected = document.getElementsByClassName('select-selected')[0]
    if (element == selectSelected) {
        arrOn = false
    }
    if (arrOn) {
        selectSelected.classList.remove('select-arrow-active')
        selectItems.classList.add('select-hide')
    }
}

document.addEventListener('click', closeAllSelect)