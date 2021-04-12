let sortbtn = document.getElementById('sortbtn')
let list = document.querySelectorAll('#list li')

let sort = false
sortbtn.addEventListener('click', () => {
    let listContent = []
    for (let i = 0; i < list.length; i++) {
        listContent.push(list[i].innerText)
    }

    listContent.sort()
    if (sort) {
        listContent.reverse()
        sort = false
    } else {
        sort = true
    }

    for (let i = 0; i < list.length; i++) {
        list[i].innerText = listContent[i]
    }
})
