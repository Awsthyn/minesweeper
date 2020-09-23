var alternatives = [" ", "*"]

function Cell(){
this.value = alternatives[Math.floor(Math.random()* alternatives.length)];
}

module.exports = Cell