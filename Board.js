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


Board.prototype.resolve = function(){
    let resolution = []
    for(let i=0; i < this.value.length; i++){
        let columnResolution = []
        for(let j=0; j <this.value.length; j++){
            if(this.value[i][j] === " "){
            let counter = 0
            this.value[i-1][j-1] === "*" ? counter++: null//arriba a la izquierda
            this.value[i][j-1] === "*" ? counter++: null//arriba en el centro
            this.value[i+1][j-1] === "*" ? counter++: null//arriba a la derecha
            this.value[i-1][j] === "*" ? counter++: null//a la izquierda
            this.value[i+1][j] === "*" ? counter++: null//a la derecha
            this.value[i-1][j+1] === "*" ? counter++: null//abajo a la izquierda
            this.value[i][j+1] === "*" ? counter++: null//abajo al centro
            this.value[i+1][j+1] === "*" ? counter++: null//abajo a la derecha
            columnResolution.push(counter)
            }
            else columnResolution.push(this.value[i][j])
        }
        resolution.push(columnResolution)
    }
    return resolution
}


module.exports = Board