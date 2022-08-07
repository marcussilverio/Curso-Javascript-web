const pessoa = {
    nome : 'Rebecca',
    idade : 2,
    peso : 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}:${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable : true,
    writable: false,
    value : '01/01/2020'
})
console.log(pessoa)

const dest = {a:1}
const a1 = {b:2}
const a2 = {c:3, a:4}
const obj = Object.assign(dest, a1, a2)
console.log(obj)