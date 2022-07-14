//===============================================//
const imprimirResultado = function(nota){
    if(nota > 7){
        console.log('Aprovado');
    }else{
        console.log('Reprovado');
    }
}
imprimirResultado(8);
imprimirResultado(7);
imprimirResultado('Epa'); // cuidado
//===============================================//
Number.prototype.entre = function (inicio,fim){
    return this >= inicio && this <=fim;
}
const printRes = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de honra');
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado');
    }else if(nota.entre(5, 6.99)){
        console.log('Recuperacao')
    }else if(nota.entre(0,4.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota invalida');
    }
}
printRes(10);
printRes(8);
printRes(6);
printRes(2);
//===============================================//
