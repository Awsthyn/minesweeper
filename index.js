const express = require("express")
const app = express()
const example = 
[["+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","+"],
["|"," "," "," "," "," ","*"," ","*"," ","*","*","*","*"," "," "," ","*","*"," "," "," "," ","*","*","*","|"],
["|","*"," "," "," "," ","*"," "," "," "," "," ","*","*","*"," "," ","*","*","*"," ","*"," "," ","*","*","|"],
["|"," ","*","*"," ","*","*","*"," "," ","*","*"," "," "," ","*","*","*","*"," ","*"," "," "," ","*","*","|"],
["|"," ","*"," ","*","*","*"," "," ","*","*","*","*","*","*","*","*"," "," ","*","*"," ","*","*","*","*","|"],
["|","*","*"," "," "," ","*","*","*","*"," "," ","*"," ","*","*","*","*"," "," ","*"," "," "," "," "," ","|"],
["|"," "," ","*"," ","*","*"," "," "," "," "," "," ","*"," ","*"," ","*"," "," "," "," ","*","*","*","*","|"],
["|","*","*"," ","*","*","*"," ","*"," ","*"," "," "," ","*","*"," "," ","*"," "," ","*"," ","*","*"," ","|"],
["|"," ","*"," "," ","*"," "," ","*"," ","*","*","*"," "," "," ","*"," ","*","*","*","*"," ","*"," "," ","|"],
["|"," ","*","*"," "," ","*","*"," "," ","*"," "," "," "," ","*","*"," ","*"," "," "," ","*","*"," "," ","|"],
["|","*","*"," "," "," ","*"," ","*"," "," "," ","*"," ","*"," "," ","*","*"," "," "," "," ","*"," "," ","|"],
["|"," ","*"," "," "," "," "," "," ","*"," "," "," "," "," "," "," ","*","*","*"," "," "," "," ","*","*","|"],
["|","*"," ","*"," "," "," "," ","*","*","*"," ","*"," ","*","*"," "," ","*","*","*","*"," ","*"," "," ","|"],
["|"," "," ","*","*"," "," ","*","*"," "," "," ","*","*"," ","*","*","*"," ","*","*","*","*","*"," ","*","|"],
["|"," ","*","*","*","*"," ","*","*"," ","*","*"," ","*"," "," "," "," "," "," "," ","*"," "," ","*","*","|"],
["|","*","*","*"," "," "," "," "," "," "," "," "," "," "," "," "," ","*"," ","*"," ","*","*","*","*"," ","|"],
["|","*","*"," ","*"," ","*","*"," ","*","*","*"," "," ","*","*"," ","*","*","*"," "," "," ","*"," ","*","|"],
["|","*","*"," "," "," "," "," "," "," "," "," "," "," "," ","*","*","*"," ","*"," ","*","*","*","*"," ","|"],
["|"," "," ","*"," ","*","*"," ","*"," ","*"," ","*"," ","*","*"," ","*"," "," ","*","*"," "," "," ","*","|"],
["|","*"," "," ","*"," ","*"," "," "," ","*","*"," ","*","*","*","*"," "," ","*","*","*","*","*","*","*","|"],
["|"," ","*","*"," "," ","*","*","*"," ","*","*","*","*","*"," ","*","*"," ","*","*","*","*"," "," "," ","|"],
["|","*"," "," ","*","*","*"," "," "," ","*"," "," ","*","*"," ","*","*","*"," ","*","*"," "," ","*","*","|"],
["|","*"," ","*","*"," ","*","*","*"," "," ","*","*","*"," "," ","*"," "," "," ","*","*"," "," "," "," ","|"],
["|"," ","*","*"," ","*","*","*"," "," ","*"," "," "," "," "," ","*","*"," ","*"," "," ","*"," "," "," ","|"],
["|","*"," ","*","*","*","*","*","*","*","*","*"," ","*"," ","*","*","*"," "," "," ","*","*","*","*"," ","|"],
["|","*","*","*","*","*","*"," ","*","*"," ","*"," "," "," ","*","*","*"," ","*"," ","*","*","*","*","*","|"],
["+","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","+"]]


app.listen(3000, () => {
    console.log('MineSweeper listening at 3000'); // eslint-disable-line no-console
        });