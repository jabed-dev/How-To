/* When the user clicks on the button,
*   toggle between hiding and showing the dropdown content
*/

function dropdownOpen() {
    document.getElementById('dropdown-content').classList.toggle('show')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementById('dropdown-content')
        if (dropdowns.classList.contains('show')) {
            dropdowns.classList.remove('show')
        }
    }
}
