let battery = document.getElementById('battery')
let smile = document.getElementById('smile')

function chargeBatter() {
    battery.innerHTML = '&#xf244;'
    setTimeout(() => {
        battery.innerHTML = '&#xf243;'
    }, 1000)
    setTimeout(() => {
        battery.innerHTML = '&#xf242;'
    }, 2000)
    setTimeout(() => {
        battery.innerHTML = '&#xf241;'
    }, 3000)
    setTimeout(() => {
        battery.innerHTML = '&#xf240;'
    }, 4000)
}

function smiling() {
    smile.innerHTML = '&#xf118;'
    setTimeout(() => {
        smile.innerHTML = '&#xf11a;'
    }, 1000)
    setTimeout(() => {
        smile.innerHTML = '&#xf119;'
    }, 2000)
    setTimeout(() => {
        smile.innerHTML = '&#xf11a;'
    }, 3000)
}

chargeBatter()
setInterval(chargeBatter, 5000)

smiling()
setInterval(smiling, 4000)