/*
    Crie uma funcao que dado dois valores (passados como parametros)
    monstre no console a soma, subtracao, multiplicacao e divisao 
    desses valores.
*/
function operacoes(valor1, valor2){
    let soma, subtracao, multiplicacao, divisao
    soma = valor1 + valor2
    subtracao = valor1 - valor2
    multiplicacao = valor1 * valor2 
    divisao = valor1/valor2
    return {soma, subtracao, multiplicacao, divisao}
}
const op = operacoes(10,5)
console.log(op.soma)
console.log(op.subtracao)
console.log(op.multiplicacao)
console.log(op.divisao)