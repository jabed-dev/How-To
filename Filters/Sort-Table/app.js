let sortbtn = document.getElementById('sortbtn')
let tr = document.querySelectorAll('#table tr')


let sort = false
sortbtn.addEventListener('click', () => {
    let names = []
    for (let i = 1; i < tr.length; i++) {
        names.push(tr[i].getElementsByTagName('td')[0].innerText)
    }

    names.sort()
    if (sort) {
        names.reverse()
        sort = false
    } else {
        sort = true
    }

    for (let i = 1; i < tr.length; i++) {
        tr[i].getElementsByTagName('td')[0].innerText = names[i - 1]
    }
})
