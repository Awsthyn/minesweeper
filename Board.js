const Cell = require("./Cell")

function Board(){
    this.value= []


}

Board.prototype.generateBoard = function(size){
    this.value = []

    for(i = 0; i <size/*27*/; i++){
        if(i == 0 || i == size-1/*26*/) this.value.push(generateHorizontallBorders(size))
        else this.value.push(generateColumn(size))
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

//Funciones auxiliares

function generateColumn(size){
    let column = []
    for(j=0; j < size/*27*/; j++){
        if(j === 0 || j === size-1/*26*/) column.push('|')
        else{
            let cell = new Cell()
            column.push(cell.value)}
    }
    return column
}

function generateHorizontallBorders(size){
    let border = []
    for(k=0; k < size/*27*/; k++){
        if(k == 0 || k == size-1/*26*/) border.push('+')
        else border.push('-')
    }
    return border
}

module.exports = Board