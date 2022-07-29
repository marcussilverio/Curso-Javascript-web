function getPreco(imposto =0, moeda = 'R$'){
    return `${moeda} ${this.preco *(1-this.desc) *(1+imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {preco :49990, desc: 0.2}
// Call
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, '$'))
// Apply
console.log(getPreco.apply(carro))
//precisa de um array para passar os parametros da funcao
console.log(getPreco.apply(carro, [0.17, '$'])) 