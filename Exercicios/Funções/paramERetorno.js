//Funcao que pode ter retorno ou nao a depender do valor do argumento
function area (largura, altura){
    const area = largura * altura
    if(area > 20)
        console.log(`valor acima do permitido: ${area}m2`)
    else 
        return area
}

console.log(area(2,2))
console.log(area(2)) // aceita menos parametros
console.log(area())
console.log(area(2, 3, 4, 15)) // aceita mais parametros
console.log(area(5,5)) // retorno indefinido