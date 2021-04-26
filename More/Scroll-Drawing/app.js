let triangle = document.getElementById('triangle')
let length = triangle.getTotalLength()


triangle.style.strokeDasharray = length
triangle.style.strokeDashoffset = length

window.addEventListener('scroll', () => {
    let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    let draw = length * scrollpercent
    triangle.style.strokeDashoffset = length - draw
})