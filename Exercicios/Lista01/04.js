/*
    Crie uma funcao que ira receber dois valores, o dividendo e o divisor.
    A funcao devera imprimir o resultado e o resto da divisao destes dois valores.
*/
function divisaoEResto(dividendo, divisor){
    const div = parseFloat(dividendo / divisor).toFixed(2)
    const resto =dividendo % divisor

    console.log(`Divisao ${div} e resto ${resto}`)
}

divisaoEResto(40, 5) // output Divisao 8 e resto 0