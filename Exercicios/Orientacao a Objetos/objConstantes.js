// pessoa -> endereco de memoria -> objeto
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// erro de atribuicao de novo valor a constante
// pessoa = {nome : 'Ana'}

Object.freeze(pessoa)

// nao gera erro mas o nome nao eh modificado
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua abc'
console.log (pessoa)

//criacao do ebjeto com freeze
const pessoaConstante = Object.freeze ({nome : 'Joao'})