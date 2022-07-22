// estrategia 1 para gerar valor padrao
console.log("Estrategia 1:")
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}
console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0)) // 0 retorna falso, portanto a func assume o valor padrao

// estrategia 2, 3 e 5 para gerar valor padrao
console.log("Estrategias 2, 3 e 4")
function soma2(a, b, c){
    a = a !== undefined ? a : 1 //estrategia 2
    b = 1 in arguments ? b : 1 // estrategia 3
    c = isNaN(c) ? 1 : c //estrategia 4
    return a+b+c
}
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))

// valor padrao do es2015
console.log("Forma atual")
function soma3(a =1, b = 1, c =1){
    return a+b+c
}
console.log(soma3())
console.log(soma3(3))
console.log(soma3(1,2,3))
console.log(soma3(0,0,0))