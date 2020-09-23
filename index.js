const express = require("express")
const app = express()
const Board = require("./Board")



app.get('/', (req, res)=>{
    let board = new Board();

    res.status(200)
    res.json({problem: board.generateBoard(),
              solution: board.resolve()})
})

app.listen(3000, () => {
    console.log('MineSweeper listening at 3000'); // eslint-disable-line no-console
        });