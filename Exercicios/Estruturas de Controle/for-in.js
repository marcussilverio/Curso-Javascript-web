const notas = [6.7,7.4,9.8,8.1,7.7]

for(let i in notas){
    console.log(`nota = ${notas[i]}`);
}

const pessoa ={
    nome :'ana',
    sobrenome:'Silva',
    idade: 28,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}