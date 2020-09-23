const Cell = require("./Cell")

function Board(){
    this.value= []


}

Board.prototype.generateBoard = function(){
    this.value = []

    function generateColumn(){
        let column = []
        for(j=0; j < 27; j++){
            if(j === 0 || j === 26) column.push('|')
            else{
                let cell = new Cell()
                column.push(cell.value)}
        }
        return column
    }

    function generateHorizontallBorders(){
        let border = []
        for(k=0; k < 27; k++){
            if(k == 0 || k == 26) border.push('+')
            else border.push('-')
        }
        return border
    }


    for(i = 0; i <27; i++){
        if(i == 0 || i == 26) this.value.push(generateHorizontallBorders())
        else this.value.push(generateColumn())
    }
    return this.value
}


module.exports = Board