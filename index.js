const fs = require("fs");
const express = require("express")
const app = express()
const Board = require("./Board")



app.get('/', (req, res)=>{
    let board = new Board();
    var html = fs.readFileSync(__dirname + "/index.html", "utf8");
    html = html.replace(`{problem}`, JSON.stringify({problem: board.generateBoard()}))
    html = html.replace(`{solution}`, JSON.stringify({solution: board.resolve()}))
    res.status(200)
    
    res.send(html)
})

app.listen(3000, () => {
    console.log('MineSweeper listening at 3000'); // eslint-disable-line no-console
        });