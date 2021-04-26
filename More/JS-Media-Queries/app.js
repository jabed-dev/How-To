function mediaScreen() {
    const mobileScreen = window.matchMedia('screen and (max-width: 600px)')
    const tabletScreen = window.matchMedia('screen and (min-width: 601px) and (max-width: 900px)')
    const laptopScreen = window.matchMedia('screen and (min-width: 901px) and (max-width: 1200px)')
    const desktopScreen = window.matchMedia('screen and (min-width: 1201px)')

    let container = document.getElementById('container')

    function mobile(screen) {
        if (screen.matches) {
            container.style.backgroundColor = 'red'
            console.log('MOBILE')
        }
    }
    function tablet(screen) {
        if (screen.matches) {
            container.style.backgroundColor = 'green'
            console.log('TABLET')
        }
    }
    function laptop(screen) {
        if (screen.matches) {
            container.style.backgroundColor = 'blue'
            console.log('LEPTOP')
        }
    }
    function desktop(screen) {
        if (screen.matches) {
            container.style.backgroundColor = 'orange'
            console.log('DESKTOP')
        }
    }

    mobileScreen.addListener(mobile)
    tabletScreen.addListener(tablet)
    laptopScreen.addListener(laptop)
    desktopScreen.addListener(desktop)
    mobile(mobileScreen)
    tablet(tabletScreen)
    laptop(laptopScreen)
    desktop(desktopScreen)
}

mediaScreen()

