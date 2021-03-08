const fs = require('fs')

let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

    
    <script src="app.js"></script>
</body>
</html>
`
let css = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
`

fs.readdir(__dirname, (error, dirlist) => {
    if (error) throw error
    for (let i = 0; i < dirlist.length; i++) {
        if (dirlist[i] === 'app.js') continue
        fs.readdir(`${__dirname}\\${dirlist[i]}`, (error, dirlist2) => {
            if (error) throw error
            for (let j = 0; j < dirlist2.length; j++) {
                fs.writeFile(`${__dirname}\\${dirlist[i]}\\${dirlist2[j]}\\index.html`, html, 'utf8', (error) => {
                    if (error) throw error
                    fs.writeFile(`${__dirname}\\${dirlist[i]}\\${dirlist2[j]}\\style.css`, css, 'utf8', (error) => {
                        if (error) throw error
                        fs.writeFile(`${__dirname}\\${dirlist[i]}\\${dirlist2[j]}\\app.js`, '', 'utf8', (error) => {
                            if (error) throw error
                        })
                    })
                })
            }
        })
    }

    console.log('The all file has been saved!')
})
