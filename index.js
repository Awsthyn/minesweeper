const express = require("express")
const app = express()
const Board = require("./Board")

let board = new Board();

console.log(board.generateBoard())



app.listen(3000, () => {
    console.log('MineSweeper listening at 3000'); // eslint-disable-line no-console
        });