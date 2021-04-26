// Set the date we're counting down to
const countDownDate = new Date('Jan 1, 2022 12:0:0').getTime()

// Update the count down every 1 second
let countTimer = setInterval(function () {
    // Get today's date and time
    const nowDate = new Date().getTime()
    // Find the distance between now and the count down date
    let distance = countDownDate - nowDate

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countTimer)
        document.getElementById('timer').innerHTML = 'EXPIRED'
    }
}, 1000)