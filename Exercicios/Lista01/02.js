/*
    Os trianglos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
    Equilatero: Os tres lados sao iguais.
    Isosceles: Dois lado iguais.
    Escaleno: Todos os lado sao diferentes.
    Crie uma funcao que recebe os comprimentos dos tres lados de um triangulo e retorne sua
    classificacao quanto ao tamanho de seus lados.
*/

function ehTriangulo(ladoA, ladoB, ladoC){
    if((ladoA+ladoC) > ladoB && (ladoA+ladoB)> ladoC && (ladoB+ladoC) > ladoA){
        return true
    }
    return false
}

function tipoTriangulo(ladoA, ladoB, ladoC){
    if(!ehTriangulo(ladoA, ladoB, ladoC)){
        return "Nao eh triangulo"
    }
    if(ladoA === ladoB && ladoB === ladoC)
        return "Equilatero"
    if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC)
        return "Escaleno"
    if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC )
        return "Isosceles"
}

console.log(tipoTriangulo(15,5,5))