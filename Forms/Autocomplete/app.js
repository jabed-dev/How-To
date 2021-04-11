let input = document.getElementById('input')

function autocomplete(input, country) {
    let currentFocus, active = false

    input.addEventListener('input', createAutocompleteList)
    input.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.keyCode === 32) {
            createAutocompleteList.call(this)
        }
    })

    function createAutocompleteList() {
        let value = this.value
        closeAllLists()
        if (!value) return
        currentFocus = -1
        let div1 = document.createElement('div')
        div1.setAttribute('id', 'autocomplete-list')
        div1.setAttribute('class', 'autocomplete-items')
        this.parentNode.appendChild(div1)

        for (let i = 0; i < country.length; i++) {
            if (country[i].substr(0, value.length).toUpperCase() === value.toUpperCase()) {
                let div2 = document.createElement('div')
                div2.innerHTML = `<strong>${country[i].substr(0, value.length)}</strong>`
                div2.innerHTML += country[i].substr(value.length)
                div2.innerHTML += `<input type="hidden" value="${country[i]}">`
                div2.addEventListener('click', function () {
                    input.value = this.getElementsByTagName('input')[0].value
                    closeAllLists()
                })
                div1.appendChild(div2)
            }
        }
    }

    input.addEventListener('keydown', (event) => {
        let list = document.getElementById('autocomplete-list')
        if (list) {
            list = list.getElementsByTagName('div')
        } else {
            return
        }

        if (event.keyCode === 40) {
            currentFocus++
            addActive(list, 1)
        } else if (event.keyCode === 38) {
            currentFocus--
            addActive(list, -1)
        } else if (event.keyCode === 13) {
            event.preventDefault()
            if (currentFocus > -1) {
                list[currentFocus].click()
            }
        }
    })

    function addActive(list, n) {
        if (active) list[currentFocus - n].classList.remove('autocomplete-active')
        if (currentFocus < 0) currentFocus = list.length - 1
        if (currentFocus >= list.length) currentFocus = 0
        list[currentFocus].classList.add('autocomplete-active')
        active = true
    }

    function closeAllLists(element) {
        let listItems = document.getElementsByClassName('autocomplete-items')[0]
        if (listItems && element !== listItems && element !== input) {
            listItems.parentNode.removeChild(listItems)
            active = false
        }
    }
    document.addEventListener('click', (event) => {
        closeAllLists(event.target)
    })
}

/*An countryay containing all the country names in the world:*/
let countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central Arfrican Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauro', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre & Miquelon', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'St Kitts & Nevis', 'St Lucia', 'St Vincent', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Virgin Islands(US)', 'Yemen', 'Zambia', 'Zimbabwe']

autocomplete(input, countries)

