const year = document.getElementById('year')
const month = document.getElementById('month')
const days = document.getElementById('days')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

const date = new Date()

function renderCalendar() {
    date.setDate(1)
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    let firstDayIndex = date.getDay()
    let lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
    let nextDays = 6 - lastDayIndex

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    month.innerHTML = months[date.getMonth()]
    year.innerHTML = date.getFullYear()

    let day = ''
    for (let i = firstDayIndex; i > 0; i--) {
        day += `<li class="prev-day">${prevLastDay - i + 1}</li>`
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            day += `<li style="padding: 2px"><span class="today">${i}</span></li>`
        } else {
            day += `<li>${i}</li>`
        }
    }

    if (firstDayIndex + lastDay <= 7 * 5) {
        nextDays += 7
    }
    for (let i = 1; i <= nextDays; i++) {
        day += `<li class="next-day">${i}</li>`
    }

    days.innerHTML = day
}

prev.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
})
next.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar()
})

// default call renderCalendar function
renderCalendar()

