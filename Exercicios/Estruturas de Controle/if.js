//===============================================//
function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com '+ nota);
    }
}
soBoaNoticia(8);
soBoaNoticia(5);
//===============================================//
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('E verdade '+ valor);
    }
}
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(true);
//===============================================//
/*  
    if sem bloco corresponde somente a primeira 
    instrucao apos o if
*/
function teste1(num){
    if(num>7)
        console.log(num);
        console.log('final');
}
teste1(8)
teste1(7)
//===============================================//