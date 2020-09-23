
function Cell(){
this.value = Math.random() > 0.43 ? ' ' : '*' //43% es el porcentaje de aparición de una mina, en el ejemplo de heroku
}

module.exports = Cell