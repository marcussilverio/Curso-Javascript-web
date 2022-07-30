/*
    Crie uma funcao que recebe dois parametros, base e expoente, 
    e retorne a base elevada ao expoente
*/

function pow(base, expoente){
    let potencia =1;
    for(let i =0; i < expoente; i++){
        potencia*= base;
    }
    return potencia;
}

console.log(pow(2,5)) // output 32