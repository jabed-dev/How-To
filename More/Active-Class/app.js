let content = document.getElementById('content')
let btns = content.getElementsByClassName('btn')

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        let active = content.getElementsByClassName('active')[0]
        // if 1 element is active
        active.classList.remove('active')
        // if there is not active element
        // if (active) {
        //     active.className = active.className.replace('active', '')
        // }
        this.classList.add('active')
    })
}