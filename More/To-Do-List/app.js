
let addBtn = document.getElementById('addbtn')
let input = document.getElementById('input')
let list = document.getElementById('list')
let li = list.getElementsByTagName('li')

addBtn.addEventListener('click', newListItem)
input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        newListItem()
    }
})

for (let i = 0; i < li.length; i++) {
    addCloseButton(li[i])
}

function addCloseButton(li) {
    // Create a close button and append it to each list item
    let span = document.createElement('span')
    span.setAttribute('class', 'close')
    span.innerHTML = '\u00d7'
    // Click on a close button to remove the current list item
    span.addEventListener('click', function () {
        this.parentElement.remove()
    })
    li.appendChild(span)

    // Add a checked symbol when clicking on a list item
    li.addEventListener('click', function () {
        this.classList.toggle('checked')
    })
    return li
}

// Create a new list item when clicking on the Add button
function newListItem() {
    if (input.value === '') {
        alert('You must write something!')
        return
    }
    let li = document.createElement('li')
    li.innerText = input.value
    input.value = ''
    list.appendChild(addCloseButton(li))
}


