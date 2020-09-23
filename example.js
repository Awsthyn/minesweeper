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

let asteriscos = 0
for (elem of example){
    for(col of elem){
    if(col === "*") asteriscos++
    }
}
console.log(asteriscos) // 317
console.log(example.length-1 ** 2) // 676 casillas
console.log(asteriscos / example.length-1 ** 2) // 50% tablero minado