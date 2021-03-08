let subjectObject = {
    "Front-end": {
        "HTML": ["Links", "Images", "Tables", "Lists"],
        "CSS": ["Borders", "Margins", "Background", "Float"],
        "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
    },
    "Back-end": {
        "NodeJS": ["HTTP", "BUFFER", "PATH", "URL"],
        "NoSQL": ["SELECT", "POST", "UPDATE", "DELETE"]
    }
}

window.onload = function () {
    let subjectSel = document.getElementById('subject')
    let topicSel = document.getElementById('topic')
    let chapterSel = document.getElementById('chapter')

    for (let x in subjectObject) {
        subjectSel.options[subjectSel.options.length] = new Option(x, x)
    }

    subjectSel.onchange = function () {
        topicSel.length = 1
        chapterSel.length = 1
        for (let y in subjectObject[this.value]) {
            topicSel.options[topicSel.options.length] = new Option(y, y)
        }
    }

    topicSel.onchange = function () {
        chapterSel.length = 1
        let z = subjectObject[subjectSel.value][this.value]
        if (z) {
            for (let i = 0; i < z.length; i++) {
                chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i])
            }
        }
    }
}



