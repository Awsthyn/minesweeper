const fs = require("fs");
const express = require("express")
const app = express()
const path = require("path");
const PORT = process.env.PORT || 3000;
const Board = require("./Board")

/*
if (process.env.NODE_ENV === "production") {

    app.use(express.static(path.join(__dirname, ".")));
  }*/

app.get('/', (req, res)=>{
    const {size} = req.query

    let board = new Board();
    let problem;
    Number(size) > 5 && Number(size) < 35 ? problem = board.generateBoard(Number(size) + 2) : problem = board.generateBoard(27)
    var html = fs.readFileSync(__dirname + "/index.html", "utf8");
    html = html.replace(`{problem}`, JSON.stringify({problem}))
    html = html.replace(`{solution}`, JSON.stringify({solution: board.resolve()}))
    res.status(200)
    
    res.send(html)
})

app.listen(PORT, () => {
    console.log('MineSweeper listening at 3000'); // eslint-disable-line no-console
        });